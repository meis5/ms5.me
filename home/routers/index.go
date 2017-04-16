package routers

import "net/http"

func Routers(mux *http.ServeMux) {
    homeRouter(mux)
}
