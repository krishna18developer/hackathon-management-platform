# Documentation for Hackathon Management Platform API
**Author: Krishna Teja Mekala
Email: krishna18developer@gmail.com**
**The API is built on Go + Gin.**

## GENERAL API DETAILS
Every Response in this API will follow a Response Model.

```json
{
	"Msg":"Any Message",
	"Data": null
}
```

Data is of **any** type, if in the response **data** parameter of response returns `null` show the **Msg** parameter to the user if required.

The project has **Role Based Access Control**.
**SuperAdmin** - Create, Edit, Update, Delete every resource
**Admin** - Edit Update resources
**Judge**  -  Update resources
# User Management

## Login

**POST** - `/api/login` - Authorization not required.

**Request**
```json
{
	"Username":"USERNAME_HERE",
	"Password":"PASSWORD_HERE"
}
```
**Response**
```json
{
	"Msg":"ANY MESSAGE",
	"Data":
	{
	    "User":
	    {
		      "id": "66d00d158f093d898b1c9e23",
		      "Name": "N/A",
		      "Username": "USERNAME",
		      "Password": "PASSWORD HIDDEN",
		      "Email": "EMAIL_ID",
		      "Role": "Admin",
		      "Department": "Management",
		      "Year": -2,
		      "Branch": "N/A",
		      "Section": "N/A"
	    },
	    "Token": "TOKEN_HERE"
  }
}
```

## Register
**POST** - `/api/register` - **Authorization required**.
**Only SuperAdmin Token can access this route.**

**Request**
```json
{
	"Username": "USERNAME_HERE",
	"Password": "PASSWORD_HERE",
	"Email": "EMAIL_ID",
	"Role": "ROLE_HERE",
	"Department": "Management",
	"Year": -2,
	"Branch": "BRANCH_HERE",
	"Section": "SECTION_HERE"
}
```
**Response**
All Details are correct. STATUS 201
```json
{
  "Msg": "User Registered Successfully !",
  "Data": null
}
```
Username already Exists. STATUS 409
```json
{
  "Msg": "Username already exists",
  "Data": null
}
```
Insufficient Details. STATUS 400
```json
{
  "Msg": "Insufficient Details",
  "Data": null
}
```
Invalid Request. STATUS 400
```json
{
  "Msg": "Invalid Input",
  "Data": null
}
```

## Get All Users

**GET** - `/api/users` - **Authorization required**.

**Response**
```json
{
	"Msg":"ANY MESSAGE",
	"Data": [
	{
		"id": "66d00d158f093d898b1c9e23",
		"Name": "N/A",
		"Username": "USERNAME_1",
		"Password": "PASSWORD HIDDEN",
		"Email": "EMAIL_ID_1",
		"Role": "Admin",
		"Department": "Management",
		"Year": -2,
		"Branch": "N/A",
		"Section": "N/A"
	},
	{
		"id": "66d00d158f093d898b1c9e24",
		"Name": "N/A",
		"Username": "USERNAME_2",
		"Password": "PASSWORD HIDDEN",
		"Email": "EMAIL_ID_2",
		"Role": "Admin",
		"Department": "Management",
		"Year": -2,
		"Branch": "N/A",
		"Section": "N/A"
	}
  ]}
```

**GET** - `/api/users/:id` - **Authorization required**.

**Response**
```json
{
	"Msg":"ANY MESSAGE",
	"Data":
	{
		"id": "66d00d158f093d898b1c9e23",
		"Name": "N/A",
		"Username": "USERNAME_1",
		"Password": "PASSWORD HIDDEN",
		"Email": "EMAIL_ID_1",
		"Role": "Admin",
		"Department": "Management",
		"Year": -2,
		"Branch": "N/A",
		"Section": "N/A"
	}
}
```

# Event Management

## Create Hackathon

**POST** - `/api/hackathons` - **Authorization required**.

