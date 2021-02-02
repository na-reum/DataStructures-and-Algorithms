const array = ['원범','원범','혜원','혜원','혜원','혜원','유진','유진'];

const result = {};
let winner = "";


for(let index in array){
    const val = array[index];
    result[val] = result[val]===undefined?1: result[val] += 1;
}

winner = Object.keys(result).reduce(function(a, b){
    return result[a] > result[b] ? a : b
  });
  
  console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);