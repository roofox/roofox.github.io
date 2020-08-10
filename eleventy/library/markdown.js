const getMarkdownInstance = () => {
  const unified = require("unified");
  const markdown = require("remark-parse");
  const remark2rehype = require("remark-rehype");
  const html = require("rehype-stringify");

  const visit = require("unist-util-visit");

  const modifyPreCode = (_) => (tree) => {
    visit(
      tree,
      (node) =>
        node.tagName === "pre" &&
        node.children.some((n) => n.tagName === "code"),
      (node) => {
        const lang = node.children[0].properties.className[0];
        const [, val] = new RegExp(/^language\-([a-z]+)/).exec(lang);

        node.properties = {
          className: ["code-segment", "line-numbers"],
          "data-language": val,
        };
      }
    );
  };

  const addLineBreakInBloquote = (_) => (tree) => {
    visit(
      tree,
      (node) =>
        node.tagName === "blockquote" &&
        node.children
          .filter((n) => n.tagName === "p")
          .some((n) => n.children.some((x) => x.type === "text" && x.value === "\n")),
      (node) => {
        node.children
          .filter((n) => n.tagName === "p")
          .forEach((n) => {
            n.children.forEach((x) => {
              if (x.type === "text" && x.value === "\n") {
                x.type = "element";
                x.tagName = "br";
                delete x.text;
                delete x.value;
              }
            })
          });
      }
    );
  };

  const processor = unified()
    .use(markdown)
    .use(remark2rehype)
    .use(html)
    .use(modifyPreCode)
    .use(addLineBreakInBloquote);

  return {
    set: () => {},
    render: (str, _data) =>
      new Promise((resolve, reject) => {
        processor.process(str, (err, file) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(String(file.contents));
        });
      }),
  };
};

module.exports = getMarkdownInstance;
