// import * as fs from "node:fs";
import * as fs from "node:fs/promises";
import DetectFileEncodingAndLanguage from "detect-file-encoding-and-language";

const fileOperations = async ()=> {
    const filepath = "./files/file.txt";
    // const buffer = await fs.readFile(filepath);
    // const text = buffer.toString();
    // console.log(text);
    // const text = await fs.readFile(filepath, "utf-8");
    // console.log(text);
    // const {encoding} = await DetectFileEncodingAndLanguage(filepath);
    // const text = await fs.readFile(filepath, encoding);
    // console.log(text);
    // await fs.appendFile(filepath, "\nPHP the best");
    // await fs.writeFile(filepath, "Mojo forever");
    // await fs.appendFile("./files/file2.txt", "\nPHP the best");
    // await fs.writeFile("./files/file3.txt", "Mojo forever");
    // await fs.unlink("./files/file3.txt");
}

fileOperations();

// const data = await fs.readFile("./files/file.txt");
// console.log(data);

// fs.readFile("./files/file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.messsage));

// fs.readFile("./files/file.txt", (error, data)=> {
//     console.log(error);
//     console.log(data);
// })