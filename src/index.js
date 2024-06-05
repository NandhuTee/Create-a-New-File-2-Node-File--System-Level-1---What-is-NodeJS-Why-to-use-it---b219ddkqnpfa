
const fs = require("fs/promises");

const writeFile = async (fileName, fileContent) => {
  try {
    // Write the content to the file asynchronously
    await fs.writeFile(fileName, fileContent, 'utf-8');
  } catch (error) {
    console.error("Error writing to the file:", error);
    throw error; // Rethrow the error after logging it
  }
};


module.exports = { writeFile };
