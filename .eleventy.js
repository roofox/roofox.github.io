const path = require('path');
const globby = require('globby');
const util = require('util');

const getDir = (name) => path.join('src', '11ty', name);

const getMarkdownInstance = () => {
    const remark = require('remark');
    const recommended = require('remark-preset-lint-recommended');
    const html = require('remark-html');
    const images = require('remark-images');
    const externalLinks = require('remark-external-links');

    const processor = remark()
        .use(recommended)
        .use(images)
        .use(externalLinks, { target: '_blank', rel: ['noopener noreferrer'] })
        .use(html);

    return {
        set: () => { },
        render: (str, data) =>
            new Promise((resolve, reject) => {

                processor.process(str, (err, file) => {
                    if (err) {
                        reject(err);
                        return;
                    }

                    resolve(String(file));
                });
            }),
    };
};

module.exports = eleventyConfig => {

    eleventyConfig.addFilter('dump', config => util.inspect(config));

    let blogImages = globby.sync(['./content/blog/**/*.png', './content/blog/**/*.jpg']);

    blogImages = blogImages.reduce((acc, item) => { acc[item] = item.replace(/content\/blog\//g, ''); return acc; }, {});

    eleventyConfig.addPassthroughCopy(blogImages);
    eleventyConfig.addPassthroughCopy({
        './node_modules/prismjs/prism.js': 'js/prism.js'
    });

    eleventyConfig.setLibrary("md", getMarkdownInstance());

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