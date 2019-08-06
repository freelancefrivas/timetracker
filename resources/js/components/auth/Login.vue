<template>

    <main class="main-content">
        <div class="main-content-wrap">
            <div class="content bg-image-1">
                <div class="card extra-card">
                    <div class="card-header h5 text-center">
                        Sign in with your e-mail to continue
                    </div>
                    <div class="card-block">

                        <form class="" @submit.prevent="authenticate">
                            <div class="form-group " v-if="authError">
                                <div class="alert alert-danger" role="alert">
                                    {{ authError }}
                                </div>
                            </div>
                            <div class="form-group">
                                <input v-bind:class="'form-control '+(authError?'is-invalid':'')" type="email" name=""
                                       value=""
                                       placeholder="Username" v-model="form.email">
                            </div>
                            <div class="form-group">
                                <input v-bind:class="'form-control '+(authError?'is-invalid':'')" type="password"
                                       name="" value=""
                                       placeholder="Password" v-model="form.password">
                            </div>
                            <div class="form-group">

                                <p-check name="remember" class="p-svg p-curve" color="primary" v-model="form.remember"
                                         value="1">
                                    <!-- svg path -->
                                    <svg slot="extra" class="svg svg-icon" viewBox="0 0 20 20">
                                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                              style="stroke: white;fill:white"></path>
                                    </svg>
                                    Keep me signed in
                                </p-check>

                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-default">Sign In</button>
                            </div>
                            <!--    <div class="additional-info">
                                    <a href="#">Sign up</a>
                                    <span class="divider"></span>
                                    <a href="#">Forgot your password?</a>
                                </div> -->
                        </form>
                    </div>
                </div>
            </div>
        </div><!-- .main-content-wrap -->
    </main><!-- .main-content -->

</template>

<script>
    import {login} from '../../helpers/auth';

    export default {
        name: "Login",
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                    remember: null,
                },
                error: null,
            }
        },
        methods: {
            authenticate() {
                this.$store.dispatch('login');

                login(this.form)
                    .then((res) => {
                        this.$store.commit("loginSuccess", res);
                        this.$router.push({path: '/'});
                    })
                    .catch((error) => {
                        this.$store.commit("loginFailed", {error});

                    })
            },
        },
        computed: {
            authError() {
                return this.$store.getters.authError;
            },

        },

    }
</script>

<style scoped>

</style>