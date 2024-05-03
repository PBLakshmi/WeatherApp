import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, interval, retryWhen, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  private apiKey = 'JjiiVMLvQaMZwuxTtX0OHHXfFhTPcfKp';
  getWeatherForecast(latitude: string, longitude: string): Observable<any> {
    const forecastUrl = `https://api.tomorrow.io/v4/weather/forecast?location=${latitude},${longitude}&apikey=${this.apiKey}`;
    return this.http.get(forecastUrl);
  }
  getCurrentWeather(city: string): Observable<any> {
    const weatherUrl = `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${this.apiKey}`;
    return this.http.get(weatherUrl);
  }

  constructor(private http: HttpClient) {}
}
