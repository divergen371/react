// インターフェースで定義
{
  interface NumOp {
    (n: number, m: number): number;
  }

  const add: NumOp = function (n, m) {
    return n + m;
  };
  const sub: NumOp = (n, m) => n - m;

  console.log(add(1, 2), sub(5, 4));
}

// インラインで定義
{
  const add: { (n: number, m: number): number } = function (n, m) {
    return n + m;
  };
  const sub: { (n: number, m: number): number } = (n, m) => n - m;

  console.log(add(6, 6), sub(7, -9));
}

{
  const add: (n: number, m: number) => number = function (n, m) {
    return n + m;
  };
  const sub: (n: number, m: number) => number = (n, m) => n - m;

  console.log(add(6, 8), sub(7, 1));
}
