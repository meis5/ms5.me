import React, { PureComponent } from 'react'
import * as colors from 'common/styles/variables/colors'
import * as plates from 'common/styles/variables/colorPlates'

import { o2a } from 'common/styles/utils'

export default class C extends PureComponent {
  render() {
    return (
      <div className="ctn">
        <h1>Colors 色彩</h1>
        <div className="r-f r-1 r-sm-2 r-md-3 r-lg-4 r-xl-5 r-g-3 r-g-v-3 doc-colors-ctn">
          {
            ['red', 'pink', 'purple', 'deepPurple',
              'indigo', 'blue', 'lightBlue', 'cyan',
              'teal', 'green', 'lightGreen', 'lime',
              'yellow', 'amber', 'orange', 'deepOrange',
              'brown', 'grey', 'blueGrey',
            ].map(c => (
              <div>
                <div>
                  <div style={{ backgroundColor: colors[`${c}500`] }}>{c}</div>
                  {
                    o2a(colors).filter(({ key }) => key.indexOf(c) !== -1 && !isNaN(key.replace(c, ''))).map(({ key, value }) => (
                      <div style={{ backgroundColor: value }}>
                        {key}
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
          <div>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              {
                ['transparent',
                  'black', 'fullBlack', 'darkBlack', 'lightBlack', 'minBlack', 'faintBlack',
                  'white', 'fullWhite', 'darkWhite', 'lightWhite',
                ].map(c => (
                  <div style={{ backgroundColor: colors[c] }}>
                    {c}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
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
