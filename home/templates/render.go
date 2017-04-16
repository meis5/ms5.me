package templates

import (
    "text/template"
    "log"
    "net/http"
)

func Render(w http.ResponseWriter, tpl *template.Template, data interface{}) {
    err := tpl.Execute(w, data)
    if err != nil {
        log.Fatalf("Execute: %v", err)
    }
}
