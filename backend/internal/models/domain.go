/**
 * @author Krishna Teja Mekala
 * @email [krishna18developer@gmail.com]
 * @create date 26-08-2024 15:26:28
 * @modify date 26-08-2024 15:30:47
 * @desc [description]
 */
package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Domain struct {
	ID                primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	DomainName        string             `bson:"DomainName" json:"DomainName"`
	DomainDescription string             `bson:"DomainDescription" json:"DomainDescription"`
	ProblemStatements []string           `bson:"ProblemStatements" json:"ProblemStatements"`
}

func NewDomain() *Domain {
	return &Domain{
		DomainName:        "New Domain",
		DomainDescription: "Domain Description",
		ProblemStatements: []string{},
	}
}
