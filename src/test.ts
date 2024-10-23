let BOX_DATA = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
];

//BOX_DATA[0].map((v) => console.log(v));
const newData = [...BOX_DATA];

// 二次元配列をコピーするときは、column単位で[...spread]しないとだめ。
const newNewData = [];
for (let v of BOX_DATA) {
  newNewData.push([...v]);
}
BOX_DATA[0][1] = 10;

console.log(newNewData);
console.log(newData);
