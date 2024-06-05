const fs = require("fs/promises");

const writeFile = async (fileName, fileContent) => {
    try {
        // Check if the file exists
        await fs.access(fileName);
        console.log(${fileName} already exists. Skipping write operation);
    } catch (error) {
        if (error.code === 'ENOENT') {
            // File does not exist, proceed to create it
            try {
                await fs.writeFile(fileName, fileContent, 'utf-8');
                console.log(File ${fileName} created and data written successfully!);
            } catch (writeError) {
                console.error("Error writing to the file:", writeError);
                throw writeError;
            }
        } else {
            // An error other than file not found occurred
            console.error("Error accessing the file:", error);
            throw error;
        }
    }
};

module.exports = writeFile;
