import { elementsColors, fontSize, fontFamilies } from './variables'

console.log(fontFamilies.common)

export default `
body {
  font-family: ${fontFamilies.common};
  font-size: ${fontSize.md}px;
  line-height: 1.618;
  color: #424b50;
}

a {
  color: ${elementsColors.link};
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

`
