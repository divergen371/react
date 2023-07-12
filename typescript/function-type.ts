{
  function add(n: number, m: number): number {
    return n + m;
  }
  console.log(add(2, 4));
}

{
  const add = function add(n: number, m: number): number {
    return n + m;
  };
  console.log(add(4, 6));
}

{
  const add = (n: number, m: number): number => n + m;
  const hello = (): void => {
    console.log("Hello");
  };
  console.log(add(8, 9));
  hello();
}
