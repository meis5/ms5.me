import { elementsColors, colors } from './variables'

export default `
.header {
  border-bottom: 1px solid #e5e5e5;
}

.header a {
  font-size: 14px;
  color: ${elementsColors.color};
  display: inline-block;
  vertical-align: top;
  padding: 5px 10px;
}

.header a:hover {
  color: ${elementsColors.link};
}

[class^=btn] {
  border: 1px solid #ddd;
  outline: none;
  margin-right: 15px;
  color: #fff;
  background-color: #fff;
  border-radius: 4px;
  padding: 0 10px;
  cursor: pointer;
  height: 34px;
  display: inline-flex;
  align-items: center;
}

[class^=btn] i.fa {
  margin-right: 5px;
}

.btn, .btn-default {
  color: ${elementsColors.color};
}

.btn-primary {
  background-color: ${colors.blue};
}

.btn-info {
  background-color: ${colors.aqua};
}

.btn-warning {
  background-color: ${colors.orange};
}

.btn-danger {
  background-color: ${colors.red};
}

.btn-success {
  background-color: ${colors.green};
}


`
