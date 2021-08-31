const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function plus(string){
	let total = 0 ;
	string.split(" ").map(e => total += parseInt(e));
	return total;
}
let count = 0;
let input = "";
rl.on("line", function(line) {
  if(count !== 0) input += line;
	if(count === 0) count += line;
}).on("close", function() {
	console.log(plus(input))
  process.exit();
});