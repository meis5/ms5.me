package routers

import (
	"net/http"

	"github.com/labstack/echo"
)

func loginRouter(c echo.Context) error {
	return c.Render(http.StatusOK, "login", "World")
}
