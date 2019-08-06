<template>
    <div class="vertical-navbar">
        <div class="vertical-navbar-wrap">
            <div class="app-logo">
                <a class="logo" href="/">
                    <h1 class=""><img class="logo-img align-middle" src="/images/logo.png" id="logo" alt="logo"/> Time
                        Tracker</h1>

                </a>
            </div><!-- .app-logo -->

            <div class="app-menu">
                <div class="user-info">
                    <!-- <div class="user-avatar">
                         <img alt="" src="assets/content/user.jpg">
                         <div class="badge"></div>
                     </div> -->

                    <h5 class="user-name h6" v-if="currentUser">
                        {{currentUser.first_name+' '+currentUser.last_name}}</h5>
                </div><!-- .user-info -->

                <nav class="main-menu">
                    <ul>

                        <li class="menu-item">
                            <router-link to="/employees" class="item-link">
                                <span class="text">Employees</span>
                                <span class="icon"><i class="icon-wrap fa fa-address-book"></i></span>
                            </router-link>
                        </li>

                    </ul>
                </nav><!-- .main-menu -->
            </div><!-- .app-menu -->
        </div><!-- .vertical-navbar-wrap -->

        <div class="navbar-overlay"></div>
    </div>
</template>

<script>
    export default {
        name: "app-header",
        computed: {
            currentUser() {
                return this.$store.getters.currentUser;
            },
        },
    }
</script>

<style scoped>
    #logo {
        width: 33px;
    }
</style>