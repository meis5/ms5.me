import React from 'react'

export default ({label, filters}) => (
  <div className="tab-filter clearfix">
    <div>{label}</div>
    {
      filters.map((v, k) => (
        <div className={`tab-filt ${v.active ? 'active': ''}`} key={k}>
          {v.name}
        </div>
      ))
    }
  </div>
)
