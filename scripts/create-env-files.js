//const fs = require('fs');
//const path = require('path');
import { fs } from 'fs';
import { path } from 'path';
const envFiles = ['.env.development', '.env.local', '.env.production'];

envFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  console.log('start copy file >>>', filePath)
  if (!fs.existsSync(filePath)) {
    fs.copyFileSync(path.join(__dirname, '..', `${file}.example`), filePath);
  }
});