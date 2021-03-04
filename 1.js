
const input = 'OneTwoThreeFourFiveSixSevenEightNineTen'

const totalString = input.split("");

for(let i = 0; i < totalString.length; i+=10){
   const sliceString=totalString.slice(i,i+10);
   const StringJoin = sliceString.join('');
    console.log(StringJoin)
}

