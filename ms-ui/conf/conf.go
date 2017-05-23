package conf

import (
    "github.com/meis5/ms5.me/home/utils"
    "github.com/spf13/viper"
)

var Env struct {
    Env string `default:"production"`
}

var Meta map[string]string
var Web map[string]string

func init() {

    viper.SetConfigName("conf/conf")
    viper.SetConfigType("toml")
    viper.AddConfigPath(".")

    err := viper.ReadInConfig()
    utils.CheckError(err)

    Meta = map[string]string{
        "version": viper.GetString("version"),
    }
    Web = viper.GetStringMapString("web.development")
}
