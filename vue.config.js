const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false
})
module.exports = {
  project-crm: process.env.NODE_ENV === 'production'
    ? '/my-project/'
    : '/'
}
