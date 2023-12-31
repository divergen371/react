function Bird(name) {
  const className = "調理";

  this.name = name;
  this.cry = function (sound) {
    console.log(`${this.name}が「${sound}」と鳴きました`);
  };

  this.introduce = () => {
    console.log(`私は${className}の${this.name}です`);
  };

  return this;
}

Bird.explain = function () {
  console.log(`これは鳥のクラスです`);
};

function FlyableBird(name) {
  Bird.call(this, name);
  this.fly = function () {
    console.log(`${this.name}が飛びました`);
  };
  return this;
}
FlyableBird.prototype.__proto__ = Bird.prototype;
