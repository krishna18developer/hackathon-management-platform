/**
 * @author Krishna Teja Mekala
 * @email [krishna18developer@gmail.com]
 * @create date 26-08-2024 11:15:37
 * @modify date 26-08-2024 11:15:37
 * @desc [description]
 */
package handlers

import (
	"hackathon-management-platform/internal"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetHackathons(c *gin.Context) {
	// Sample data, replace with actual data fetching
	hackathons := []string{"Hackathon 1", "Hackathon 2", internal.GetConfig().DATABASE_NAME}
	c.JSON(http.StatusOK, hackathons)
}

func CreateHackathon(c *gin.Context) {
	var hackathon struct {
		Name string `json:"name"`
	}

	if err := c.ShouldBindJSON(&hackathon); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Add logic to save hackathon to the database
	c.JSON(http.StatusCreated, gin.H{"message": "Hackathon created", "hackathon": hackathon})
}
