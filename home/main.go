package main

import (
    "log"
    "net/http"
    "github.com/meis5/ms5.me/home/routers"
)

func main() {
    mux := http.NewServeMux()

    routers.Routers(mux)

    log.Print("App is listening port :4000")
    log.Fatal(http.ListenAndServe(":4000", mux))
}
