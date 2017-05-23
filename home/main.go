package main

import (
    "github.com/labstack/echo"
    "github.com/meis5/ms5.me/home/templates"
    "github.com/meis5/ms5.me/home/routers"
    "github.com/meis5/ms5.me/home/controllers"
    "github.com/labstack/echo/middleware"
)

func main() {
    e := echo.New()
    e.Pre(middleware.RemoveTrailingSlash())
    e.Renderer = templates.Tpl
    routers.MakeRouters(e)
    controllers.MakeControllers(e)
    e.Logger.Fatal(e.Start(":9995"))
}
