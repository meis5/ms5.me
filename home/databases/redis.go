package databases

import (
    "github.com/go-redis/redis"
)

var Redis *redis.Client

func init() {
    Redis = redis.NewClient(&redis.Options{
        Addr:     "121.40.92.7:6379",
        Password: "",
        DB:       0,
    })
}
