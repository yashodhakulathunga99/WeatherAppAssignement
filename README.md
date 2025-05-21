# WeatherAppAssignment

A full-stack weather application that uses React for the frontend and Spring Boot for the backend. It integrates with the OpenWeatherMap API for weather data and Auth0 for user authentication.

---

##  Folder Structure

```
WeatherAppAssignment/
├── WeatherAppFrontend/   # React App (Frontend)
└── WeatherAppBackend/    # Spring Boot App (Backend)
```

---

##  Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- Java JDK 17+ installed and configured
- Maven or use IntelliJ built-in Maven support
- IntelliJ IDEA (recommended for backend)

---

##  API Key & Auth Configuration 

###  Backend (Spring Boot)

Keys and configuration are located inside:

```
WeatherAppBackend/src/main/resources/application.properties
```

**Make sure the following properties are correctly set:**

```
openweathermap.api.key=your_openweathermap_api_key

```

Replace these values with your actual keys from OpenWeatherMap.

---

###  Frontend (React)

Auth0 and API settings are hardcoded in the config file (e.g., `auth_config.js` or similar).

Example configuration:

```
export const authConfig = {
  domain: "your_auth0_domain",
  clientId: "your_auth0_client_id",
  audience: "your_auth0_audience"
};

export const weatherApiKey = "your_openweathermap_api_key";
export const backendUrl = "http://localhost:8080";
```

Please ensure this file is updated with valid credentials before running.

---

##  How to Run the App

### Start the Backend (Spring Boot)

#### Option 1: Using IntelliJ IDEA
- Open the `WeatherAppBackend` folder in IntelliJ.
- Locate the main application file:  
  `src/main/java/com/example/WeatherAppApplication.java`
- Right-click and **Run**.

###Openweathermap api keys are in the application.properties
spring.application.name=WeatherApp
server.port=8080
spring.cache.type=simple
weather.api.key=1a92aa42da081107d9e2392e41db78d5
weather.api.url=http://api.openweathermap.org/data/2.5/weather


#### Option 2: Using Terminal
```
cd WeatherAppBackend
./mvnw spring-boot:run
# Or if using Windows:
mvnw.cmd spring-boot:run
```

- Backend will start on: http://localhost:8080

---

### Start the Frontend (React)

#### Steps:
```
cd WeatherAppFrontend
npm install
npm start
```
Auth0 configurations are defined in the index.js
root.render(
  <Auth0Provider
    domain="dev-lh1lenjyxyavkld3.us.auth0.com"
    clientId="QIovI939vALwpDDY3xg8SUvj6Aqd2awT"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);

- The React app will start on: http://localhost:3000

---

## Features

- User login/logout with Auth0
- Search for weather by city
- Real-time weather updates from OpenWeatherMap API
- React-Spring Boot integration with secure API access

---

##  Notes for Reviewers

- API keys and Auth0 credentials are **already placed** inside the source files (`application.properties` for backend, config file for frontend).
- No need to create `.env` files.
- Please ensure your machine has the correct Java, Node.js, and internet access to fetch weather data from OpenWeatherMap.
- If you face CORS issues, make sure your backend allows requests from `http://localhost:3000`.

---
