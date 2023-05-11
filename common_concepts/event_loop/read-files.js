const { readFile } = require("fs");

console.log("start reading a file...");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("done reading a file");
});
console.log("end of the file");
