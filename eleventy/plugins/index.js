const path = require("path");

const markdownGatsbyLoader = (plugins) => {
  if (!Array.isArray(plugins)) {
    throw new Error("plugins is not an Array");
  }

  return (_) => async (markdownAST, _, done) => {
    const promises = plugins.map(async (plugin) => {
      let instance;
      let options = {};

      if (typeof plugin === "object" && plugin.resolve) {
        instance = require(plugin.resolve);
        options = plugin.options ? plugin.options : {};
      }

      if (typeof plugin === "string") {
        instance = require(plugin);
      }

      return instance({ markdownAST }, options);
    });

    await Promise.all(promises);

    done();
  };
};

function addPlugins(eleventyConfig) {
  eleventyConfig.addPlugin(require("@fec/eleventy-plugin-remark"), {
    plugins: [
      markdownGatsbyLoader([
        {
          resolve: "gatsby-remark-prismjs",
          options: {
            showLineNumbers: true,
          },
        },
        {
          resolve: "gatsby-remark-smartypants",
          options: {
            dashes: "oldschool",
          },
        },
      ]),
    ],
  });

  /**
   * https://www.npmjs.com/package/eleventy-plugin-sass
   */
  eleventyConfig.addPlugin(require("eleventy-plugin-sass"), {
    watch: ["./src/styles/**/*.{scss,sass}", "!node_modules/**"], // The sass files you wish to compile (and watch when you serve)
    sourcemaps: process.env.ELEVENTY_ENV === "prod", // Add sourcemaps next to your sass files
    cleanCSS: process.env.ELEVENTY_ENV === "prod", // 	Runs the css trough cleanCSS
    cleanCSSOptions: {}, // 	Options to pass to cleanCSS
    autoprefixer: true, // Adds browser specific prefixes if needed (adheres to BrowserList)
  });

  eleventyConfig.addPlugin(require("eleventy-plugin-lazyimages"), {
    transformImgPath: (imgPath) => {
      if (imgPath.startsWith("/") && !imgPath.startsWith("//")) {
        const newPath = path.join(process.cwd(), imgPath);
        return newPath;
      }
      return imgPath;
    },
  });

  eleventyConfig.addPlugin(
    require("@hirusi/eleventy-plugin-safe-external-links"),
    {
      pattern: "https{0,1}://", // RegExp pattern for external links
      noopener: true, // Whether to include noopener
      noreferrer: true, // Whether to include noreferrer
      files: [
        // What output file extensions to work on
        ".html",
      ],
    }
  );
}

module.exports = addPlugins;