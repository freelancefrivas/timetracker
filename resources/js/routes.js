import Home from './components/Home';
import Login from './components/auth/Login.vue';
import EmployeesMain from './components/employees/Main.vue';
import EmployeesList from './components/employees/List.vue';
import CreateEmployee from './components/employees/Create.vue';
import ViewEmployee from './components/employees/View.vue';


export const routes = [
        /* {
             path: '',
             alias: '/',
             component: Home,
             beforeEnter(to, from, next) {
                 console.log(to, from, next);
                 next('/login');
             },
             meta: {
                 extraPage: false,
                 requiresAuth: true,
             },
         },*/
        {
            path: '/login',
            component: Login,
            meta: {
                title: 'Login',
                extraPage: true,
            },

        },
        {
            path: '/employees',
            component: EmployeesMain,
            meta: {
                requireAuth: true,
                extraPage: false,
            },
            children: [
                {
                    path: '/',
                    component: EmployeesList,
                    meta: {
                        title: 'Employees',
                        extraPage: false,
                        requireAuth: true,
                    },
                },
                {
                    path: 'create',
                    component: CreateEmployee,
                    meta: {
                        title: 'Create Employee',
                        extraPage: false,
                        requireAuth: true,
                    },
                },
                {
                    path: ':id',
                    component: ViewEmployee,
                    meta: {
                        title: 'View Employee',
                        extraPage: false,
                        requireAuth: true,
                    },
                },
            ],
        }
    ]
;