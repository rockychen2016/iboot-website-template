const fs = require('fs');
const path = require('path');

const envFiles = ['.env.development', '.env.local', '.env.production'];

envFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  console.log('start copy file >>>', filePath)
  if (!fs.existsSync(filePath)) {
    const envFile = path.join(__dirname, '..', `${file}.example`);
    fs.copyFileSync(envFile, filePath);
    // 删除 .example 文件
    fs.unlinkSync(envFile);
    console.log('deleted example file >>>', envFile);
  }
});