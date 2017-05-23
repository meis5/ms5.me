package templates

import (
    "io"
    "github.com/labstack/echo"
    "html/template"
)

type Template struct {
    templates *template.Template
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
    return t.templates.ExecuteTemplate(w, name, data)
}

var Tpl *Template

func init() {
    Tpl = &Template{
        templates: template.Must(template.ParseGlob("templates/*.html")),
    }

}
