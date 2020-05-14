<template>
    <div>
        <Menu></Menu>
        <h1>Франция</h1>
        <img src="https://f2.mylove.ru/mtnyDmPD6G" alt="Франция">
        <p>Франция – это страна в Западной Европе, на территории которой находятся средневековые города, альпийские
            деревни и пляжи Средиземного моря. Париж, столица государства, славится своими домами моды, старейшими
            художественными музеями, в числе которых Лувр, и достопримечательностями, такими как Эйфелева башня. Франция
            известна своими винами и изысканной кухней. Наскальная живопись в пещере Ласко, амфитеатр Трех Галлий в
            Лионе и огромный Версальский дворец свидетельствуют о богатой истории этих мест.</p>
        <input v-model="inputData" type="text"> <br>
        <button v-on:click="nextCountry">Следующая страна</button>
    </div>
</template>

<script>

    import Menu from "./Menu";

    export default {
        inputData: [],
        components: {Menu},
        methods:{
            nextCountry: function () {
                this.$router.push({path:'Italy', query:{inputData:this.inputData}})
            }
    },
        created:
            function () {
                this.inputData = this.$route.query.inputData;
            }
    }
</script>

<style scoped>

</style>