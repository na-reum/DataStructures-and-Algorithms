const input = "0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0";
const flag = input.split('\n'); //지뢰 없이 깃발만 있는 리스트
const minesweeper = []; //지뢰를 찾은 리스트
let count = 0;
for (let i of flag){
    flag[count] = i.replace('1', 'f').split(' ');
    count += 1;
  }
count = 0;
let search = 0;
  
  for (let s of flag){
    for (let i of s){
      if (i === 'f'){
        search = s.indexOf(i);
        if (search > 0){
          s[search-1] = '*';
        }
        if (search < 4){
          s[search+1] = '*';
        }
        if (count > 0){
            flag[count-1][search] = '*';
        }
        if (count < 4){
            flag[count+1][search] = '*';
        }
      }
    }
    count += 1;
  }
  
console.log(flag);
console.log(minesweeper);