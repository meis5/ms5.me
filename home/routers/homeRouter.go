package routers

import (
    "net/http"
    "github.com/meis5/ms5.me/home/templates"
    "github.com/meis5/ms5.me/home/databases"
    "github.com/meis5/ms5.me/home/utils"
    "encoding/json"
    "fmt"
)

type User struct {
    Name string
}

func (u User) MarshalBinary() ([]byte, error) {
    return json.Marshal(u)
}

func homeRouter(mux *http.ServeMux) {
    mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {

        db := databases.Mysql
        redis := databases.Redis

        err := redis.Set("username", User{"你妈啊 x你没没"}, 0).Err()
        utils.CheckError(err)

        rs, err := redis.Get("username").Result()
        fmt.Println(rs)
        utils.CheckError(err)

        stmt, err := db.Prepare("INSERT userinfo SET username=?,departname=?,created=?")
        utils.CheckError(err)

        _, err = stmt.Exec("astaxie", "研发部门", "2012-12-09")
        utils.CheckError(err)

        templates.Render(w, templates.HomeTemplate, rs)
    })
}
