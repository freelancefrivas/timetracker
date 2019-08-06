<template>
    <div v-bind:class="this.$store.isLoading?'':'loaded'">
        <div class="app-loader">
            <div class="overlay"></div>
            <div class="loader loader-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div v-bind:class="'app '+ (this.$store.getters.isExtraPage?'extra-page':'')">
            <div class="site-container">
                <sidebar v-if="!this.$store.getters.isExtraPage"/>
                <div class="main-content">
                    <dashboard v-if="!this.$store.getters.isExtraPage"/>
                    <router-view></router-view>
                </div>

                <div id="addition-navbar" class="addition-navbar">
                    <div class="navbar-wrap">
                        <div class="navbar-header">
                            <h4 class="h5">Addition options</h4>
                        </div>

                        <div class="navbar-content">
                            <div class="text-center mb-4">
                                <img alt="" class="circle mb-3" src="assets/content/user.jpg">
                                <button type="button" class="btn btn-primary btn-outline btn-block">Load new avatar
                                </button>
                            </div>

                            <div class="mb-4">
                                <h5 class="mt-0">Skills</h5>
                                <p class="mb-1"><strong>Angular</strong></p>
                                <div class="progress mb-4">
                                    <div class="progress-bar bg-info w-75" role="progressbar" aria-valuenow="25"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <p class="mb-1"><strong>React</strong></p>
                                <div class="progress mb-4">
                                    <div class="progress-bar bg-danger w-75" role="progressbar" aria-valuenow="25"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <p class="mb-1"><strong>Vue.js</strong></p>
                                <div class="progress mb-4">
                                    <div class="progress-bar bg-success w-50" role="progressbar" aria-valuenow="25"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <p class="mb-1"><strong>Backbone.js</strong></p>
                                <div class="progress mb-4">
                                    <div class="progress-bar bg-warning w-25" role="progressbar" aria-valuenow="25"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <button type="button" class="btn btn-success btn-block">Save</button>
                            </div>
                        </div>
                    </div>
                </div><!-- .addition-navbar -->

            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from './Sidebar.vue';
    import Dashboard from "./Dashboard";

    export default {
        name: 'main-app',
        components: {Dashboard, Sidebar},
    }
</script>
