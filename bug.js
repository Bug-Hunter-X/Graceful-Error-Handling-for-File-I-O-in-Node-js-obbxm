```javascript
const fs = require('fs');

async function readFile(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      // File not found, handle gracefully
      console.error(`File not found: ${filePath}`);
      return null; // Or throw the error, depending on your needs
    } else if (err instanceof SyntaxError) {
      console.error(`Invalid JSON in file: ${filePath}`);
      return null; // Or throw the error
    } else {
      // Other errors, re-throw to be handled elsewhere
      throw err;
    }
  }
}

async function main(){
  const filePath = './data.json';
  const jsonData = await readFile(filePath);
  console.log(jsonData);
}

main()
```