/**
 * @author Krishna Teja Mekala
 * @email [krishna18developer@gmail.com]
 * @create date 26-08-2024 11:16:02
 * @modify date 26-08-2024 11:16:02
 * @desc [description]
 */
package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type TeamMember struct {
	Name        int16  `bson:"TeamName" json:"TeamName"`
	Email       string `bson:"Email" json:"Email"`
	PhoneNumber string `bson:"PhoneNumber" json:"PhoneNumber"`
	Institution string `bson:"Institution" json:"Institution"`
	Branch      string `bson:"Branch" json:"Branch"`
	Year        int16  `bson:"Year" json:"Year"`
}

// User represents the user model in MongoDB
type Team struct {
	ID              primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	TeamName        string             `bson:"TeamName" json:"TeamName"`
	TeamSize        int16              `bson:"TeamSize" json:"TeamSize"`
	TeamMembers     []TeamMember       `bson:"TeamMembers" json:"TeamMembers"`
	UTRNumber       string             `bson:"UTRNumber" json:"UTRNumber"`
	PaymentVerified bool               `bson:"PaymentVerified" json:"PaymentVerified"`
	Notes           string             `bson:"Notes" json:"Notes"`
}
