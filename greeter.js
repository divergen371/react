// 関数をを戻り地として返す関数
const greeter = (target) => {
  const sayHello = () => {
    console.log(`Hi, ${target}`);
  };
  return sayHello;
};

const greet = greeter("Step Jun");
greet();
