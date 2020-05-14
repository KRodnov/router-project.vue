<template>
    <div>
        <Menu></Menu>
        <h1>Германия</h1>
        <img src="https://images.kashamalasha.com/201511070009-gorodok-rotenburg-ob-der-tauber-v-germanii-kashamalasha-com.jpg"
             alt="">
        <p>Германия – государство в Западной Европе с лесами, реками, горными хребтами и пляжными курортами Северного
            моря. История страны охватывает период в более чем две тысячи лет. В столице, Берлине, кипит культурная и
            ночная жизнь. Многие достопримечательности города, в частности Бранденбургские ворота, напоминают о событиях
            Второй мировой войны. Мюнхен знаменит фестивалем Октоберфест и пивными ресторанами. Самый известный из них –
            "Хофбройхаус", открывшийся ещё в XVI веке. Франкфурт – город небоскребов, именно здесь находится
            штаб-квартира Европейского центрального банка.</p>
        <input type="text">
        <br>
        <button v-on:click="nextCountry">Следующая страна</button>
    </div>

</template>

<script>
    import Menu from "./Menu";

    export default {
        inputData: [],
        name: "Germany",
        components: {Menu},
        methods:{
            nextCountry: function () {
                this.$router.push({path:'Spain', query:{inputData:this.inputData}})
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