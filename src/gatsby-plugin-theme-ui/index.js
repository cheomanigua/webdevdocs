//import nightOwl from "@theme-ui/prism/presets/night-owl.json";
import oceanicNext from "@theme-ui/prism/presets/oceanic-next.json";
import colors from "./colors";
import headings from "./headings";
import messages from "./messages";

const transition = "0.2s ease-out";
const systemFonts =
  "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;";

export default {
  colors,
  messages,
  fonts: {
    body: systemFonts,
    heading: systemFonts,
    monospace: "Menlo, monospace"
  },
  fontSizes: [12, 14, 16, 24, 28, 36, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em"
  },
  breakpoints: [
    ["phone_small", 320],
    ["phone", 376],
    ["phablet", 540],
    ["tablet", 735],
    ["desktop", 1070],
    ["desktop_medium", 1280],
    ["desktop_large", 1440]
  ],
  transition,
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      ...headings
    },
    ...headings,
    p: {
      my: 4
    },
    a: {
      color: "text",
      backgroundColor: `linkBackground`,
      borderBottom: "1px solid rgba(0,0,0,0.2)",
      textDecoration: "none",
      transition: `color ${transition}`,
      ":hover,:focus": {
        color: "text",
        backgroundColor: `linkHoverBackground`
      }
    },
    pre: {
      ...oceanicNext,
      fontFamily: `"Operator Mono", monospace`,
      fontSize: "0.9rem",
      tabSize: 4,
      hyphens: `none`,
      overflow: `auto`,
      borderRadius: 6,
      p: 3,
      my: 4
    },
    inlineCode: {
      fontFamily: 'source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace',
      color: `inlineCode`,
      backgroundColor: `inlineCodeBackground`,
      borderRadius: 3,
      px: `0.4rem`,
      py: `0rem`
    },
    blockquote: {
      backgroundColor: '#cce9ff',
      borderLeft: '2px solid #33d6ff',
      paddingLeft: '10px',
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid"
    }
  }
};
