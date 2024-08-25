package main

import (
	"hackathon-management-platform/internal/handlers"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	// Routes
	router.GET("/hackathons", handlers.GetHackathons)
	router.POST("/hackathons", handlers.CreateHackathon)

	// Start the server
	router.Run(":8080")
}
