const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
	const array = line.split(" ").map(e => parseInt(e));
	console.log(Math.max(...array))
	rl.close();
}).on("close", function() {
  process.exit();
});