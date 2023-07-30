const path = require("path");
const os = require("os");

//1. Print out the current working directory

console.log("1. The current wordking directory is", process.cwd());

// 2. Print out the separator of a given file path
console.log("2. The separator of this path is", `'${path.sep}'`);

// 3. Print out the extension name of a file path
const filePath = "desktop/documents/example.py";
console.log(`3. The extension of ${filePath} is ${path.extname(filePath)}`);

// 4. Print out the process id of the current running process

console.log(`4. Process ID is ${process.pid}`);
// 5. Print out the user information of the os
const userInfo = os.userInfo();
console.log(`5. User Info: 
Username: ${userInfo.username}
UserID: ${userInfo.uid}
Home Directory: ${userInfo.homedir}
`);

// 6. Print out the platform of an operating system
console.log(`6. Current operating system platform is ${os.platform}`);
