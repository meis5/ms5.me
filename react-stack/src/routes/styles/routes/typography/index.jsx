import React, { PureComponent } from 'react'

import Code from 'doc-sites/components/Code'

export default class C extends PureComponent {
  render() {
    return (
      <div className="ctn doc-ctn">
        <h3>Headings and paragraphs</h3>
        <p>
          All heading elements—e.g.,
          <span className="doc-code-inline">&lt;h1&gt;</span>
          —and
          <span className="doc-code-inline">&lt;p&gt;</span>
          are reset to have their
          <span className="doc-code-inline">margin-top</span>
          removed. Headings have
          <span className="doc-code-inline">margin-bottom: .5rem</span>
          added and paragraphs
          <span className="doc-code-inline">margin-bottom: 1rem</span>
          for easy spacing.
        </p>
        <Code lang="html">{
          `<h1>h1. MS UI heading</h1>
<p>Curabitur blandit tempus porttitor. Aenean eu leo quam.
Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
<h2>h2. MS UI heading</h2>
<p>Curabitur blandit tempus porttitor. Aenean eu leo quam.
Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
<h3>h3. MS UI heading</h3>
<p>Curabitur blandit tempus porttitor. Aenean eu leo quam.
Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
<h4>h4. MS UI heading</h4>
<p>Curabitur blandit tempus porttitor. Aenean eu leo quam.
Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
<h5>h5. MS UI heading</h5>
<p>Curabitur blandit tempus porttitor. Aenean eu leo quam.
 Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
<h6>h6. MS UI heading</h6>
<p>Curabitur blandit tempus porttitor. Aenean eu leo quam.
 Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>`
        }</Code>
        <h3>Lists</h3>
        <p>{`
          All lists—<ul>, <ol>, and <dl>—have their margin-top removed and a margin-bottom: 1rem. Nested lists have no margin-bottom.
        `}</p>
        <Code>{`<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit</li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ol>
`}</Code>
        <p>{`
          For simpler styling, clear hierarchy, and better spacing, description lists have updated margins. <dd>s reset margin-left to 0 and add margin-bottom: .5rem. <dt>s are bolded.
        `}</p>
        <Code lang="html">{
          `<dl>
  <dt>Description lists</dt>
  <dd>A description list is perfect for defining terms.</dd>
  <dt>Euismod</dt>
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem.</dd>
  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
  <dt>Malesuada porta</dt>
  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
</dl>`}</Code>
      </div>
    )
  }
}
