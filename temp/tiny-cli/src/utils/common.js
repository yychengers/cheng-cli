const ora = require('ora');
const axios = require('axios');

const { promisify } = require('util');
let downloadGit = require('download-git-repo');

const { downloadDirectory } = require('./constants');

downloadGit = promisify(downloadGit);

const downDir = async (repo) => { 
  console.log(repo, 'repo');
  let project = `lxy-cli/${repo}`;
  let dest = `./${repo}`;
  console.log(dest, 'dest');
  console.log(project, 'project');

  downloadGit(project, dest, function (err) {
    console.log(err, 'err');
  });

  // await downloadGit(`direct:https://github.com/${project}.git`, dest);
  
  return dest;
};


// 根据我们想要实现的功能配置执行动作，遍历产生对应的命令
const orderList = {
  create: {
    alias: 'c', // 别名
    description: '创建一个项目',
    examples: [
      'demo-cli create <project-name>'
    ]
  },
  config: {
    alias: 'conf',
    description: '配置项目参数',
    examples: [
      'demo-cli config set <k> <v>',
      'demo-cli config get <k>'
    ]
  },
  '*': {
    alias: '', //别名
    description: 'command not found', // 描述
    examples: [] //用法
  }
};

const fetchRepo = async () => { 
  // 获取当前组织中的所有仓库信息
  const { data } = await axios.get('https://api.github.com/orgs/lxy-cli/repos');
  return data;
};

// 封装loading效果
const loadingFn = async (fn, message, repo) => { 
  const spinner = ora(message);
  spinner.start();
  
  let result;
  if (repo) {
    result = await fn(repo);
  } else {
    result = await fn();
  }
  
  spinner.succeed(); // 结束loading
  return result;
};

// const getTagList = async (repo) => { 
//   const { data } = await axios.get(`https://api.github.com/repos/lxy-cli/${repo}/tags`);
//   return data;
// };

module.exports = {
  orderList,
  loadingFn,
  fetchRepo,
  // getTagList
  downDir
};