import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) {}

  addSymptom(symptom: any): Observable<Object> {

   let url = "https://dwbd2kly73.execute-api.us-east-1.amazonaws.com/DEV"

   return this.http.post(url, symptom);

  }

  getSymptoms(): Observable<any> {

    let url = "https://dwbd2kly73.execute-api.us-east-1.amazonaws.com/DEV"
    
    return this.http.get(url);

  }
}