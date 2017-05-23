package routers

import (
	"github.com/labstack/echo"
)

// MakeRouters for main
func MakeRouters(e *echo.Echo) {
	e.GET("/*", homeRouter)
	e.GET("/login", loginRouter)
	e.GET("/register", registerRouter)
}
