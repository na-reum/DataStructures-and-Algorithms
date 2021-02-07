

const blockCheck=(string,rule)=>{
    let ruleIndex = rule.indexOf(rule[0]);
    for(let word of string){
        if(rule.includes(word)){
            if(ruleIndex > rule.indexOf(word)){
                return '불가능'
            }else{
                ruleIndex =  rule.indexOf(word)
            }
        }
    }
    return '가능'
}


const solution= (array,rule) => {
    let answer = [];

    for(let string of array){
        answer.push(blockCheck(string,rule));
    }
    
    return answer;
}

const array=["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const rule = 'ABD';
console.log(solution(array,rule))