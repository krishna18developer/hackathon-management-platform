/**
 * @author Krishna Teja Mekala
 * @email [krishna18developer@gmail.com]
 * @create date 26-08-2024 15:07:10
 * @modify date 26-08-2024 15:43:20
 * @desc [description]
 */

package domains

import (
	"hackathon-management-platform/internal"
	"hackathon-management-platform/middleware"

	"github.com/gin-gonic/gin"
)

// SetupRouter initializes the domain routes
func SetupRouter(router *gin.RouterGroup) {
	domainsRouter := router.Group("/")
	domainsRouter.Use(middleware.JWTMiddleware())
	{
		domainsRouter.POST("/", middleware.RoleMiddleware([]string{internal.SuperAdmin, internal.Admin, internal.Judge}), Create)
		domainsRouter.GET("/", middleware.RoleMiddleware([]string{internal.SuperAdmin, internal.Admin, internal.Judge}), Read)
		domainsRouter.GET("/:id", middleware.RoleMiddleware([]string{internal.SuperAdmin, internal.Admin, internal.Judge}), Read)
		domainsRouter.PUT("/:id", middleware.RoleMiddleware([]string{internal.SuperAdmin, internal.Admin, internal.Judge}), Update)
		domainsRouter.DELETE("/:id", middleware.RoleMiddleware([]string{internal.SuperAdmin, internal.Admin, internal.Judge}), Delete)
	}
}
