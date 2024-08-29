/**
 * @author Krishna Teja Mekala
 * @email [krishna18developer@gmail.com]
 * @create date 26-08-2024 15:07:24
 * @modify date 26-08-2024 15:07:24
 * @desc [description]
 */
package domains

import (
	"context"
	"hackathon-management-platform/internal"
	"hackathon-management-platform/internal/database"
	"net/http"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func Delete(c *gin.Context) {
	id := c.Param("id")
	objID, _ := primitive.ObjectIDFromHex(id)

	_, err := database.DomainsCollection.DeleteOne(context.TODO(), bson.M{"_id": objID})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, internal.Response{Msg: "Domain deleted successfully !"})
}
