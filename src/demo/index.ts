import path from 'path';

import { program } from 'commander';
import { name, version } from '../utils/constants';

import { orderList } from '../utils/common';

Object.keys(orderList).forEach((order: any) => {
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
        console.log(path.join(__dirname, order), 'bbb');
        require(path.join(__dirname,order))(...process.argv.slice(3));
        // require(path.join(__dirname, order))(...process.argv.slice(3));
      }
    })
});

program.command('com').alias('comm').description('com的description').action(() => { 
  console.log('com 的子命令');
})

program.version(version);

program.parse(process.argv); // process.args就是用户在命令行中传入的参数