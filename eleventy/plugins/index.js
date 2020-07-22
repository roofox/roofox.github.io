function addPlugins(eleventyConfig) {

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

  /**
   * https://www.npmjs.com/package/eleventy-plugin-sass
   */
  eleventyConfig.addPlugin(require("eleventy-plugin-sass"), {
    watch: ['./src/styles/**/*.{scss,sass}', '!node_modules/**'], // The sass files you wish to compile (and watch when you serve)
    sourcemaps: process.env.ELEVENTY_ENV === 'prod', // Add sourcemaps next to your sass files
    cleanCSS: process.env.ELEVENTY_ENV === 'prod', // 	Runs the css trough cleanCSS
    cleanCSSOptions: {}, // 	Options to pass to cleanCSS
    autoprefixer: true // Adds browser specific prefixes if needed (adheres to BrowserList)
  });
}

module.exports = addPlugins;
