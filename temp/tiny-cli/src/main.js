const process = require('process');
const path = require('path');

const program = require('commander');
const inquirer = require('inquirer');


const { orderList, loadingFn }= require('./utils/common')
const { name, version } = require('./utils/constants')

const repos = require('./create');

console.log(name, version, 'sss')


Object.keys(orderList).forEach((order) => {
  program
    .command(order)
    .alias(orderList[order].alias)
    .description(orderList[order].description)
    .action(() => {
      if (order === '*') {
        console.log(orderList[order].description);
      } else {
        console.log(order, 'order');
        console.log(process.argv);
        require(path.join(__dirname, order))(...process.argv.slice(3));
      }
    })
});

// program.command('ccc').alias('cc').description('创建一个项目').action(() => {
//   console.log('一个子命令');
// });


// inquirer.prompt([{
//   type: 'list',
//   name: 'template',
//   message: '请选择你需要的项目模板',
//   choices: repos,
// }]).then((answer) => {
//   console.log(answer, 'answer');
  
// });



program.on('--help', () => { 
  console.log('\n Examples:');
  Object.keys(orderList).forEach((order) => {
    orderList[order].examples.forEach((example) => {
      console.log(` ${example}`);
    });
  });
})




program.version(version);

program.parse(process.argv);