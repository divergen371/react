// 関数をを戻り地として返す関数
const greeter = (target) => {
  const sayHello = () => {
    console.log(`Hi, ${target}`);
  };
  return sayHello;
};

// 関数型プログラミングでは不要な代入を避ける。上の関数はこう書き直せる
const greeter2 = (target) => {
  return () => {
    console.log(`Hi, ${target}`);
  };
};

const greet = greeter("Step Jun");
greet();

const greet2 = greeter2("hoge");
greet2();
