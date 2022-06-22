import { defineComponent, provide, reactive } from "vue";
import Editor from "./components/Editor";
import data from "./data/data.json";
import componentManager from "./components/componentManager";
const App = defineComponent({
  name: "App",
  components: { Editor },
  setup() {
    const state = reactive(data);
    const { componentArray, componentMap } = componentManager;
    provide("componentsConfig", {
      componentArray,
      componentMap
    });
    return () => <Editor data={state} />;
  }
});

export default App;
