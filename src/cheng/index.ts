import path from 'path';
import fs from 'fs';
import { configString } from '../utils/index';
import { tempPackageJSON } from '../utils/temp';


const FOLDER = process.cwd();// 当前目录

// const a: number = 1;

// console.log(a, 'a')

// fs.writeFileSync(path.join(FOLDER, 'configd.json'), tempPackageJSON); // 创建个文件


// 递归创建目录 同步方法
function mkdirsSync(dirname: any) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}
console.log(111);
console.log(222);


// mkdirsSync('hello/a/b/c');

console.log('cheng');