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
  }else if(opts.envAlpha){
    api.render({
      './.env.alpha': './templates/src/.env.alpha'
    })
  }else if(opts.envDevelopment){
    api.render({
      './.env.development': './templates/src/_env.development'
    })
  }else if(opts.eslintIgnore){
    api.render({
      './.eslintignore': './templates/src/_eslintignore'
    })
  }else if(opts.prettierrc){
    api.render({
      './.prettierrc': './templates/src/_prettierrc'
    })
  }else if(opts.styleLintrc){
    api.render({
      './.stylelintrc': './templates/src/_stylelintrc'
    })
  }else if(opts.npmrc){
    api.render({
      './.npmrc': './templates/src/.npmrc'
    })
  }else if (opts.dockerIgnore) {
    api.render({
      './.dockerignore': './templates/src/.dockerignore'
    })
  }else if(opts.changeDockerfile){
    api.render({
      './Dockerfile': './templates/src/plugins/index.js'
    })
  }
}
