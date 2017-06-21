import React, {PureComponent} from 'react'
import TabFilter from '../../components/TabFilter'

export default class C extends PureComponent {
  state = {
    filters: [{
      name: 'all',
      active: false,
    }, {
      name: 'physical',
      active: true,
    }, {
      name: 'virtual',
      active: false,
    }],
    items: [{
      name: 'bjstdmngbgr01.thoughtworks.com',
      status: 'idle',
      ip: '192.168.1.2',
      path: '/var/lib/cruise-agent',
      editing: false,
      resources: ['ubuntu', 'firefox', 'core-duo']
    }, {
      name: 'bjstdmngbgr02.thoughtworks.com',
      status: 'idle',
      ip: '192.168.1.2',
      path: '/var/lib/cruise-agent',
      editing: false,
      resources: ['ubuntu', 'firefox', 'core-duo']
    }, {
      name: 'bjstdmngbgr03.thoughtworks.com',
      status: 'idle',
      ip: '192.168.1.2',
      path: '/var/lib/cruise-agent',
      editing: false,
      resources: ['ubuntu', 'firefox', 'core-duo']
    }, {
      name: 'bjstdmngbgr04.thoughtworks.com',
      status: 'idle',
      ip: '192.168.1.2',
      path: '/var/lib/cruise-agent',
      editing: false,
      resources: ['ubuntu', 'firefox', 'core-duo']
    }],
  }

  handleAdd = key => () => {
    console.log(key)
  }

  render() {
    return (
      <div className="container">
        <TabFilter label="agents" filters={this.state.filters}/>
        <div className="agent-items">
          {
            this.state.items.map((v, k) => {
              const {name, status, ip, path, editing, resources} = v

              return (
                <div className="agent-item clearfix" key={v.name}>
                  <div className="float-left item-brand"/>
                  <div className="float-left">
                    <div className="item-info">
                      <span>{name}</span>
                      <span>{status}</span>
                      <span>{ip}</span>
                      <span>{path}</span>
                    </div>
                    <div className="clearfix">
                      <div className="float-left">
                        <span>
                          <a href="javascript:;" onClick={this.handleAdd(k)}>+ Specify Resources</a>
                          {
                            editing
                              ? (
                                <div>asdfsaf</div>
                              )
                              : undefined
                          }
                        </span>
                        {
                          resources.map(v => (
                            <span key={v}>
                              {v}s
                            <span>&times;</span>
                            </span>
                          ))
                        }
                      </div>
                      <div className="float-right">
                        Deny
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
