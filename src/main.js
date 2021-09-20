import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/@fortawesome/fontawesome-free/js/regular";
import "../node_modules/@fortawesome/fontawesome-free/js/solid";
import "../node_modules/@fortawesome/fontawesome-free/js/brands";
import "../node_modules/@fortawesome/fontawesome-free/js/fontawesome";
import "@/scss/theme.scss";

createApp(App).use(router).mount("#app");
