export function initialize(store, router) {
    // This callback runs before every route change, including on page load.
    router.beforeEach((to, from, next) => {
        // This goes through the matched routes from last to first, finding the closest route with a title.
        // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
        const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
        // Find the nearest route element with meta tags.
        const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
        const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

        // If a route with a title was found, set the document (page) title to that value.
        if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

        // Remove any stale meta tags from the document using the key attribute we set below.
        Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

        // Skip rendering meta tags if there are none.
        if (nearestWithMeta)
        // Turn the meta tag definitions into actual elements in the head.
            nearestWithMeta.meta.metaTags.map(tagDef => {
                const tag = document.createElement('meta');

                Object.keys(tagDef).forEach(key => {
                    tag.setAttribute(key, tagDef[key]);
                });

                // We use this to track which meta tags we create, so we don't interfere with other ones.
                tag.setAttribute('data-vue-router-controlled', '');

                return tag;
            })
            // Add the meta tags to the document head.
                .forEach(tag => document.head.appendChild(tag));

        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        const currentUser = store.state.currentUser;

        if (typeof (to.meta.extraPage) !== 'undefined') {
            store.commit('setExtraPage', to.meta.extraPage);
        }
        if (typeof (to.meta.title) !== 'undefined') {
            store.commit('setTitle', to.meta.title);
        }
        if (requiresAuth && !currentUser) {
            next('/login');
        } else if (to.path == '/login' && currentUser) {
            next('/');
        } else if (to.path == '/' || to.path == '') {
            console.log(currentUser);
            if (currentUser == null)
                next('login');
            else
                switch (currentUser.role) {
                    case "Admin":
                        next('employees/');
                        break;
                    case "Employee":
                        next('users/index');
                        break;
                }
        } else {
            next();
        }
    });

//Deal with non unauthenticated requests:
    axios.interceptors.response.use(null, (error) => {
        console.log(error.response.status);
        if (error.response.status == 401) {
            store.commit('logout');
            router.push('/login');
        }

        return Promise.reject(error);
    });

    axios.defaults.headers.common["Authorization"] = 'Bearer ' + store.getters.currentUser.token;
}