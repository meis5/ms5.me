package routers

import (
    "github.com/labstack/echo"
)

func MakeRouters(e *echo.Echo) {
    e.GET("/", homeRouter)
    e.GET("/login", loginRouter)
    e.GET("/register", registerRouter)
}
