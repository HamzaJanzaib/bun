import  type {BunFile} from "bun";

async function fileSystemOprations() {

    // reading a file
    const file: BunFile = await Bun.file("read.txt");

    console.log(file.name); // read.txt
    console.log(file.size); // 11

    const content = await file.text();
    console.log(content);
    
    
}

fileSystemOprations();