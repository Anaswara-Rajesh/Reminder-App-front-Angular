import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  remindForm = this.fb.group({

    userid: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    date: [''],
    event: [''],
  })

  userName:any
  userid:any
  date: Date = new Date();

  constructor(private ds: DataService, private fb: FormBuilder, private router:Router) {
    this.userName = localStorage.getItem("userName")
   }

  ngOnInit(): void {
  }

  remind() {

    if (this.remindForm.valid) {
      var userid = this.remindForm.value.userid;
      var password = this.remindForm.value.password;
      var date = this.remindForm.value.date;
      var event = this.remindForm.value.event;

      this.ds.remind(userid, password, date, event)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
      },
      (result)=>{
        alert(result.error.message)
      }
      )
    }
    else {
      alert("invalid form")
    }
  }

}
