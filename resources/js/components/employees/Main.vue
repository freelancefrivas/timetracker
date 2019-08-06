<template>
    <div class="main-content-wrap">

        <router-view></router-view>
    </div>
</template>

<script>
    import EmployeesList from "./List";

    export default {
        name: "employees-main",
        components: {EmployeesList}
    }
</script>

<style scoped>

</style>