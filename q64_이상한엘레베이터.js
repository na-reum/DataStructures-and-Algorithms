let N = 99;
let result = 0;

while (true){
  if (N%7 === 0){
    result += parseInt(N/7, 10);
    console.log(result);
    break;
  }
  N -= 3;
  result += 1;
  if (N < 0){
    console.log(-1);
    break;
  }
}