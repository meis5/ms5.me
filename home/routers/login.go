package routers

import (
    "github.com/labstack/echo"
    "net/http"
)

func loginRouter(c echo.Context) error {
    return c.Render(http.StatusOK, "login", "World")
}
