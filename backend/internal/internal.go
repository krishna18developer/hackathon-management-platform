package internal

type Response struct {
	Msg  string `bson:"Msg" json:"Msg"`
	Data any    `bson:"Data" json:"Data"`
}
