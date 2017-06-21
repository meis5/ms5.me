import { elementsColors, colors } from './variables'

export default `
.navbar {
  border-bottom: 1px solid #e5e5e5;
}

.navbar .ctn {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.navbar ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.navbar-nav {
  display: flex;
  flex-wrap: nowrap;
}

.navbar a {
  font-size: 14px;
  color: ${elementsColors.color};
  display: block;
  line-height: 4;
  padding-left: 10px;
  padding-right: 10px;
}

.navbar a:hover {
  text-decoration:  none;
}

.navbar-nav > li > ul {
  position: absolute;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-top: 0;
  display: none;
}

.navbar-nav > li:hover > ul {
  display: block;
}
`
