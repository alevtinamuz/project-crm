module.exports = {
  project-crm: process.env.NODE_ENV === 'production'
    ? '/my-project/'
    : '/'
}
