<?php

namespace App\Http\Requests;

use App\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "first_name" => "required|min:3",
            "last_name" => "required|min:3",
            'email' => "required|email",
            'password' => 'required|min:4',
            'role' => Rule::in([User::ROLE_EMPLOYEE, User::ROLE_ADMIN]),
        ];
    }
}
