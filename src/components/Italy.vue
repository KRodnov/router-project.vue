<template>
    <div>
        <Menu></Menu>
        <h1>Италия</h1>
        <img src="https://gulustan.info/wp-content/uploads/2012/12/italy06.jpg" alt="Италия">
        <p>Италия – средиземноморское государство в Южной Европе с длинной береговой линией, которое оказало огромное
            влияние на западную культуру и кухню. На территории столицы страны, Рима, находится государство Ватикан, а
            также всемирно известные музеи и древние руины. Другие крупные города Италии – Флоренция, где можно увидеть
            шедевры эпохи Возрождения, например статую Давида работы Микеланджело и собор Дуомо, созданный по проекту
            архитектора Брунеллески, а также город каналов Венеция и столица моды Милан.</p>
        <input v-model="inputData" type="text"> <br>
        <button v-on:click="nextCountry">Следующая страна</button>
    </div>

</template>

<script>
    import Menu from "./Menu";

    export default {
        inputData: [],
        name: "Italy",
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