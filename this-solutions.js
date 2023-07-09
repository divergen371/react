class Person {
  constructor(name) {
    this.name = name;
  }
  // bind()でインスタンスのthisを束縛する
  greet1() {
    function doIt() {
      console.log(`1) Hi, I'm ${this.name}`);
    }
    const boundDoIt = doIt.bind(this);
    boundDoIt();
  }

  // call()でインスタンスのthisを渡して関数を実行する
  greet2() {
    function doIt() {
      console.log(`2) Hi, I'm ${this.name}`);
    }
    doIt.call(this);
  }

  //thisを別の変数に代入して関数内ではそちらを使う
  greet3() {
    const _this = this;
    function doIt() {
      console.log(`3) Hi, I'm ${_this.name}`);
    }
    doIt();
  }
  // アロー関数で定義してthisがundefinedの置き換えられるのを防ぐ
  greet4() {
    const doIt = () => {
      console.log(`4) Hi, I'm ${this.name}`);
    };
    doIt();
  }

  // greet4と同じ考え方だが、メソッド自体をアロー関数式で定義するやり方.
  greet5 = () => {
    const doIt = () => {
      console.log(`5) Hi, I'm ${this.name}`);
    };
    doIt();
  };
}

const creamy = new Person("Mami");
creamy.greet1();
creamy.greet2();
creamy.greet3();
creamy.greet4();
creamy.greet5();
