<template>
    <div class="row">
        <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1 ">
            <div class="card" v-if="employee">
                <div class="card-header h5">
                    {{employee.first_name+' '+employee.last_name}}
                </div>
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
                            <span class="static">View</span>
                        </li>
                    </ul>
                    <div class="row">
                        <div class="col">
                            <ul id="employee_profile">
                                <li>
                                    <b>First Name:</b> {{employee.first_name}}
                                </li>
                                <li>
                                    <b>Last Name:</b> {{employee.last_name}}
                                </li>
                                <li>
                                    <b>Email:</b> {{employee.email}}
                                </li>
                                <li>
                                    <b>Created at:</b> {{ employee.created_at | moment(" MMMM Do YYYY") }}
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
    export default {
        name: "ViewEmployee",
        data() {
            return {
                employee: null,
            };
        },
        created() {
            if (this.employees.length) {
                this.employee = this.employees.find((employee) => employee.id == this.$route.params.id);
            } else {
                axios.get("/api/users/" + this.$route.params.id, {})
                    .then((response) => {
                        this.employee = response.data.user;
                    });
            }

        },
        computed: {
            currentUser() {
                return this.$store.getters.currentUser;
            },
        },
    }
</script>

<style scoped>
    #employee_profile li {
        font-size: 14px;
    }
</style>