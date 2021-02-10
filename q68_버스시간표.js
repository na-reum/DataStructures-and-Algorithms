
const solution = (arrayTime, nowTime) => {
    const nowTimeHour = parseInt(nowTime.split(':')[0]);
    const nowTimeMin = parseInt(nowTime.split(':')[1]);
    const result = arrayTime.map((time)=>{
        const timeHour = parseInt(time.split(':')[0]);
        const timeMin = parseInt(time.split(':')[1]);
        let restTimeHour = timeHour - nowTimeHour;
        let restTimeMin = timeMin - nowTimeMin;
        if(restTimeHour > 0 && restTimeMin < 0){
            restTimeHour--;

            restTimeMin+=60;
            return `${restTimeHour}시간 ${restTimeMin}분`
        }else if(restTimeHour = 0 && restTimeMin > 0){
            return `${restTimeHour}시간 ${restTimeMin}분`
        }else{
            return '지나갔습니다.'
        }
    })
    return result
}
const array = ["12:30", "13:20", "14:13"]
const time = "12:40"

console.log(solution(array,time))