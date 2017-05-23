package routers

import (
	"net/http"

	"github.com/labstack/echo"
)

func registerRouter(c echo.Context) error {
	return c.Render(http.StatusOK, "register", "World")
}
