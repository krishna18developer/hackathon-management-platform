/**
 * @author Krishna Teja Mekala
 * @email [krishna18developer@gmail.com]
 * @create date 26-08-2024 15:07:28
 * @modify date 26-08-2024 15:07:28
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
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func Create(c *gin.Context) {
	domain := models.NewDomain()
	if err := c.ShouldBindJSON(&domain); err != nil {
		c.JSON(http.StatusBadRequest, internal.Response{Msg: err.Error()})
		return
	}
	domain.ID = primitive.NewObjectID()
	_, err := database.DomainsCollection.InsertOne(context.TODO(), domain)
	if err != nil {
		c.JSON(http.StatusInternalServerError, internal.Response{Msg: err.Error()})
		return
	}

	c.JSON(http.StatusCreated, internal.Response{Msg: "Domain Created Successfully !", Data: domain})
}
