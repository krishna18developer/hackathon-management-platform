/**
 * @author Krishna Teja Mekala
 * @email [krishna18developer@gmail.com]
 * @create date 26-08-2024 15:07:10
 * @modify date 26-08-2024 15:08:00
 * @desc [description]
 */
package hackathons

import (
	"hackathon-management-platform/internal"
	"hackathon-management-platform/internal/handlers/hackathons/domains"
	"hackathon-management-platform/middleware"

	"github.com/gin-gonic/gin"
)

// SetupRouter initializes the hackathon routes
func SetupRouter(router *gin.RouterGroup) {
	hackathonsRouter := router.Group("/")
	domainsRouter := router.Group("/domains")
	domains.SetupRouter(domainsRouter)

	hackathonsRouter.GET("/names", Read)

	hackathonsRouter.POST("/:id/register", RegisterTeam)

	hackathonsRouter.Use(middleware.JWTMiddleware())
	{
		hackathonsRouter.POST("/", middleware.RoleMiddleware([]string{internal.SuperAdmin, internal.Admin, internal.Judge}), Create)
		hackathonsRouter.GET("/", middleware.RoleMiddleware([]string{internal.SuperAdmin, internal.Admin, internal.Judge}), Read)
		hackathonsRouter.GET("/:id", middleware.RoleMiddleware([]string{internal.SuperAdmin, internal.Admin, internal.Judge}), Read)
		hackathonsRouter.PUT("/:id", middleware.RoleMiddleware([]string{internal.SuperAdmin, internal.Admin, internal.Judge}), Update)
		hackathonsRouter.DELETE("/:id", middleware.RoleMiddleware([]string{internal.SuperAdmin, internal.Admin, internal.Judge}), Delete)
	}
}
