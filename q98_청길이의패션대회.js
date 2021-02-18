const input = "1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3".split(' ')
console.log(input)

const clothArray = [];
for(let i = 0; i < input.length; i++){
    if(i%2 === 1){
        const inputArray=input[i].split(',').map(x => parseInt(x))
        console.log(inputArray)
        for(let j = 0; j<inputArray.length; j++){
            if(!clothArray.includes(inputArray[j])){
                clothArray.push(inputArray[j])
            }
        }
    }
}
console.log(clothArray)


function solution(i) {
  //먼저 번호로 자릅니다.
	let idx = i.split(/[0-9]번: /g);
    console.log(idx)
	//잘라낸 문자열의 첫번째 요소 ""를 없애줍니다.
	idx.shift();

	for(let i=0; i<idx.length; i++){
    //공백을 없애주고 ',' 단위로 잘라줍니다.
    idx[i] = idx[i].replace(/ /g, '').split(',');

    for(let j=0; j<idx[i].length; j++){
      idx[i][j] = parseInt(idx[i][j], 10);
    }
  }

	let answer = [];

	//기록된 번호 순서대로 값이 중복 되지 않게 answer에 넣어줍니다.
	for(let i of idx){
    for (let j of i){
      if(!answer.includes(j)){
        answer.push(j);
      }
    }
  }

	return answer;
}

let i = "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4";
console.log(solution(i));