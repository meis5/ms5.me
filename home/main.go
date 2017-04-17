package main

import (
	"github.com/meis5/ms5.me/home/routers"
	"log"
	"net/http"
)

func main() {

	mux := http.NewServeMux()

	routers.Routers(mux)

	log.Print("App is listening port :4000")
	log.Fatal(http.ListenAndServe(":4000", mux))
}
