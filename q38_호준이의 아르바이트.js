const input = "97 86 75 66 55 97 86 86 85 97 97 95";

const split = input.split(' ');

const splitsort = split.sort((a,b)=>{
    return a - b;
})

const top3 = [];
let count = 0;

while(top3.length < 4){
    const value = splitsort.pop();
    if(!top3.includes(value)){
        top3.push(value);
    }
    count += 1;
}
console.log(top3)
console.log(count-1)