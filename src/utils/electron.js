// const { app } = require('electron');
const resolve = require('path').resolve;
const resourcesPath = process.resourcesPath;
console.log('SODAI_AI_PATH', process.env.SODAI_AI_PATH);
const SODAI_AI_PATH = process.env.SODAI_AI_PATH;

const getFilepath = (dir = 'database', filename) => {

  let filepath = resolve(__dirname, '../../', dir, filename);
  if (resourcesPath && resourcesPath.indexOf('node_modules') === -1) {
    filepath = resolve(resourcesPath, dir, filename);
  }

  if (SODAI_AI_PATH) {
filepath = resolve(SODAI_AI_PATH, dir, filename);
  console.log('filepath', filepath);
  return filepath;
}


//处理文件夹路径
const getDirpath = (dir) => {
  let filepath = resolve(__dirname, '../../', dir);
  if (resourcesPath && resourcesPath.indexOf('node_modules') === -1) {
    filepath = resolve(resourcesPath, dir);
  }

  if (SODAI_AI_PATH) {
    filepath = resolve(LEMON_AI_PATH, dir);
  }
  return filepath;
}

module.exports = exports = {
  getFilepath,
  getDirpath
}