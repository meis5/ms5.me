package controllers

import (
	"net/http"

	"github.com/labstack/echo"
)

type test struct {
	Name string
}

func homeController(c echo.Context) error {
	return c.JSON(http.StatusOK, test{"你妈妈"})
}
