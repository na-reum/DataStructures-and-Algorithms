const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function filter(NPQ,input){
	const npq = NPQ.split(" ").map(e => parseInt(e));
	const people = input.split(" ").map(e => parseInt(e));
	const filterPeople = people.filter(e => e <= npq[1]);
	return print(npq,filterPeople);
}
function print(npq,array){
	let total = 0;
	array.map(e => total += e);
	return `${array.length} ${total}\n${total <= npq[2] ? "YES" : "NO"}`
}
let NPQ = "";
let input = "";
rl.on("line", function(line) {
	if(NPQ.length !== 0) input += line;
	if(NPQ.length === 0) NPQ += line;
}).on("close", function() {
	console.log(filter(NPQ,input))
  process.exit();
});