package com.example.weatherapp.model;

public class WeatherResponse {
    private String cityName;
    private String status;
    private double temp;

    public WeatherResponse() {}

    public WeatherResponse(String cityName, String status, double temp) {
        this.cityName = cityName;
        this.status = status;
        this.temp = temp;
    }


    public String getCityName() { return cityName; }
    public void setCityName(String cityName) { this.cityName = cityName; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public double getTemp() { return temp; }
    public void setTemp(double temp) { this.temp = temp; }
}
