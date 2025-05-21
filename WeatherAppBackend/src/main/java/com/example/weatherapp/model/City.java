package com.example.weatherapp.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class City {

    @JsonProperty("CityCode")
    private String CityCode;

    @JsonProperty("CityName")
    private String CityName;


    @JsonProperty("Temp")
    private String Temp;

    @JsonProperty("Status")
    private String Status;


    public String getCityCode() { return CityCode; }
    public void setCityCode(String cityCode) { CityCode = cityCode; }

    public String getCityName() { return CityName; }
    public void setCityName(String cityName) { CityName = cityName; }

    public String getTemp() { return Temp; }
    public void setTemp(String temp) { Temp = temp; }

    public String getStatus() { return Status; }
    public void setStatus(String status) { Status = status; }
}