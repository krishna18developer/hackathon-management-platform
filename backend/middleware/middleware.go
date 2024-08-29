/**
 * @author Krishna Teja Mekala
 * @email [krishna18developer@gmail.com]
 * @create date 26-08-2024 11:16:16
 * @modify date 26-08-2024 11:16:16
 * @desc [description]
 */
package middleware

import (
	"hackathon-management-platform/auth"
	"hackathon-management-platform/internal"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

// JWTMiddleware verifies JWT tokens
func JWTMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.JSON(http.StatusUnauthorized, internal.Response{Msg: "Authorization header is missing"})
			c.Abort()
			return
		}
		tokenStr := strings.TrimPrefix(authHeader, "Bearer ")
		claims, err := auth.ParseToken(tokenStr)
		if err != nil {
			c.JSON(http.StatusUnauthorized, internal.Response{Msg: "Invalid token"})
			c.Abort()
			return
		}
		c.Set("username", claims["username"])
		c.Set("user_id", claims["user_id"])
		c.Set("role", claims["role"])
		c.Next()
	}
}

// RoleMiddleware checks if the user has one of the required roles
func RoleMiddleware(requiredRoles []string) gin.HandlerFunc {
	return func(c *gin.Context) {
		userRole, exists := c.Get("role")
		if !exists {
			c.JSON(http.StatusForbidden, internal.Response{Msg: "Role not found"})
			c.Abort()
			return
		}

		roleMatched := false
		for _, role := range requiredRoles {
			if userRole == role {
				roleMatched = true
				break
			}
		}

		if !roleMatched {
			c.JSON(http.StatusForbidden, internal.Response{Msg: "Access denied"})
			c.Abort()
			return
		}
		c.Next()
	}
}
