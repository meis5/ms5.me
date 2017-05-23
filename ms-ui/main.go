package main

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/meis5/ms5.me/ms-ui/controllers"
	"github.com/meis5/ms5.me/ms-ui/routers"
	"github.com/meis5/ms5.me/ms-ui/templates"
)

func main() {
	e := echo.New()
	e.Pre(middleware.RemoveTrailingSlash())
	e.Renderer = templates.Tpl
	routers.MakeRouters(e)
	controllers.MakeControllers(e)
	e.Logger.Fatal(e.Start(":9994"))
}
