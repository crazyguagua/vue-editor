import { ElInput } from "element-plus";
const componentManager = () => {
  let componentMap: any = {};
  let componentArray: Array<any> = [];
  return {
    register: (type: string, config: any) => {
      componentMap[type] = config;
      componentArray.push({ ...config, type });
    },
    componentMap: componentMap,
    componentArray
  };
};

const manager = componentManager();
manager.register("input", {
  label: "输入框",
  render: () => (
    <div>
      <ElInput />
    </div>
  ),
  preview: () => (
    <div>
      {" "}
      <ElInput />
    </div>
  )
});

manager.register("label", {
  label: "文本",
  render: () => (
    <div>
      <span>一段文本</span>
    </div>
  ),
  preview: () => (
    <div>
      <span>一段文本</span>
    </div>
  )
});

console.log(manager)

export default manager;
