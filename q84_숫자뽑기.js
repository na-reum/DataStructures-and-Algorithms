function solution(num) {
    const combi = [];
    const f = (pre, num) => {
        for(let i=0; i< num.length;i++){
            combi.push(pre+num[i]);
            f(pre+num[i],num.slice(i+1))
        }
    }
    f('',num)
    const countArray = combi.filter(x => x.length===len)
    const preArray = countArray.map(x=> parseInt(x));
    const max = Math.max.apply(null,preArray);

    return max;
  }
  
  const num = '1723'.split('');
  const len = parseInt(2,10);
  console.log(solution(num));