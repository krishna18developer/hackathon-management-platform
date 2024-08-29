/**
 * @author Krishna Teja Mekala
 * @email [krishna18developer@gmail.com]
 * @create date 26-08-2024 15:07:28
 * @modify date 26-08-2024 15:07:28
 * @desc [description]
 */
package hackathons

import (
	"context"
	"hackathon-management-platform/internal"
	"hackathon-management-platform/internal/database"
	"hackathon-management-platform/internal/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func Create(c *gin.Context) {
	hackathon := models.NewHackathon()
	if err := c.ShouldBindJSON(&hackathon); err != nil {
		c.JSON(http.StatusBadRequest, internal.Response{Msg: err.Error()})
		return
	}
	hackathon.ID = primitive.NewObjectID()
	_, err := database.HackathonsCollection.InsertOne(context.TODO(), hackathon)
	if err != nil {
		c.JSON(http.StatusInternalServerError, internal.Response{Msg: err.Error()})
		return
	}

	c.JSON(http.StatusCreated, internal.Response{Msg: "Hackathon Created Successfully !", Data: hackathon})
}
