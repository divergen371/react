//　手続き型
{
  const octuples = [];
  for (let n = 1; n <= 100; n++) {
    if (n % 8 === 0) {
      octuples.push(n);
    }
  }
  console.log(octuples);
}

// 関数型
{
  const range = (start, end) =>
    [...Array(end - start)].map((_, n) => n + start);

  const octuples = range(1, 101).filter((n) => n % 8 === 0);
  console.log(octuples);
}
