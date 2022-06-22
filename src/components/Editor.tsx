import { defineComponent, computed, inject } from "vue";
import "./editor.scss";
import EditorItem from "./EditorItem.tsx";
export default defineComponent({
  props: {
    data: { type: Object }
  },
  setup(props) {
    const canvasStyle = computed(() => {
      const { width, height, top, left } = props.data?.container;
      return {
        width: `${width}px`,
        height: `${height}px`,
        background: "#fff",
        left: `${left}px`,
        top: `${top}px`,
        position: "relative"
      };
    });
    const blocks = computed<Array<any>>(() => {
      return props.data?.blocks;
    });
    const componentsConfig: any = inject("componentsConfig");
    return () => (
      <div class="editor">
        <div class="left-material">
          {componentsConfig.componentArray?.map((comp: any, index: number) => {
            return (
              <div class="component-item">
                <span>{comp.label}</span>
                <div class="preview">{comp.preview()}</div>
              </div>
            );
          })}
        </div>
        <div class="center-area">
          <div class="toolbar"></div>
          <div class="content-area">
            <div class="canvas" style={canvasStyle.value}>
              {blocks.value?.map((comp: any, index: number) => {
                console.log(111, componentsConfig);
                let config = componentsConfig.componentMap[comp.type];

                return <EditorItem config={config} />;
              })}
            </div>
          </div>
        </div>

        <div class="attribute-area"></div>
      </div>
    );
  }
});
