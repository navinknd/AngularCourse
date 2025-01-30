import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms'
@Component({
  selector: 'besant-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  userName: string = ""

  registrationForm!: FormGroup;

  // userEmail = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log("SignupComponent component loaded");

    // this.userEmail.valueChanges.subscribe({
    //   next: (data) => {
    //     console.log(data, "userEmail value changes");
    //   }
    // })

    // with fromgroup & form controls
    // this.registrationForm = new FormGroup({
    //   fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', Validators.required),
    //   phone: new FormControl('', Validators.required),
    //   gender: new FormControl('', Validators.required),
    //   address: new FormControl('', Validators.required),
    //   dob: new FormControl('', Validators.required),
    //   profilePicture: new FormControl('', Validators.required),
    //   terms: new FormControl('', Validators.requiredTrue),

    // });

    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      dob: ['', Validators.required],
      profilePicture: ['', Validators.required],
      terms: ['', Validators.requiredTrue],
    });


    this.registrationForm.valueChanges.subscribe({
      next: (data) => {
        console.log(this.registrationForm, "registrationForm value changes");
        // if (data.phone == 123) {
        //   this.registrationForm.controls['email'].setErrors(null)
        //   this.registrationForm.controls['address'].setErrors({ 'incorrect': true })
        // }
      }
    })

  }

  onSubmit() {
    this.registrationForm.valid ? console.log("form is submited", this.registrationForm.value) : console.log("form is submited  and invalid")

    this.registrationForm.markAllAsTouched()
  }

}
