const fs = require("fs");
const path = require("path");

// 1. Create directory/folder named: “Students”
const studentsDirectory = path.join(__dirname, "Students");
// fs.mkdirSync(studentsDirectory);

// 2. In the Students directory, create a file named user.js
const userFilePath = path.join(studentsDirectory, "user.js");
fs.writeFileSync(userFilePath, "");

// 3. Update the Students directory to “Names”
const namesDirectory = path.join(__dirname, "Names");
fs.renameSync(studentsDirectory, namesDirectory);

// Step 4: Add your name as content to the file user.js
const myName = "Mujeeb Adetokunbo";
fs.writeFileSync(`${namesDirectory}/user.js`, myName);

// 5. Update the file and add your age, sex, nationality, phone number, and other information about yourself
const myInfo = {
  age: 30,
  sex: "Male",
  nationality: "Nigerian",
  phoneNumber: "+3519205399611",
  occupation: "backend developer",
  city: "Lisbon",
};
fs.appendFileSync(userFilePath, "\n" + JSON.stringify(userInfo, null, 2));

// 6. Update the file user.js to {your_name}.js eg daniel_adesoji.js
const newFilePath = path.join(namesDirectory, "mujeeb_adetokunbo.js");
fs.renameSync(userFilePath, newFilePath);

// 7. Read the contents from {your_name}.js using fs.readFile
fs.readFileSync(newFilePath, "utf8");

// 8. Delete the file {your_name}.js
fs.unlinkSync(newFilePath);

// 9. Delete the directory “Names”
fs.rmdirSync(namesDirectory);
