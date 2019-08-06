<template>
    <div class="row">
        <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1 ">
            <div class="card">
                <div class="card-block">
                    <ul class="ni-breadcrumb">
                        <li>
                            <router-link to="/">Home</router-link>
                            <span class="separator">/</span>
                        </li>
                        <li>
                            <router-link to="/employees">Employees</router-link>
                            <span class="separator">/</span>
                        </li>
                        <li>
                            <span class="static">Create</span>
                        </li>
                    </ul>
                    <form @submit.prevent="add">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="First name"
                                           v-model="employee.first_name">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="Last name"
                                           v-model="employee.last_name">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input class="form-control" type="email" placeholder="Email"
                                           v-model="employee.email">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input class="form-control" type="password" placeholder="Passsword"
                                           v-model="employee.password">
                                </div>
                            </div>
                            <input type="hidden" v-model="employee.role"/>
                        </div>
                        <div class="row">
                            <div class="col">
                                <button class="btn btn-default btn-md" type="submit">Create</button>
                            </div>
                        </div>
                    </form>
                    <div class="errors mt-3" v-if="errors">
                        <div class="alert alert-danger" role="alert"
                        >
                            <ul>
                                <li v-for="(fieldsError,fieldName) in errors" :key="fieldName">
                                    {{fieldsError.join('\n')}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import validate from 'validate.js';

    export default {
        name: "Create",
        data() {
            return {
                employee: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    role: "Employee",
                },
                errors: null,
            }
        },
        methods: {
            add() {
                this.errors = null;

                const constraints = this.getConstraints();

                const errors = validate(this.$data.employee, constraints);

                if (errors) {
                    this.errors = errors;
                    return;
                }

                axios.post('/api/users/create', this.employee, {
                })
                    .then((response) => {
                        this.$router.push('/employees');
                    })
                ;

                //send the employee data to the BE api
            },
            getConstraints() {
                return {
                    first_name: {
                        presence: true,
                        length: {
                            minimum: 3,
                            message: "must be at least 3 characters long",
                        },
                    },
                    last_name: {
                        presence: true,
                        length: {
                            minimum: 3,
                            message: "must be at least 3 characters long",
                        },
                    },
                    email: {
                        presence: true,
                        email: true,
                    },
                    password: {
                        presence: true,
                        length: {
                            minimum: 4,
                            message: "must be at least 3 characters long",
                        },
                    },
                }
            },
        },
        computed: {
            currentUser() {
                return this.$store.getters.currentUser;
            },
        },
    }
</script>

<style scoped>

</style>