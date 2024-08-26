/**
 * @author Krishna Teja Mekala
 * @email [krishna18developer@gmail.com]
 * @create date 26-08-2024 15:07:15
 * @modify date 26-08-2024 15:44:14
 * @desc [description]
 */
package domains

import (
	"context"
	"hackathon-management-platform/internal"
	"hackathon-management-platform/internal/database"
	"hackathon-management-platform/internal/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func Update(c *gin.Context) {
	id := c.Param("id")
	objID, _ := primitive.ObjectIDFromHex(id)

	var domain models.Domain
	if err := c.ShouldBindJSON(&domain); err != nil {
		c.JSON(http.StatusBadRequest, internal.Response{Msg: err.Error()})
		return
	}

	filter := bson.M{"_id": objID}
	update := bson.M{"$set": domain}

	_, err := database.DomainsCollection.UpdateOne(context.TODO(), filter, update)
	if err != nil {
		c.JSON(http.StatusInternalServerError, internal.Response{Msg: err.Error()})
		return
	}

	c.JSON(http.StatusOK, internal.Response{Msg: "Domain Update Successfully !", Data: domain})
}
