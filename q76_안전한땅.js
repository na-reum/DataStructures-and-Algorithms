let 사각형 = 5;
let 탐색가능지역 = 3;
let 지뢰밭 = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0]
];
let value = 0;
const valueArray = [];
for(let iadd=0; iadd <= 사각형-탐색가능지역; iadd++){
    for(let jadd=0; jadd <= 사각형-탐색가능지역; jadd++){
        for(let i=iadd; i < 탐색가능지역+iadd; i++){
            for(let j=jadd; j < 탐색가능지역+jadd; j++){
                value += 지뢰밭[i][j];
            }
        }
        valueArray.push(value);
        console.log("====")
        value=0;
    }
    console.log(valueArray)
}
console.log(Math.max.apply(null,valueArray));

let maxValue = 0;
for(let i of valueArray){
    if(i>maxValue){
        maxValue = i;
    }
}

console.log(maxValue)