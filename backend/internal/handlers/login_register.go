/**
 * @author Krishna Teja Mekala
 * @email [krishna18developer@gmail.com]
 * @create date 26-08-2024 11:15:14
 * @modify date 26-08-2024 11:15:14
 * @desc [description]
 */
package handlers

import (
	"context"
	"hackathon-management-platform/auth"
	"hackathon-management-platform/internal"
	"hackathon-management-platform/internal/database"
	"hackathon-management-platform/internal/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

const (
	SuperAdmin = "SuperAdmin"
	Admin      = "Admin"
	Judge      = "Judge"
)

// Register handles user registration
func Register(c *gin.Context) {
	var newUser models.User
	if err := c.ShouldBindJSON(&newUser); err != nil {
		c.JSON(http.StatusBadRequest, internal.Response{Msg: "Invalid Input"})
		return
	}

	if newUser.Role == "" {
		newUser.Role = Admin
	}

	if newUser.Name == "" {
		newUser.Name = "N/A"
	}

	switch newUser.Role {
	case SuperAdmin:
		newUser.Department = "Management"
		newUser.Year = -1
	case Admin:
		newUser.Department = "Management"
		newUser.Year = -2
	case Judge:
		newUser.Department = "Auditing"
		newUser.Year = -3
	}

	if newUser.Department == "" {
		newUser.Department = "General"
	}
	if newUser.Branch == "" {
		newUser.Branch = "N/A"
	}
	if newUser.Section == "" {
		newUser.Section = "N/A"
	}
	if newUser.Year == 0 {
		newUser.Year = 1
	}
	if newUser.Email == "" {
		newUser.Email = "N/A"
	}

	// Hash password before storing
	hashedPassword, err := auth.HashPassword(newUser.Password)
	if err != nil {
		c.JSON(http.StatusInternalServerError, internal.Response{Msg: "Error Hashing Password"})
		return
	}
	newUser.Password = hashedPassword

	// Save user to database
	_, err = database.UsersCollection.InsertOne(context.TODO(), newUser)
	if err != nil {
		c.JSON(http.StatusInternalServerError, internal.Response{Msg: "Error Registering User"})
		return
	}

	c.JSON(http.StatusOK, internal.Response{Msg: "User Registered Successfully !"})
}

// Login handles user login and generates JWT tokens
func Login(c *gin.Context) {
	var loginData struct {
		Username string `json:"Username" binding:"required"`
		Password string `json:"Password" binding:"required"`
	}
	if err := c.ShouldBindJSON(&loginData); err != nil {
		c.JSON(http.StatusBadRequest, internal.Response{Msg: "Invalid Input"})
		return
	}

	// Fetch user from database
	var user models.User
	err := database.UsersCollection.FindOne(context.TODO(), gin.H{"Username": loginData.Username}).Decode(&user)
	if err != nil {
		c.JSON(http.StatusUnauthorized, internal.Response{Msg: "Invalid username or password"})
		return
	}

	// Check password
	if !auth.CheckPasswordHash(loginData.Password, user.Password) {
		c.JSON(http.StatusUnauthorized, internal.Response{Msg: "Invalid username or password"})
		return
	}

	var output struct {
		User  models.User `bson:"User" json:"User"`
		Token string      `bson:"Token" json:"Token"`
	}

	// Generate JWT token
	token, err := auth.GenerateToken(loginData.Username, user.ID.Hex(), user.Role)
	if err != nil {
		c.JSON(http.StatusInternalServerError, internal.Response{Msg: "Error Generating Token"})
		return
	}

	output.User = user
	output.Token = token

	output.User.Password = "PASSWORD HIDDEN"

	// Return token
	c.JSON(http.StatusOK, internal.Response{Msg: "Login Successful", Data: output})
}
