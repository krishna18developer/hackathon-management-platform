/**
 * @author Krishna Teja Mekala
 * @email [krishna18developer@gmail.com]
 * @create date 26-08-2024 11:16:02
 * @modify date 26-08-2024 11:16:02
 * @desc [description]
 */
package models

import "go.mongodb.org/mongo-driver/bson/primitive"

// User represents the user model in MongoDB
type User struct {
	ID         primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	Name       string             `bson:"Name" json:"Name"`
	Username   string             `bson:"Username" json:"Username"`
	Password   string             `bson:"Password" json:"Password"` // Ensure passwords are hashed
	Email      string             `bson:"Email" json:"Email"`
	Role       string             `bson:"Role" json:"Role"`
	Department string             `bson:"Department" json:"Department"`
	Year       int                `bson:"Year" json:"Year"`
	Branch     string             `bson:"Branch" json:"Branch"`
	Section    string             `bson:"Section" json:"Section"`
}
