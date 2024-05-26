const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
   try {
        // Write the new content to the file, overwriting any existing content
        await fs.writeFile(fileName, fileContent, 'utf-8');
    } catch (error) {
        console.error("Error updating the file:", error);
        throw error; // Rethrow the error after logging it
    }
  
};
module.exports =  writeFile ;

