/**
 * @author Krishna Teja Mekala
 * @email [krishna18developer@gmail.com]
 * @create date 26-08-2024 11:17:36
 * @modify date 26-08-2024 11:17:36
 * @desc [description]
 */
package auth

import (
	"time"

	"github.com/dgrijalva/jwt-go"
	"golang.org/x/crypto/bcrypt"
)

// HashPassword hashes the password
func HashPassword(password string) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	return string(hashedPassword), err
}

// CheckPasswordHash checks if the provided password matches the hashed password
func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

var secretKey = []byte("your_secret_key") // Replace with your secret key

// GenerateToken generates a JWT token
func GenerateToken(userName string, userID string, role string) (string, error) {

	claims := jwt.MapClaims{
		"username": userName,
		"user_id":  userID,
		"role":     role,
		"exp":      time.Now().Add(time.Hour * 2).Unix(), // Token valid for 2 hours
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(secretKey)
}

// ParseToken parses a JWT token and returns the claims
func ParseToken(tokenStr string) (map[string]interface{}, error) {
	token, err := jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
		return secretKey, nil
	})
	if err != nil {
		return nil, err
	}
	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok || !token.Valid {
		return nil, err
	}
	return claims, nil
}
