
const solution = (n) => {
    const hand = n;
    let people = 2;
    let mingyu = 0;
    while(true){
        const hands = (people*(people-1))/2;
        if(n>hands){
            people++;
        }else{
            people--;
            break;
        }
    }
    mingyu = n-(people*(people-1))/2;
    const answer = [mingyu,people+1]
    return answer
}

console.log(solution(59));