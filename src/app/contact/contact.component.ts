import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from "../contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    'name': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'message': new FormControl('', [Validators.required, Validators.maxLength(500)])
  });

  isLoading = false;
  isError = false;
  isSuccess = false;
  errorMessage = '';

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.isLoading = true;
    this.contactForm.markAllAsTouched(); // Ensure all fields are touched to show validation errors if any

    if (this.contactForm.valid) {
      this.contactService.sendContactForm(this.contactForm.value).subscribe({
        next: (response) => {
          this.isSuccess = true;
          this.contactForm.reset(); // Reset form on success
        },
        error: (error) => {
          this.errorMessage = error.error.message || 'An unknown error occurred.';
        },
        complete: () => {
          this.isLoading = false; // Set loading to false regardless of outcome
        }
      });
    } else {
      this.isLoading = false;
      this.errorMessage = 'Please ensure all fields are filled out correctly.';
      this.isError = true;
    }
  }
}
