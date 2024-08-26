/**
 * @author Krishna Teja Mekala
 * @email [krishna18developer@gmail.com]
 * @create date 26-08-2024 11:16:40
 * @modify date 26-08-2024 11:16:40
 * @desc [description]
 */
package database

import (
	"context"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	client               *mongo.Client
	UsersCollection      *mongo.Collection
	HackathonsCollection *mongo.Collection
	ReportsCollection    *mongo.Collection
)

func Connect(uri string, DatabaseName string) error {
	var err error
	client, err = mongo.Connect(context.TODO(), options.Client().ApplyURI(uri))
	if err != nil {
		return err
	}

	// Check connection
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		return err
	}

	// Initialize collections
	UsersCollection = client.Database(DatabaseName).Collection(HMP_UsersCollection)
	HackathonsCollection = client.Database(DatabaseName).Collection(HMP_HackathonsCollection)
	ReportsCollection = client.Database(DatabaseName).Collection(HMP_ReportsCollection)

	return nil
}

// GetClient returns the MongoDB client
func GetClient() *mongo.Client {
	return client
}
