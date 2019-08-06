import {getLocalUser} from "./helpers/auth";

const user = getLocalUser();

export default {
    state: {
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null,
        employees: [],
        extraPage: false,
        title: null,
    },
    getters: {
        isLoading(state) {
            return state.loading;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        currentUser(state) {
            return state.currentUser;
        },
        authError(state) {
            return state.auth_error;
        },
        employees(state) {
            return state.employees;
        },
        isExtraPage(state) {
            return state.extraPage;
        },
        title(state) {
            return state.title;
        },
    },

    mutations: {
        login(state) {
            state.loading = true;
            state.auth_error = null;
        },
        loginSuccess(state, payload) {
            state.auth_error = null;
            state.isLoggedIn = true;
            state.loading = false;
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});

            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },
        loginFailed(state, payload) {
            state.loading = false;
            state.auth_error = payload.error;
        },
        logout(state) {
            localStorage.removeItem("user");
            state.isLoggedIn = false;
            state.currentUser = null;
        },
        setExtraPage(state, isExtraPage) {
            state.extraPage = isExtraPage;
        },
        setTitle(state, title) {
            state.title = title;
        },
        updateEmployees(state, payload) {
            state.employees = payload;
        },


    },
    actions: {
        login(context) {
            context.commit("login");
        },
        getEmployees(context) {
            console.log(context.state.currentUser.token);
            axios.get('/api/users/employees', {
                headers: {
                    "Authorization": "Bearer " + context.state.currentUser.token,
                },
            })
                .then((response) => {
                    console.log(response);
                    context.commit('updateEmployees', response.data.employees);
                })
            ;
        },
    },


};
