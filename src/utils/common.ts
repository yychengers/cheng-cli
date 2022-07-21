export const orderList: any = {
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
}

