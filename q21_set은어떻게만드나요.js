// set? 중복되지 않은 데이터를 저장하는 데이터 구조

const list = [1,2,2,3,4,5,5,5,6];

let setVal = new Set(list);
setVal.add(10);
setVal.delete(3);
setVal.has(10);
console.log(setVal)