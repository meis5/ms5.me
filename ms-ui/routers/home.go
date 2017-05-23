package routers

import (
    "net/http"

    "github.com/labstack/echo"
    "github.com/meis5/ms5.me/ms-ui/conf"
)

func homeRouter(c echo.Context) error {
    return c.Render(http.StatusOK, "home", struct {
        Title string
        Meta  map[string]string
        Web   map[string]string
    }{
        Title: "ms-ui 首页",
        Meta:  conf.Meta,
        Web:   conf.Web,
    })
}
