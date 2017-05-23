import { breakpoints, containerWidth } from './variables'

const container = Object.keys(breakpoints).map(bp => `
@media (min-width: ${breakpoints[bp]}px) {
  .ctn {
      width: ${containerWidth[bp]}px;
  }
}
`).reduce((a, b) => `${a}${b}`)

export default `
.ctn {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}
${container}
`
