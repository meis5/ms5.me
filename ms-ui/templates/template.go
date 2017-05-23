package templates

import (
	"html/template"
	"io"

	"github.com/labstack/echo"
)

// Template struct
type Template struct {
	templates *template.Template
}

// Render func
func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

// Tpl var
var Tpl *Template

func init() {
	Tpl = &Template{
		templates: template.Must(template.ParseGlob("templates/*.html")),
	}
}