**Request**
```json
{
	"HackathonName":"HACKATHON_NAME_HERE",
	"HackathonDuration": 24,
	"HackathonStatus":"scheduled/ongoing",
	"HackathonOrganisers":[
		"ORGANISER_1_ID",
		"ORGANISER_2_ID"
	],
	"HackathonSponsors":[
		"SPONSOR_1",
		"SPONSOR_2"
	],
	"HackathonDomains":[
		"DOMAIN_1_ID",
		"DOMAIN_2_ID"
	]
}
```
**Response**
```json
{
	"Msg":"ANY MESSAGE",
	"Data": null
}
```

## Get Hackathon/Hackathons

**GET** - `/api/hackathons/:id` - **Authorization required**.
**GET** - `/api/hackathons` 		- **Authorization required**.

**Response**
```json
{
	"Msg":"ANY MESSAGE",
	"Data":
	[
		{
		}
	]
}
```

```json
{
	"Msg":"ANY MESSAGE",
	"Data": 
	{
	}
}
```

## Update Hackathon

**PUT** - `/api/hackathons/:id` - **Authorization required**.

**Request**
```json
{
	"HackathonName":"UPDATED_HACKATHON_NAME_HERE",
	"HackathonDuration": 24,
	"HackathonStatus":"scheduled/ongoing",
	"HackathonOrganisers":[
		"UPDATED_ORGANISER_1_ID",
		"UPDATED_ORGANISER_2_ID"
	],
	"HackathonSponsors":[
		"UPDATED_SPONSOR_1",
		"UPDATED_SPONSOR_2"
	],
	"HackathonDomains":[
		"UPDATED_DOMAIN_1_ID",
		"UPDATED_DOMAIN_2_ID"
	]
}
```
**Response**
```json
{
	"Msg":"ANY MESSAGE",
	"Data":
	[
		{
		}
	]
}
```
## Delete Hackathon

**DELETE** - `/api/hackathons/:id` - **Authorization required**.

**Response**
```json
{
	"Msg":"ANY MESSAGE",
	"Data":
	[
		{
		}
	]
}
```

# Participant Management

## Create Participant

**POST** - `/api/hackathons/:id/participants` - **Authorization required**.

**Request**
```json
{
	"HackathonName":"HACKATHON_NAME_HERE",
	"HackathonDuration": 24,
	"HackathonStatus":"scheduled/ongoing",
	"HackathonOrganisers":[
		"ORGANISER_1_ID",
		"ORGANISER_2_ID"
	],
	"HackathonSponsors":[
		"SPONSOR_1",
		"SPONSOR_2"
	],
	"HackathonDomains":[
		"DOMAIN_1_ID",
		"DOMAIN_2_ID"
	]
}
```
**Response**
```json
{
	"Msg":"ANY MESSAGE",
	"Data": null
}
```

## Get Participant/Participants

**GET** - `/api/hackathons/:id/participants/:id2` - **Authorization required**.
**GET** - `/api/hackathons/:id/participants` 		- **Authorization required**.

**Response**
```json
{
	"Msg":"ANY MESSAGE",
	"Data":
	[
		{
		}
	]
}
```

```json
{
	"Msg":"ANY MESSAGE",
	"Data": 
	{
	}
}
```

## Update Participant

**PUT** - `/api/hackathons/:id/participants/:id2` - **Authorization required**.

**Request**
```json
{
	"HackathonName":"UPDATED_HACKATHON_NAME_HERE",
	"HackathonDuration": 24,
	"HackathonStatus":"scheduled/ongoing",
	"HackathonOrganisers":[
		"UPDATED_ORGANISER_1_ID",
		"UPDATED_ORGANISER_2_ID"
	],
	"HackathonSponsors":[
		"UPDATED_SPONSOR_1",
		"UPDATED_SPONSOR_2"
	],
	"HackathonDomains":[
		"UPDATED_DOMAIN_1_ID",
		"UPDATED_DOMAIN_2_ID"
	]
}
```
**Response**
```json
{
	"Msg":"ANY MESSAGE",
	"Data":
	[
		{
		}
	]
}
```
## Delete Participant

**DELETE** - `/api/hackathons/:id/participants/:id2` - **Authorization required**.

**Response**
```json
{
	"Msg":"ANY MESSAGE",
	"Data":
	[
		{
		}
	]
}
```

# Judging System

# Notification System
