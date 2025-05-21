package com.example.weatherapp.service;

import com.example.weatherapp.model.City;
import com.example.weatherapp.model.CityListWrapper;
import com.example.weatherapp.model.WeatherResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class WeatherService {

    @Value("${weather.api.key}")
    private String apiKey;

    @Value("${weather.api.url}")
    private String apiUrl;

    private final RestTemplate restTemplate = new RestTemplate();

    @Cacheable(value = "weatherData", key = "'weather'", unless = "#result == null")
    public List<WeatherResponse> getWeatherData() throws Exception {
        // Step 1: Load city list from JSON file
        ObjectMapper mapper = new ObjectMapper();
        InputStream inputStream = new ClassPathResource("cities.json").getInputStream();
        CityListWrapper cityListWrapper = mapper.readValue(inputStream, CityListWrapper.class);
        List<City> cities = cityListWrapper.getList();

        List<WeatherResponse> result = new ArrayList<>();


        for (City city : cities) {
            String cityId = city.getCityCode();
            String url = String.format("%s?id=%s&units=metric&appid=%s", apiUrl, cityId, apiKey);


            Map<String, Object> response = restTemplate.getForObject(url, Map.class);

            if (response != null) {
                String name = (String) response.get("name");

                Map<String, Object> main = (Map<String, Object>) response.get("main");
                double temp = main != null ? ((Number) main.get("temp")).doubleValue() : 0.0;

                List<Map<String, Object>> weatherList = (List<Map<String, Object>>) response.get("weather");
                String status = "Unknown";
                if (weatherList != null && !weatherList.isEmpty()) {
                    status = (String) weatherList.get(0).get("main");
                }


                result.add(new WeatherResponse(name, status, temp));
            }
        }
        return result;
    }
}
