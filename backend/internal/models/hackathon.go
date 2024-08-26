/**
 * @author Krishna Teja Mekala
 * @email [krishna18developer@gmail.com]
 * @create date 26-08-2024 14:53:17
 * @modify date 26-08-2024 15:25:22
 * @desc [description]
 */
package models

import "go.mongodb.org/mongo-driver/bson/primitive"

// Hackathon represents the hackathon model in MongoDB
type Hackathon struct {
	ID                  primitive.ObjectID   `bson:"_id,omitempty" json:"id,omitempty"`
	HackathonName       string               `bson:"HackathonName" json:"HackathonName"`
	HackathonDuration   int                  `bson:"HackathonDuration" json:"HackathonDuration"` // Duration in Hours
	HackathonStatus     string               `bson:"HackathonStatus" json:"HackathonStatus"`
	HackathonOrganisers []primitive.ObjectID `bson:"HackathonOrganisers" json:"HackathonOrganisers"` // Refers User Model
	HackathonSponsors   []string             `bson:"HackathonSponsors" json:"HackathonSponsors"`
	HackathonDomains    []primitive.ObjectID `bson:"HackathonDomains" json:"HackathonDomains"` // Refers Domain Model
}

func NewHackathon() *Hackathon {
	return &Hackathon{
		HackathonName:       "New Hackathon",
		HackathonDuration:   24,
		HackathonOrganisers: []primitive.ObjectID{},
		HackathonSponsors:   []string{},
		HackathonDomains:    []primitive.ObjectID{},
	}
}
