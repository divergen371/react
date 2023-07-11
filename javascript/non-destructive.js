const list = [4, 8, 2, 6];

// sliceが元の配列をコピーすることを利用した非破壊操作
const sortedList = list.slice().sort((n, m) => (n < m ? -1 : 1));
console.log(sortedList, list);

// 空配列にスプレッド構文で展開して複製して擬似的に非破壊操作
const reverseList = [...list].reverse();
console.log(reverseList, list);
