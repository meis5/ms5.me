package databases

import (
    _ "github.com/go-sql-driver/mysql"
    "database/sql"
    "github.com/meis5/ms5.me/home/utils"
)

var Mysql *sql.DB

func init() {
    var err error
    Mysql, err = sql.Open("mysql", "root:112358@tcp(121.40.92.7:3306)/meis5_dev?charset=utf8")
    utils.CheckError(err)
}
