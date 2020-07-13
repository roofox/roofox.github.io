const path = require('path');
const globby = require('globby');
const util = require('util')
// const vfile = require('to-vfile');


const getDir = (name) => path.join('src', '11ty', name);

const getMarkdownInstance = (options) => {
    const remark = require('remark');
    const recommended = require('remark-preset-lint-recommended');
    const html = require('remark-html');
    const images = require('remark-images');
    const externalLinks = require('remark-external-links');
    // const mermaid = require('@shedali/remark-mermaid');

    const processor = remark()
        .use(recommended)
        .use(images)
        .use(externalLinks, { target: '_blank', rel: ['noopener noreferrer'] })
        .use(html);

    // processor.use(mermaid);

    // if (options && options.plugins) {
    //     for (let i = 0; i < options.plugins.length; i++) {
    //         processor.use(options.plugins[i]);
    //     }
    // }

    return {
        set: () => { },
        render: (str, data) =>
            new Promise((resolve, reject) => {
                // console.log('data', data);
                // console.log('str', JSON.stringify(str));
                // console.log('str', typeof str);

                // str.data = { destinationDir: 'sgvs' };

                processor.process(str, (err, file) => {
                    // console.log('file', Object.keys(file));
                    // file [ 'data', 'messages', 'history', 'cwd', 'contents' ]
                    // console.log('file.cwd', file.cwd, 'file.messages', file.messages);
                    if (err) {
                        reject(err);
                        return;
                    }

                    // file.data = {
                    //     destinationDir: path.parse(data.page.outputPath).dir
                    // };

                    // file.destinationDir = path.parse(data.page.outputPath).dir;

                    // console.log('file.data', file.data);

                    // vfile.writeSync({ path: example.destinationFilePath });
                    // console.log('path.parse(data.page.outputPath).dir', path.parse(data.page.outputPath).dir);
                    // vfile.writeSync({ path: `svgs/abc.svg` });
                    
                    // console.log('typeof', typeof file, 'keys', Object.keys(file));

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