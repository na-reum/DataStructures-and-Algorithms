const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function filter(NMS,input){
	const nms = NMS.split(" ").map(e => parseInt(e));
	const people = input.split(" ").map(e => parseInt(e));
	const answer = people.filter(e => e===nms[1] || e===nms[2]).length;
	return answer
}
let NMS = "";
let input = "";
rl.on("line", function(line) {
	if(NMS.length !== 0) input += line;
	if(NMS.length === 0) NMS += line;
}).on("close", function() {
	console.log(filter(NMS,input))
  process.exit();
});