const {
  name,
  version
} = require('../../package.json');

// const process = require('process');

const downloadDirectory = `/Users/yychyuan/myTemplate/`;

console.log(downloadDirectory, 'downloadDirectory')

// console.log(process.platform, 'platform') // darwin

module.exports = {
  name,
  version,
  downloadDirectory
}


// let download = require('download-git-repo');
// const { promisify } = require('util');

// download = promisify(download);

// download('yychengers/leetcode', '/Users/yychyuan/leetcode', function (err) {
//   console.log(err, 'err');
// });

// // download('direct:https://github.com/yychengers/leetcode.git', '/Users/yychyuan/leetcode', function (err) {
// //   console.log(err, 'err');
// // })