<template>
    <div id="home">
        <navigation></navigation>
        <hero></hero>
        <home-details></home-details>
        <home-plans></home-plans>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import Hero from '../components/Hero.vue';
import HomeDetails from '../components/HomeDetails.vue';
import HomePlans from '../components/HomePlans.vue';


export default {
    name: 'Home',
    components: {
      Navigation,
      Hero, 
      HomeDetails,
      HomePlans,
      
     
    }
};
</script>