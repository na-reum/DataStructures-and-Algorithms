function isPrime(n) {
	// 1이하일 경우엔 소수가 아닙니다.
	if (n <= 1) return false;

	// 2와 3일 경우엔 소수 입니다.
	if (n === 2 || n === 3) return true;

	// 2로 나눴을 때 나머지가 0일 경우엔 소수가 아닙니다.
	// 이 말인 즉슨 짝수는 다 소수가 아닙니다.
	if (n % 2 === 0) return false;

	// 최대 n - 1까지 돌려줍니다.
	let divisor = 3;
	while (n > divisor) {
		// 무엇이라도 0으로 떨어진다면 소수가 아닙니다.
		if (n % divisor === 0) return false;

		// 짝수일 경우를 제외한 홀수일 경우를 판단
		divisor += 2;
	}

	// 모든 조건을 통과했을 경우 소수로 인정받습니다.
	return true;
}


function solution(arr){
    let answer=[];
    for(let x of arr){
        const reverse = parseInt(String(x).split("").reverse().join(""));
        const primeCheck=isPrime(reverse);
        if(primeCheck){
            answer.push(reverse);
        }
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));