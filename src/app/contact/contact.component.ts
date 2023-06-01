import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isLoading = false;
  isError = false;
  isSuccess = false;
  errorMessage = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, Validators.required),
    });
  }

  submitForm() {
    if (!this.contactForm.valid) {
      return;
    }

    this.isLoading = true;
    const url = 'https://hbthjv7pth.execute-api.us-east-2.amazonaws.com/dev';
    this.http.post(url, this.contactForm.value).subscribe(
      response => {
        console.log(response);
        this.isLoading = false;
        this.isSuccess = true;
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.isError = true;
        this.errorMessage = error.message;
      }
    );
  }
}
