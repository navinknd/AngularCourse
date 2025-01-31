import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms'
import { CrudService } from 'src/app/services/crud.service';
@Component({
  selector: 'besant-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  userName: string = ""

  users: any[] = [];

  isEdit: boolean = false

  registrationForm!: FormGroup;

  // userEmail = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder, private crudService: CrudService) { }

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
      id: [''],
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      dob: ['', Validators.required],
      // profilePicture: ['', Validators.required],
      terms: ['', Validators.requiredTrue],
    });


    // this.registrationForm.valueChanges.subscribe({
    //   next: (data) => {
    //     console.log(this.registrationForm, "registrationForm value changes");
    //     // if (data.phone == 123) {
    //     //   this.registrationForm.controls['email'].setErrors(null)
    //     //   this.registrationForm.controls['address'].setErrors({ 'incorrect': true })
    //     // }
    //   }
    // })

    this.getUsers()

  }

  onSubmit() {
    if (!this.registrationForm.valid) return
    const user = this.registrationForm.value;
    console.log(user, "userss", this.isEdit);

    if (this.isEdit) {
      this.crudService.updateUser(user.id, user).subscribe({
        next: (data: any) => {
          console.log(data, "create users api success response");
          this.getUsers()
        }
      })
    } else {
      this.crudService.createUser(user).subscribe({
        next: (data: any) => {
          console.log(data, "create users api success response");
          this.getUsers()
        }
      })
    }


  }

  getUsers() {
    this.crudService.getUsers().subscribe({
      next: (users) => {
        console.log(users, "coming from backend");
        this.users = users
        this.isEdit = false
        this.registrationForm.reset()
      }

    })
  }

  editUser(user: any) {
    console.log(user, "editUser");
    this.isEdit = true
    const { fullName, email, password, phone, gender, address, dob, profilePicture, terms, id } = user;
    // this.registrationForm.patchValue({
    //   fullName,
    //   email,
    //   // password,
    //   // phone,
    //   // gender,
    //   // address,
    //   // dob,
    //   // id,
    //   // terms,
    // })
    this.registrationForm.setValue({
      fullName,
      email,
      password,
      phone,
      gender,
      address,
      dob,
      id,
      terms,
    })
  }
  deleteUser(user: any) {
    this.crudService.deletedUser(user.id).subscribe({
      next: (response: any) => {
        console.log(response, "response");
        this.getUsers()

      }
    })
  }

}
