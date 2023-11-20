import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) { }

  sendContactForm(formValue: any) {
    // Replace with your API endpoint
    const apiUrl = 'https://g8ook1u7ub.execute-api.us-east-2.amazonaws.com/dev/contactMe-dev';
    return this.http.post(apiUrl, formValue);
  }
}
