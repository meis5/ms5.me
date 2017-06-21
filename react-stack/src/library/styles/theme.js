import theme from '../themes/light'
import * as plates from './variables/colorPlates'
import { o2a } from './utils'

export default `
body: {
  font-size: ${theme.fontSize};
}

.tc-default {
  color: ${theme.textColor};
}

.tc-secondary {
  color: ${theme.textColorSecondary};
}

.tc-hint {
  color: ${theme.textColorHint};
}

.tc-divider {
  color: ${theme.textColorDivider};
}

.tc-default-r {
  color: ${theme.textColorReverse};
}

.tc-secondary-r {
  color: ${theme.textColorSecondaryReverse};
}

.tc-hint-r {
  color: ${theme.textColorHintReverse};
}

.tc-divider-r {
  color: ${theme.textColorDividerReverse};
}

${o2a(plates).map(({ key, value }) => `.tcb-${key} {color: ${value}}`).join('')}
`

console.log(o2a(plates).map(({ key, value }) => `.tcb-${key} {color: ${value}}`).join(''))
