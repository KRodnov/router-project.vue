<template>
    <div>
        <Menu></Menu>
        <h1>Испания</h1>
        <img src="https://i0.wp.com/www.hisour.com/wp-content/uploads/2019/12/Sagrada-Familia-Barcelona-Spain.jpg?fit=960%2C640&ssl=1" alt="">
        <p>Испания – европейская страна, расположенная на Пиренейском полуострове. Территория Испании разделена на 17
            автономных регионов. В столице страны, Мадриде, находятся Королевский дворец и музей Прадо, где хранятся
            произведения европейских мастеров. В Сеговии можно посетить средневековый замок (Алькасар) и увидеть хорошо
            сохранившийся римский акведук. Барселона – столица автономного сообщества Каталония. Облик этого города
            определяют многочисленные причудливо-фантастические творения архитектора Антонио Гауди, среди которых храм
            Святого Семейства.</p>
        <input v-model="inputData" type="text" placeholder="Введите что-нибудь">
        <br>
        <button v-on:click="nextCountry">К 1-ой стране</button>
    </div>

</template>

<script>
    import Menu from "./Menu";

    export default {
        inputData: [],
        name: "Spain",
        components: {Menu},
        methods:{
            nextCountry: function () {
                this.$router.push({path:'USA', query:{inputData:this.inputData}})
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