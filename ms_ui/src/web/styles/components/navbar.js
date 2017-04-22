import { elementsColors } from '../variables'

export default `
.navbar {
  border-bottom: 1px solid #e5e5e5;
}

.navbar a, .navbar img {
  display: block;
}

.navbar img {
  margin-right:2px;
}

.navbar a:hover {
  text-decoration: none;
}

.brand.fl {
  display: flex;
}

.brand {
  font-size: 12px !important;
  line-height: 1;
}

.brand img, .brand canvas {
  max-height: 30px;
}

.navbar a {
  font-size: 14px;
  color: #666;
  padding: 5px 10px;
}

a.brand {
  color: #888;
}

.navbar a:hover {
  color: ${elementsColors.link};
}
`
