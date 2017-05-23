package controllers

import (
    "github.com/labstack/echo"
    "net/http"
)

func registerController(c echo.Context) error {
    return c.JSON(http.StatusOK, test{"你妈妈"})
}
