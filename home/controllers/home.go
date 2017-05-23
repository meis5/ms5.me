package controllers

import (
    "github.com/labstack/echo"
    "net/http"
)

type test struct {
    Name string
}

func homeController(c echo.Context) error {
    return c.JSON(http.StatusOK, test{"你妈妈"})
}
