import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userid = ""
  password = ""
  username = ""
  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    userid: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {

    if (this.registerForm.valid) {
      var userid = this.registerForm.value.userid;
      var password = this.registerForm.value.password;
      var username = this.registerForm.value.username;

      this.ds.register(userid,username, password)
      .subscribe((result:any)=>{
        if (result) {
          alert("succesfilly registerd")
          this.router.navigateByUrl("")
        }
      },(result:any)=>{
        alert(result.error.message)
        this.router.navigateByUrl("")
      })
    }
    else {
      alert(" form invalid")
    }
  }
}