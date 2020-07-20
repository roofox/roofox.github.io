const path = require('path');
const globby = require('globby');
const util = require('util');
const dateFNS = require('date-fns')
const esLocale = require('date-fns/locale/es')

const getDir = (name) => path.join('src', '11ty', name);

const getMarkdownInstance = () => {

  const unified = require('unified');
  const markdown = require('remark-parse');
  const remark2rehype = require('remark-rehype');
  const html = require('rehype-stringify');

  const visit = require('unist-util-visit');

  const modifyPreCode = (_) => tree => {
    visit(
      tree,
      node =>
        node.tagName === 'pre' && node.children.some(n => n.tagName === 'code'),
      node => {
        const lang = node.children[0].properties.className[0]
        const [, val] = (new RegExp(/^language\-([a-z]+)/)).exec(lang);

        node.properties = {
          className: ['code-segment', 'line-numbers'],
          'data-language': val
        };
      }
    );
  };

  const processor = unified()
    .use(markdown)
    .use(remark2rehype)
    .use(html)
    .use(modifyPreCode);

  return {
    set: () => { },
    render: (str, _data) =>
      new Promise((resolve, reject) => {

        processor.process(str, (err, file) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(String(file.contents));
        });

      })
  };
};

module.exports = eleventyConfig => {

  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"), {

    // Change which syntax highlighters are installed
    templateFormats: ["*"], // default

    // Or, just njk and md syntax highlighters (do not install liquid)
    // templateFormats: ["njk", "md"],

    // init callback lets you customize Prism
    init: function ({ Prism }) {
      // Prism.languages.myCustomLanguage = /* */;
      // Prism.languages.foo = Prism.languages['foo-bar'];
    },

    // Added in 3.0, set to true to always wrap lines in `<span class="highlight-line">`
    // The default (false) only wraps when line numbers are passed in.
    alwaysWrapLineHighlights: false
  });
    eleventyConfig.addFilter('dump', config => util.inspect(config));

    let blogImages = globby.sync(['./content/blog/**/*.png', './content/blog/**/*.jpg']);

    blogImages = blogImages.reduce((acc, item) => { acc[item] = item.replace(/content\/blog\//g, ''); return acc; }, {});

    eleventyConfig.addPassthroughCopy(blogImages);
    eleventyConfig.addPassthroughCopy({
        './node_modules/prismjs/prism.js': 'js/prism.js'
    });

    eleventyConfig.setLibrary("md", getMarkdownInstance());

    eleventyConfig.addFilter("formatDate", function (value) {
      return dateFNS.format(dateFNS.parseISO(value), 'MMMM d, yyyy', { locale: esLocale });
    });

    return {
        dataTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        templateFormats: ["md", "njk"],
        dir: {
            output: "dist",
            includes: getDir("includes"),
            data: getDir("data"),
        }
    };
};