const fs = require('fs');
const path = require('path');

const envFiles = ['.env.local', '.env.production', '.env.test'];

envFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) {
    fs.copyFileSync(path.join(__dirname, '..', `${file}.example`), filePath);
  }
});