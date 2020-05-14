<template>
    <div>
        <Menu></Menu>
        <h1>США</h1>
        <img src="https://img01.rl0.ru/3984f9cac43c8d3c24fccd8badf34afc/c615x400i/news.rambler.ru/img/2018/02/09162024.813248.5361.jpeg"
             alt="Штаты">
        <p>Соединенные Штаты Америки – государство, состоящее из 50 штатов, занимает значительную часть Северной
            Америки. Штат Аляска расположен на северо-западе континента, а Гавайи – в Тихом океане. К крупным городам
            атлантического побережья относятся Нью-Йорк и столица Вашингтон. К западу от них находится ещё один важный
            город – Чикаго, известный своей впечатляющей архитектурой. А на западном побережье расположен Лос-Анджелес
            со знаменитыми голливудскими киностудиями.</p>
        <input v-model="inputData" type="text" placeholder="Введите что-нибудь"><br>
        <button  v-on:click="nextCountry">Следующая страна</button>
    </div>
</template>

<script>
    import Menu from "./Menu";

    export default {
        inputData: [],
        components: {Menu},
        methods:{
            nextCountry: function () {
            this.$router.push({path:'France', query:{inputData:this.inputData}})
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