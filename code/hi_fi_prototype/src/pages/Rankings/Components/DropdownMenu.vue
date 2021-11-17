<template>

    <select v-model="SelectedValueDropDown">
            <option>My Friends</option>
            <option>My City</option>
            <option>My Country</option>
            <option>Worldwide</option>
    </select>

</template>

<script>
    import SelectedRanking from src\pages\Rankings\Home.vue

    SelectedValueDropDown=SelectedRanking;
    export default{

    };
</script>