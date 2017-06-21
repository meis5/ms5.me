import { breakpoints } from './variables'
import { o2a, range } from './utils'

const col = o2a(breakpoints).map(({ key, value }) => `
@media (min-width: ${value}px) {
  ${range(0, 24).map(num => `.r-${key}-${num} > * {width: ${(1 / num) * 100}%}`).join('')}
  ${range(1, 6).map(num =>
    `.r-g-${key}-${num} {margin-left: ${(-2.5 * num)}px; margin-right: ${(-2.5 * num)}px} .r-g-${key}-${num} > * {padding-left: ${(2.5 * num)}px; padding-right: ${(2.5 * num)}px}`).join('')}
  ${range(1, 6).map(num =>
    `.r-g-v-${key}-${num} {margin-top: ${(-2.5 * num)}px; margin-bottom: ${(-2.5 * num)}px} .r-g-v-${key}-${num} > * {padding-top: ${(2.5 * num)}px; padding-bottom: ${(2.5 * num)}px}`).join('')}
  ${range(0, 24).map(num => `.c-${key}-${num} {width: ${(num / 24) * 100}%}`).join('')} 
}`).join('')

export default `
.r, .r-f, .r-g {
  display: flex;
}

.r-f {
  flex-wrap: wrap;
}

.r-g {
  margin-left: -10px;
  margin-right: -10px;
  padding-left: 10px;
  padding-right: 10px;
}


${range(0, 24).map(num => `.r-${num} > * {width: ${(1 / num) * 100}%}`).join('')}
${range(1, 6).map(num =>
  `.r-g-${num} {margin-left: ${(-2.5 * num)}px; margin-right: ${(-2.5 * num)}px} .r-g-${num} > * {padding-left: ${(2.5 * num)}px; padding-right: ${(2.5 * num)}px}`).join('')}
${range(1, 6).map(num =>
  `.r-g-v-${num} {margin-top: ${(-2.5 * num)}px; margin-bottom: ${(-2.5 * num)}px} .r-g-v-${num} > * {padding-top: ${(2.5 * num)}px; padding-bottom: ${(2.5 * num)}px}`).join('')}
${range(0, 24).map(num => `.c-${num} {width: ${(num / 24) * 100}%}`).join('')}
${col}
`
