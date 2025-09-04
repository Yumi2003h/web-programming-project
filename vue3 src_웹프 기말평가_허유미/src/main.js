// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";

// 전역 CSS import: 실제 존재하는 App.css를 불러옵니다.
import "./App.css";

createApp(App).use(router).mount("#app");
