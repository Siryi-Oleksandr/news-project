import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`
/* manrope-regular - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/manrope-v13-latin-regular.eot'); /* IE9 Compat Modes */
  src: url('/fonts/manrope-v13-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/manrope-v13-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/manrope-v13-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/manrope-v13-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/manrope-v13-latin-regular.svg#Manrope') format('svg'); /* Legacy iOS */
}
/* manrope-500 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  src: url('/fonts/manrope-v13-latin-500.eot'); /* IE9 Compat Modes */
  src: url('/fonts/manrope-v13-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/manrope-v13-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/manrope-v13-latin-500.woff') format('woff'), /* Modern Browsers */
       url('/fonts/manrope-v13-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/manrope-v13-latin-500.svg#Manrope') format('svg'); /* Legacy iOS */
}
/* manrope-700 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/manrope-v13-latin-700.eot'); /* IE9 Compat Modes */
  src: url('/fonts/manrope-v13-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/manrope-v13-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/manrope-v13-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/fonts/manrope-v13-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/manrope-v13-latin-700.svg#Manrope') format('svg'); /* Legacy iOS */
}



body {

  margin: 0;
  padding-top: 15px;
  font-family: 'Manrope', 'Roboto', 'Poppins', sans-serif;

  background-color: #ccc;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

textarea {
  resize: none;
}
a {
  text-decoration: none;
  color: currentColor;
}
ul {
  list-style: none;
}
button {
  padding: 0;
  margin: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
ul,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  }

`;

export default GlobalStyle;
