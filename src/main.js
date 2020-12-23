import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import firebase from "./firebase/index.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  firebase,
  vuetify,
  render: h => h(App)
}).$mount("#app");
