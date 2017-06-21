import React, { PureComponent } from 'react'

import Highlight from 'document/components/Highlight'

export default class C extends PureComponent {
  render() {
    return (
      <div className="ctn">
        <h3>Text color</h3>
        <Highlight lang="html">{
          `<div class="tc-default">Text default</div>
<div class="tc-secondary">Text secondary</div>
<div class="tc-hint">Text hint/disable</div>
<div class="tc-divider">Divider</div>`
        }</Highlight>
        <section style={{ padding: 10 }}>
          <div className="tc-default">Text default</div>
          <div className="tc-secondary">Text secondary</div>
          <div className="tc-hint">Text hint/disable</div>
          <div className="tc-divider">Divider</div>
        </section>
        <Highlight lang="html">{
          `<div class="tc-default-r">Text default reverse</div>
<div class="tc-secondary-r">Text secondary reverse</div>
<div class="tc-hint-r">Text hint/disable reverse</div>
<div class="tc-divider-r">Divider reverse</div>`
        }</Highlight>
        <section style={{ backgroundColor: '#424242', padding: '10px' }}>
          <div className="tc-default-r">Text default reverse</div>
          <div className="tc-secondary-r">Text secondary reverse</div>
          <div className="tc-hint-r">Text hint/disable reverse</div>
          <div className="tc-divider-r">Divider reverse</div>
        </section>
        <h3>Plate color</h3>
        <Highlight lang="html">{
          `<div class="tcb-primary">Text plates primary</div>
<div class="tcb-secondary">Text plates secondary</div>
<div class="tcb-accent">Text plates accent</div>
<div class="tcb-info">Text plates info</div>
<div class="tcb-warning">Text plates warning</div>
<div class="tcb-danger">Text plates danger</div>
<div class="tcb-success">Text plates success</div>
<div class="tcb-reverse">Text plates reverse</div>`
        }</Highlight>
        <section style={{ padding: '10px' }}>
          <div className="tcb-primary">Text plates primary</div>
          <div className="tcb-secondary">Text plates secondary</div>
          <div className="tcb-accent">Text plates accent</div>
          <div className="tcb-info">Text plates info</div>
          <div className="tcb-warning">Text plates warning</div>
          <div className="tcb-danger">Text plates danger</div>
          <div className="tcb-success">Text plates success</div>
          <div className="tcb-reverse">Text plates reverse</div>
        </section>
      </div>
    )
  }
}
