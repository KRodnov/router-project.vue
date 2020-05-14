<template>
    <div>
        <h1>Идет загрузка...</h1>
    <img src="https://ux.pub/wp-content/uploads/2018/09/7-2.gif" alt="загрузка" style="width: 500px;">
    </div>
</template>

<script>


    export default {

        mounted: function () {
            setTimeout(this.loadingComplete, 5000)
        },


    methods:{
        loadingComplete: function () {
            this.$router.push({path: 'Menu'})
        }
    }}
</script>

<style scoped>

</style>