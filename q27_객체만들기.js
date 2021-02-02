const input1 = 'Yujin Hyewon';
const input2 = '70 100';

const inputName = input1.split(' ');
const inputScore = input2.split(' ');

const object = {}

for(let i = 0; i < inputName.length;i++){
    object[inputName[i]] = parseInt(inputScore[i])
}

console.log(object)