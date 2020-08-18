import { createGlobalStyle } from "styled-components"
import styles from "../styles/"

const GlobalStyle = createGlobalStyle`

  /*
  header,
  article,
  main,
  div {
    outline: 1px dashed grey;
  }
  //*/

  /*
  base: 16px

  0.0625rem   	 1px
  0.1250rem    	 2px
  0.1875rem   	 3px
  0.2500rem   	 4px
  0.3125rem   	 5px
  0.3750rem    	 6px
  0.4375rem   	 7px
  0.5000rem    	 8px
  0.5625rem   	 9px
  0.6250rem    	10px
  0.6875rem   	11px
  0.7500rem   	12px
  0.8125rem   	13px
  0.8750rem    	14px
  0.9375rem   	15px
  1.0000rem    	16px
  */

  ${(p) => styles.map(x => x(p))}
`

export default GlobalStyle
