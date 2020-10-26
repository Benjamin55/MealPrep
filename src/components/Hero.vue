<template style="max-height: 100vh;">
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5 style="max-height: 100vh;">
            <div class="display-4 font-weight-black white--text text-xs-center hidden-md-and-down">HEALTHY MEALS</div>
            <div class="display-4 font-weight-black white--text text-xs-center mb-3 hidden-md-and-down">FOR YOUR TABLE</div>
            <div class="display-1 font-weight-bold white--text text-xs-center">Finally be a foodie at home with fresh, chef-prepared meals delivered daily to your door.</div>
            
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Hero'
};
</script>

<style scoped>
.home-hero {
    background: url('http://source.unsplash.com/0BhSKStVtdM');
    background-size: cover;
    width: 100%;
    height: 200%;
     width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    transform: scale(1.1);
    
}
</style>