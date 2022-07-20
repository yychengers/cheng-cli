import path from 'path';
import { writeFileSync } from 'fs';
import { configString } from './utils/index';
import { tempPackageJSON } from './utils/temp';


const FOLDER = process.cwd();// 当前目录

// const a: number = 1;

// console.log(a, 'a')

writeFileSync(path.join(FOLDER, 'config.json'), tempPackageJSON); // 创建个文件