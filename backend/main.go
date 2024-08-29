/**
 * @author Krishna Teja Mekala
 * @email [krishna18developer@gmail.com]
 * @create date 26-08-2024 11:16:20
 * @modify date 26-08-2024 15:13:14
 * @desc [description]
 */
package main

import (
	"hackathon-management-platform/internal"
	"hackathon-management-platform/internal/database"
	"hackathon-management-platform/internal/handlers"
	"hackathon-management-platform/internal/handlers/hackathons"
	"log"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	internal.LoadConfig()

	// Initialize MongoDB
	if err := database.Connect(internal.GetConfig().MONGO_URI_ADDRESS, internal.GetConfig().DATABASE_NAME); err != nil {
		log.Fatalf("Failed to connect to MongoDB: %v", err)
	}
	log.Println("Successfully connected to MongoDB")

	// Routes
	router.POST("/api/login", handlers.Login)
	router.POST("/api/register", handlers.Register) // REMOVE IN PRODUCTION

	hackathonsRouter := router.Group("api/hackathons")
	hackathons.SetupRouter(hackathonsRouter)

	// Start the server
	router.Run(":" + internal.GetConfig().PORT)
}
