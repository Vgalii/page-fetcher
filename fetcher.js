const request = require("request");
const fs = require("fs");

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, content) => {
  if(error) {
    console.log("Error");
  }
  fs.writeFile(filePath, content, (error) => {
    if (error) {
      console.log("Error")
    }

    console.log(`Downloaded and saved ${content.length} bytes to ${filePath}`);
  }) 
});