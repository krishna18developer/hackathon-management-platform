/**
 * @author Krishna Teja Mekala
 * @email [krishna18developer@gmail.com]
 * @create date 26-08-2024 15:07:20
 * @modify date 26-08-2024 15:42:47
 * @desc [description]
 */
package domains

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
		// If an ID is provided, retrieve a single Domain
		objID, err := primitive.ObjectIDFromHex(id)
		if err != nil {
			c.JSON(http.StatusBadRequest, internal.Response{Msg: "Invalid ID format"})
			return
		}

		var Domain models.Domain
		err = database.DomainsCollection.FindOne(context.TODO(), bson.M{"_id": objID}).Decode(&Domain)
		if err != nil {
			c.JSON(http.StatusNotFound, internal.Response{Msg: "Domain Not Found"})
			return
		}
		c.JSON(http.StatusOK, internal.Response{Msg: "Domain Details Retrieved", Data: Domain})
	} else {
		// If no ID is provided, retrieve all Domains
		cursor, err := database.DomainsCollection.Find(context.TODO(), bson.M{})
		if err != nil {
			c.JSON(http.StatusInternalServerError, internal.Response{Msg: "Error retrieving Domains"})
			return
		}
		defer cursor.Close(context.TODO())

		var Domains []models.Domain
		if err := cursor.All(context.TODO(), &Domains); err != nil {
			c.JSON(http.StatusInternalServerError, internal.Response{Msg: "Error decoding Domains"})
			return
		}
		if Domains == nil {
			c.JSON(http.StatusOK, internal.Response{Msg: "Empty Collection Of Domains", Data: Domains})
			return
		}
		_, exists := c.Get("role")
		if !exists {
			c.JSON(http.StatusForbidden, internal.Response{Msg: "Role not found"})
			c.Abort()
			return
		}
		// Returns All The Domains
		c.JSON(http.StatusOK, internal.Response{Msg: "All Domains Retrieved !", Data: Domains})
	}
}
