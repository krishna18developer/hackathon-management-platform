/**
 * @author Krishna Teja Mekala
 * @email [krishna18developer@gmail.com]
 * @create date 26-08-2024 14:53:17
 * @modify date 26-08-2024 14:53:17
 * @desc [description]
 */
package models

import "go.mongodb.org/mongo-driver/bson/primitive"

// Hackathon represents the hackathon model in MongoDB
type Hackathon struct {
	ID            primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	HackathonName string             `bson:"HackathonName" json:"HackathonName"`
}

func NewHackathon() *Hackathon {
	return &Hackathon{
		HackathonName: "New Hackathon",
	}
}
