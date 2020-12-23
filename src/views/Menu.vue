<template>
    <div>
        <navigation></navigation>
        <home-plans></home-plans>
        <meal-recipes></meal-recipes>
    </div>
</template>

<script>
import HomePlans from '@/components/HomePlans';
import MealRecipes from '@/components/MealRecipes';
import Navigation from '../components/Navigation';

export default {
    name: 'Menu',
    components: {
        HomePlans,
        MealRecipes,
        Navigation
    }
};
</script>

<style scoped>
</style>