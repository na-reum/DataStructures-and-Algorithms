const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function max(input){
	const numberArray = input.split(" ").map(e=> parseInt(e));
	return Math.max(...numberArray);
}
let count = 0;
let input = "";
rl.on("line", function(line) {
  if(count !== 0) input += line;
	if(count === 0) count += line;
}).on("close", function() {
	console.log(max(input));
  process.exit();
});