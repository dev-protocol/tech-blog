const markdownIt = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true
});
const mila = require('markdown-it-link-attributes');

module.exports = markdownIt.use(mila, {
  attrs: {
    target: '_blank',
    rel: 'noopener'
  }
})