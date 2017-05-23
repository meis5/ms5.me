package routers

import (
    "github.com/labstack/echo"
    "net/http"
)

func homeRouter(c echo.Context) error {
    return c.Render(http.StatusOK, "home", "World")
}
