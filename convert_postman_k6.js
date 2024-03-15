const fs = require('fs')
const { exec } = require('child_process');

const path = require('path');
 

const enviornment = process.argv.slice(2)
// Path to the collections folder
const COLLECTIONS_FOLDER = path.join(__dirname, 'collections');
const K6_SCRIPT_FOLDER = path.join(__dirname, 'k6_scripts');

if (fs.existsSync(K6_SCRIPT_FOLDER)) {
  fs.rmdirSync(K6_SCRIPT_FOLDER, {recursive: true})
}



// Read the contents of the collections folder
fs.readdir(COLLECTIONS_FOLDER, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }
 
  // Iterate through each file in the folder
  files.forEach(file => {
    console.log(file)
    // Check if the file is a JSON file
    if (file.endsWith('.json')) {
      // Execute postman-to-k6 for each JSON file
      exec(`postman-to-k6 ${COLLECTIONS_FOLDER}/${file} -e ./enviornments/${enviornment}.json  -o ${K6_SCRIPT_FOLDER}/k6_${file.slice(0, -5)}.js`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error converting ${file} to k6 script:`, error);
          return;
        }
        console.log(`Conversion for ${file} completed successfully`);
      });
    }
  });
});
