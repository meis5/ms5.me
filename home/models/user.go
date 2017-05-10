package models

import (
    "time"
)

type User struct {
    // 账户信息
    Id              string
    Username        string
    Password        string
    Nickname        string
    Emails           []string
    Phones           []string
    // 社交账号
    Qq              string
    Wechat          string
    Google          string
    Facebook        string
    Twitter         string
    Linkin          string
    Github          string
    // 账户资料
    Addresses         []Address
    // 账户活动
    CreatedDate     time.Time
    LastVisitedDate time.Time
}
