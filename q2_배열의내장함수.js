const arr = [200,100,300];

// arr.pop();
// arr.push(10000);
// arr.push(300);

//splice 
// 첫번째 변화를 줄 번호의 인덱스
// 두번째 제거할 인덱스
// 세번쨰 기존에 있던 원소를 삭제하고 새롭게 삽입
arr.splice(2,0,10000)

console.log(arr);