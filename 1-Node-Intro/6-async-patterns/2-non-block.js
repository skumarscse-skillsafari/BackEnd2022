const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./file1.txt", "utf-8");
    const second = await readFile("./file2.txt", "utf-8");
    await writeFile(
      "./output.txt",
      `The content of file1.txt and file2.txt is: ${first}, ${second}\n`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
