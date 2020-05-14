<template>

    <div>
<h1>Страны для путешествий</h1>

        <router-link class="flags" to="/USA"><img src="https://33tura.ru/FLAG/america/usa.gif" alt="США"></router-link>
        <router-link class="flags" to="/France"><img src="https://33tura.ru/FLAG/europa/france.gif" alt="Франция" style="height: 71px; width:135px"></router-link>
        <router-link class="flags" to="/Italy"><img src="https://33tura.ru/FLAG/europa/italy.gif" alt="Италия" style="height: 71px; width:135px"></router-link>
        <router-link class="flags" to="/Germany"><img src="https://33tura.ru/FLAG/europa/germany.gif" alt="Германия" style="height: 71px; width:135px" ></router-link>
        <router-link class="flags" to="/Spain"><img src="https://33tura.ru/FLAG/europa/ispaniya.gif" alt="Испания" style="height: 71px; width:135px" ></router-link>
<p>Чтобы узнать информацию о стране, выберите соответствующий флаг</p>

    </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>

.flags {
    margin: 40px;
}

</style>