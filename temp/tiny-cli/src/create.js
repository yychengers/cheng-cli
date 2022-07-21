// module.exports = (projectName) => { 
//   console.log(`此处是文件${projectName}`);
// };

const { loadingFn, fetchRepo, getTagLists, downDir } = require('./utils/common');

const inquirer = require('inquirer');


module.exports = async (projectName) => { 
  // let repos = await fetchRepo();
  // repos = repos.map((item) => {
  //   return item.name;
  // });
  // console.log(repos, 'repos');
  // console.log(`此处是文件${projectName}`);

  // return repos;
  

  let repos = await loadingFn(fetchRepo, '正在链接您的仓库...');
  
  repos = repos.map((item) => {
    return item.name;
  });
  
  const { repo } = await inquirer.prompt([{
    type: 'list',
    name: 'repo',
    message: '选择一个你要创建的项目',
    choices: repos,
  }]);
  // let tags = await loadingFn(getTagLists, `正在链接你选择的仓库${repo}的版本号`)(repo);
  // tags = tags.map(item => item.name);
  console.log(`我现在选择了 ${repo} 仓库`);
  // console.log(`仓库${repo}的版本信息列表：${tags}`);

  const target = await loadingFn(downDir, '下载项目中', repo);
  console.log(target, 'target');
};