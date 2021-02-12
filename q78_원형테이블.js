// const input = parseInt(6);
// const totalNumber = [];
// for(let i=1; i<=input; i++){
//     totalNumber.push(i);
// }
// let index = 0;
// for(let i = 0; i<totalNumber.length;i+=1){
//     index+=1;
//     if(index%3===0){
//         totalNumber.splice(i,1)
//     }
//     console.log(i)
//     console.log(index)
//     console.log(totalNumber)
//     if(totalNumber.length===2)break;
//         if(i === totalNumber.length-1) i=0;

// }
// console.log(totalNumber)

const user_input = '6 3'.split(' ');
const n = parseInt(user_input[0]);
const k = parseInt(user_input[1]);

function sol(n,k){
    let index = 0;
    const q = [];
    for(let i = 0; i<n; i++){
        q.push(i+1);
    }
    while(q.length>2){
        if(index > q.length-1){
            index -= q.length;
        }
        q.splice(index,1);
        console.log(index)
        console.log(q)
        index += k;
        index -= 1;
    }
    return q;
}

console.log(sol(n,k))