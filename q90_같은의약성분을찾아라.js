let l = [];

// 아스키코드표 사용
for (let i = 65; i<91;i++){
    l.push(String.fromCharCode(i));
}

// console.log(l);

function randomItem(a){
    let string = [];

    while(string.length !==8){
        let b = a[Math.floor(Math.random()*a.length)];
        if(!string.includes(b)){
            string.push(b);
        }
    }

    let medicine = string.join('');
    return medicine;
}

// console.log(randomItem(l))

let total_medicine = [];

while(total_medicine.length !==100){
    let m = randomItem(l)
    if(!total_medicine.includes(m)){
        total_medicine.push(m);
    }
}

// console.log(total_medicine);

const user_input = 'ABCDEFG 4'.split(' ');
const result = [];

for(let i of total_medicine){
    let setUserData = new Set(user_input[0]);
    let setMedicine = new Set(i);

    let intersection = new Set([...setUserData].filter(x => setMedicine.has(x)));
    // console.log(intersection);
    if(intersection.size === parseInt(user_input[1])){
        result.push(i)
    }
}

console.log(result);
console.log(result.length);