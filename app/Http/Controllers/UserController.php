<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeRequest;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    /**
     * Returns list of employees as JSON
     */
    public function employees()
    {
        $employees = User::where(['role' => User::ROLE_EMPLOYEE])->get();

        return response()->json([
            'employees' => $employees,
        ], 200);
    }

    /**
     * Returns user
     * @param $id integer user id
     * @return JsonResponse
     */
    public function get($id)
    {
        $employee = User::whereId($id)->first();

        return response()->json([
            'user' => $employee,
        ], 200);
    }

    /**
     * Inserts a new user
     * @param EmployeeRequest $request
     * @return JsonResponse
     */
    public function create(EmployeeRequest $request)
    {
        $user = User::create($request->only(['first_name', 'last_name', "email", "role", "password"]));

        return response()->json([
            'user' => $user,
        ], 200);
    }
}
