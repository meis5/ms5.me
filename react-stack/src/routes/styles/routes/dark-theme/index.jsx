import React, { PureComponent } from 'react'
import * as plates from 'common/styles/variables/colorPlates'

import { o2a } from 'common/styles/utils'

export default class C extends PureComponent {
  render() {
    return (
      <div className="ctn">
        <h1>Color Plates</h1>
        <div className="r-f r-1 r-sm-2 r-md-3 r-lg-4 r-xl-5 r-g-3 r-g-v-3 doc-colors-ctn">
          <div>
            <div>
              {
                o2a(plates).map(({ key, value }) => (
                  <div style={{ backgroundColor: value }}>
                    {key}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
