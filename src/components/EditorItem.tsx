import { defineComponent } from "vue";

export default defineComponent({
  setup(props) {
    const { config } = props;
    return (
      <div class="component-item">
        <span class="title">{config?.label}</span>
        <div class="preview">{config?.preview()}</div>
      </div>
    );
  }
});
