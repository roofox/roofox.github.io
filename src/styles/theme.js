import theming from "styled-theming"

const theme = {
  mediaWidth: "62rem",
  colors: {
    background: theming("mode", {
      light: "242423",
      dark: "#181a1b",
    }),
    body: theming("mode", {
      light: "#000",
      dark: "#e8e6e3",
    }),
    primary: "#4dc1ff",
    secondary: "#ef476f",
    selection: {
      background: theming("mode", {
        light: "#000",
        dark: "#ffd166",
      }),
      text: theming("mode", {
        light: "#fff",
        dark: "#e8e6e3",
      }),
    },
  },
  fonts: {
    families: {
      body: "Merriweather",
      logo: "Yellowtail",
      quote: "Merriweather",
    },
    sizes: {
      base: "16px",
      medium: "14px",
      small: "12px",
    },
  },
}

theme.bodyBackgroundColor = "#181a1b"
theme.bodyColor = "#e8e6e3"
// theme.primaryColor1 = "#3f51b5"
// theme.primaryColor1 = "#1E88E5"
theme.primaryColor1 = "#4dc1ff"
// theme.primaryColor2 = "#1a237e"
// theme.primaryColor2 = "#1565C0"
theme.primaryColor2 = "#ef476f"
theme.greyColor1 = "#f5f5f5"
theme.greyColor2 = "#eeeeee"
theme.greyColor3 = "#9e9e9e"
theme.headerFontFamily = "Kanit"
theme.bodyFontFamily = "Merriweather"
theme.logoFontFamily = "Yellowtail"
theme.quoteFontFamily = "Merriweather"
theme.codeFontFamily = `"Space Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace`
theme.navbarWidth = "16rem"
theme.sidePadding = "2rem"
theme.contentMaxWidth = `calc(75rem - ${theme.navbarWidth})`
theme.navbarBackgroundColor = theme.primaryColor1
theme.smallViewport = "34rem"
theme.tabletViewport = "48rem"
theme.mediumViewport = "62rem"
theme.largeViewport = "75rem"

export default theme
