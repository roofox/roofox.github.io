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
}

module.exports = addPlugins;
