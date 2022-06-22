import { createApp } from "vue";
import App from "./App";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/styles/default.scss";

const app = createApp(App);
app.use(ElementPlus);
app.mount("#app");
