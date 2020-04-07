module.exports = [
  {
    type: 'confirm',
    name: 'customTheme',
    message: 'Do you wish to overwrite css variables?',
    default: false,
  },
  {
    type: 'confirm',
    name: 'dockerIgnore',
    message: 'Do you wish to overwrite dockerignore?',
    default: false,
  },
  {
    type: 'confirm',
    name: 'envAlpha',
    message: 'Do you wish to overwrite env.alpha?',
    default: false,
  },
  {
    type: 'confirm',
    name: 'envDevelopment',
    message: 'Do you wish to overwrite env.development?',
    default: false,
  },
  {
    type: 'confirm',
    name: 'eslintIgnore',
    message: 'Do you wish to overwrite .eslintignore?',
    default: false,
  },
  {
    type: 'confirm',
    name: 'prettierrc',
    message: 'Do you wish to overwrite .prettierrc?',
    default: false,
  },
  {
    type: 'confirm',
    name: 'styleLintrc',
    message: 'Do you wish to overwrite .stylelintrc?',
    default: false,
  },
  {
    type: 'confirm',
    name: 'npmrcYes',
    message: 'Do you wish to overwrite .npmrc?',
    default: false,
  },
  {
    type:'confirm',
    name:'changeDockerfile',
    message:'Do you wish to overwrite Dockerfile',
    default: false,
  },
  {
    when: answers => answers.changeDockerfile === true,
    type:'text',
    name:'dockerCpAddress',
    message:'请输入dockerfile cp 地址'
  }
]
