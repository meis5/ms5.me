package controllers

import (
	"net/http"

	"github.com/labstack/echo"
)

func registerController(c echo.Context) error {
	return c.JSON(http.StatusOK, test{"你妈妈"})
}
