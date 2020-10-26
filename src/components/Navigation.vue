<template>
    <span> 
        <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher
        @click="drawer = !drawer">
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-item :key="index">
                        <v-list-item-content>
                            {{item.title}}
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app color="teal darken-1" dark>
              <v-icon class="hidden-md-and-up" @click="drawer = !drawer">mdi-dots-vertical</v-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            <v-btn text class="hidden-sm-and-down">Menu</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn text class="hidden-sm-and-down">SIGN IN</v-btn>
            <v-btn color="brown lighten-3" class="hidden-sm-and-down">JOIN</v-btn>
        </v-app-bar>
    </span>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            appTitle: 'Panja',
            drawer: false,
            items: [
                { title: 'Menu' },
                { title: 'Sign In' },
                { title: 'Join' }
            ]
        };
    }
};
</script>

<style scoped>
v-toolbar-title {
    margin-right: 20px;
}
</style>