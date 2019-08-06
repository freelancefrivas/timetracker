<template>
    <div class="row">
        <div class="col">
            <div class="card">
                <!--  <div class="card-header h5">
                      Badge in content
                  </div>-->
                <div class="card-block">
                    <ul class="ni-breadcrumb">
                        <li>
                            <router-link to="/">Home</router-link>
                            <span class="separator">/</span>
                        </li>
                        <li>
                            <span class="static">Employees</span>
                        </li>
                    </ul>
                    <router-link class="btn btn-default" to="/employees/create">Add New</router-link>
                    <br/>
                    <br/>
                    <div class="table-responsive">
                        <table class="table table-hover m-b-0">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <template v-if="!employees.length">
                                <tr>
                                    <td colspan="3" class="text-center">
                                        No employees available.
                                    </td>
                                </tr>
                            </template>
                            <template v-else>
                                <tr v-for="employee in employees" :key="employee.id">
                                    <td>
                                        {{employee.first_name+''+employee.last_name}}
                                    </td>
                                    <td>
                                        {{employee.email}}
                                    </td>
                                    <td>
                                        <router-link v-bind:to="'/employees/'+employee.id"><i
                                                class="icon-wrap fa fa-eye" title="view"></i>
                                        </router-link>
                                    </td>
                                </tr>
                            </template>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "employees-list",
        mounted() {
            if (this.employees.length) {
                return;
            }
            this.$store.dispatch('getEmployees');
        },
        computed: {
            employees() {
                return this.$store.getters.employees;
            }
        },
    }
</script>

<style scoped>

</style>