const people = ['손오공','야모챠','메지터','비콜로'];
const dish = [70,10,55,40];

function solution (people,dish){

    const temp = [];
    for (let i of people){
        let obj = {};
        obj['name'] = i;
        obj['value'] = dish[people.indexOf(i)];
        temp.push(obj);
      }

      temp.sort((a,b) =>{
          return b.value - a.value;
      })

    const result = {}
    for(let i of temp){
        result[i.name] = temp.indexOf(i) + 1;
    }
    return result;
};

console.log(solution(people,dish));