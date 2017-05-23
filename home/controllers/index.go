package controllers

import (
    "github.com/labstack/echo"
)

func MakeControllers(e *echo.Echo) {
    e.GET("/api", homeController)
}
