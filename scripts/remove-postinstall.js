const fs = require('fs');
const path = require('path');

// 删除 create-env-files.js 文件
const createEnvFilesPath = path.join(__dirname, 'create-env-files.js');
if (fs.existsSync(createEnvFilesPath)) {
  fs.unlinkSync(createEnvFilesPath);
  console.log('Removed scripts/create-env-files.js');
}

// 读取 package.json 文件
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// 删除 postinstall 脚本
if (packageJson.scripts && packageJson.scripts.postinstall) {
  delete packageJson.scripts.postinstall;
  console.log('Removed postinstall script from package.json');
}

// 写回修改后的 package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
console.log('Cleanup completed successfully');

// 删除自身文件
const currentScriptPath = __filename;
if (fs.existsSync(currentScriptPath)) {
  fs.unlinkSync(currentScriptPath);
  console.log('Removed scripts/remove-postinstall.js');
}