/**
 * @author Krishna Teja Mekala
 * @email [krishna18developer@gmail.com]
 * @create date 26-08-2024 15:07:20
 * @modify date 26-08-2024 15:07:20
 * @desc [description]
 */
package hackathons

import (
	"context"
	"net/http"

	"hackathon-management-platform/internal"
	"hackathon-management-platform/internal/database"
	"hackathon-management-platform/internal/models"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func Read(c *gin.Context) {
	id := c.Param("id")
	if id != "" {
		// If an ID is provided, retrieve a single Hackathon
		objID, err := primitive.ObjectIDFromHex(id)
		if err != nil {
			c.JSON(http.StatusBadRequest, internal.Response{Msg: "Invalid ID format"})
			return
		}

		var Hackathon models.Hackathon
		err = database.HackathonsCollection.FindOne(context.TODO(), bson.M{"_id": objID}).Decode(&Hackathon)
		if err != nil {
			c.JSON(http.StatusNotFound, internal.Response{Msg: "Hackathon Not Found"})
			return
		}
		c.JSON(http.StatusOK, internal.Response{Msg: "Hackathon Details Retrieved", Data: Hackathon})
	} else {
		// If no ID is provided, retrieve all Hackathons
		cursor, err := database.HackathonsCollection.Find(context.TODO(), bson.M{})
		if err != nil {
			c.JSON(http.StatusInternalServerError, internal.Response{Msg: "Error retrieving Hackathons"})
			return
		}
		defer cursor.Close(context.TODO())

		var Hackathons []models.Hackathon
		if err := cursor.All(context.TODO(), &Hackathons); err != nil {
			c.JSON(http.StatusInternalServerError, internal.Response{Msg: "Error decoding Hackathons"})
			return
		}
		if Hackathons == nil {
			c.JSON(http.StatusOK, internal.Response{Msg: "Empty Collection Of Hackathons", Data: Hackathons})
			return
		}
		_, exists := c.Get("role")
		if !exists {
			c.JSON(http.StatusForbidden, internal.Response{Msg: "Role not found"})
			c.Abort()
			return
		}
		// Returns All The Hackathons
		c.JSON(http.StatusOK, internal.Response{Msg: "All Hackathons Retrieved !", Data: Hackathons})
	}
}
