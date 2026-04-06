import  type {BunFile} from "bun";

async function fileSystemOprations() {

    // reading a file
    const file: BunFile = await Bun.file("read.txt");

    console.log(file.name); // read.txt
    console.log(file.size); // 11

    const content = await file.text();
    console.log(content);
    

    // create a file
    const newFile = new Blob(["Hello, Bun!"], { type: "text/plain" });
    await Bun.write("write.txt", newFile);
    console.log("File written successfully.");
    
}

fileSystemOprations();