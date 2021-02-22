function solution(s){  
    let answer=0;
    let stack=[];
    for(let x of s){

        if(!isNaN(x)){
            stack.push(parseInt(x))
        }else{
            const rt = stack.pop();
            const lt = stack.pop();
            if(x==='+'){
                stack.push(lt+rt);
            }
            if(x==='-'){
                stack.push(lt-rt);
            }
            if(x==='*'){
                stack.push(lt*rt);
              }
            if(x==='/'){
                stack.push(lt/rt);
            }
        }
    }
    answer = stack[0];
    return answer;
}

let str="352+*9-";
console.log(solution(str));
