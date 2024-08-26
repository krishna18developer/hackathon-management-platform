/**
 * @author Krishna Teja Mekala
 * @email [krishna18developer@gmail.com]
 * @create date 26-08-2024 11:16:12
 * @modify date 26-08-2024 11:16:12
 * @desc [description]
 */
package internal

import (
	"log"

	"github.com/spf13/viper"
)

type Config struct {
	MONGO_URI_ADDRESS string `mapstructure:"MONGO_URI_ADDRESS"`
	PORT              string `mapstructure:"PORT"`
	DATABASE_NAME     string `mapstructure:"DATABASE_NAME"`
}

var config Config

type Response struct {
	Msg  string `bson:"Msg" json:"Msg"`
	Data any    `bson:"Data" json:"Data"`
}

// LoadConfig reads configuration from file or environment variables.
func loadConfigFromViper(path string) (config Config, err error) {
	viper.AddConfigPath(path)
	viper.SetConfigName("app")
	viper.SetConfigType("env")

	viper.AutomaticEnv()

	err = viper.ReadInConfig()
	if err != nil {
		return
	}

	err = viper.Unmarshal(&config)
	return
}

func LoadConfig() {

	config1, err := loadConfigFromViper(".")
	if err != nil {
		log.Fatal("cannot load config:", err)
	}
	config = config1
}

func GetConfig() Config {
	return config
}
