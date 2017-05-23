package controllers

import (
	"github.com/labstack/echo"
)

// MakeControllers for main
func MakeControllers(e *echo.Echo) {
	e.GET("/api", homeController)
}
