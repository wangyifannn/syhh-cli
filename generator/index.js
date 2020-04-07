module.exports = (api, opts, rootOptions) => {
  const utils = require('./utils')(api)

  api.injectImports(utils.getMain(), `import './plugins/index.js'`)

  // api.render({
  //   './src/plugins/index.js': './templates/src/plugins/index.js'
  // })
  if (opts.customTheme) {
    api.render({
      './src/variables.scss': './templates/src/variables.scss'
    })
    api.extendPackage({
      devDependencies: {
        'sass-loader': '^7.0.3',
        'node-sass': '^4.9.2'
      }
    })
  }
  if(opts.envAlpha){
    api.render({
      './.env.alpha': './templates/src/.env.alpha'
    })
  }
  if(opts.envDevelopment){
    api.render({
      './.env.development': './templates/src/_env.development'
    })
  }
  if(opts.eslintIgnore){
    api.render({
      './.eslintignore': './templates/src/_eslintignore'
    })
  }
  if(opts.prettierrc){
    api.render({
      './.prettierrc': './templates/src/_prettierrc'
    })
  }
  if(opts.styleLintrc){
    api.render({
      './.stylelintrc.js': './templates/src/.stylelintrc.js'
    })
  }
  if(opts.npmrcYes){
    api.render({
      './.npmrc': './templates/src/_npmrc'
    })
  }
  if (opts.dockerIgnore) {
    api.render({
      './.dockerignore': './templates/src/.dockerignore'
    })
  }
  if(opts.changeDockerfile){
    api.render({
      './Dockerfile': './templates/src/plugins/index.js'
    })
  }
}
