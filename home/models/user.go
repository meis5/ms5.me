package models

import (
    "time"
    "database/sql"
)

type User struct {
    // 账户信息
    Id       string `json:"id"`
    Username sql.NullString `json:"username"`
    Password string `json:"password"`
    Nickname sql.NullString `json:"nickname"`
    Emails   []string `json:"emails"`
    Phones   []string `json:"phones"`
    // 社交账号
    Qq       sql.NullString `json:"qq"`
    Wechat   sql.NullString `json:"wechat"`
    Google   sql.NullString `json:"google"`
    Facebook sql.NullString `json:"facebook"`
    Twitter  sql.NullString `json:"twitter"`
    Linkin   sql.NullString `json:"linkin"`
    Github   sql.NullString `json:"github"`
    // 账户资料
    Addresses []Address `json:"addresses"`
    // 账户活动
    CreatedDate     time.Time `json:"created_date"`
    LastUpdatedDate time.Time `json:"last_visited_date"`
    LastVisitedDate time.Time `json:"last_visited_date"`
}
