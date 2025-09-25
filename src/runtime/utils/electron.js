// const { app } = require('electron');
const fs = require('fs');
const resolve = require('path').resolve;
const resourcesPath = process.resourcesPath;
let SODAI_PATH = process.env.SODAI_PATH;

function inDockerEnvironment() {
  try {
    fs.accessSync('/.dockerenv');
    return true;
  } catch (e) {
    return false;
  }
}
if (inDockerEnvironment()) {
  SODAI_PATH = '/'
}

const getFilepath = (dir = 'database', filename) => {

  let filepath = resolve(__dirname, '../../../', dir, filename);
  if (resourcesPath && resourcesPath.indexOf('node_modules') === -1) {
    filepath = resolve(resourcesPath, dir, filename);
  }

  if (SODAI_PATH) {
    filepath = resolve(SODAI_PATH, dir, filename);
  }
  console.log('filepath', filepath);
  return filepath;
}


//处理文件夹路径
const getDirpath = (dir) => {
  let filepath = resolve(__dirname, '../../../', dir);
  if (resourcesPath && resourcesPath.indexOf('node_modules') === -1) {
    filepath = resolve(resourcesPath, dir);
  }

  if (SODAI_PATH) {
    filepath = resolve(SODAI_PATH, dir);
  }
  return filepath;
}

module.exports = exports = {
  getFilepath,
  getDirpath
}