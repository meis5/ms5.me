package routers

import (
    "github.com/labstack/echo"
    "net/http"
)

func registerRouter(c echo.Context) error {
    return c.Render(http.StatusOK, "register", "World")
}
