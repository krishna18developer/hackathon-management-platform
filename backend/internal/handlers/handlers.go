package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetHackathons(c *gin.Context) {
	// Sample data, replace with actual data fetching
	hackathons := []string{"Hackathon 1", "Hackathon 2"}
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
