import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-viewevent',
  templateUrl: './viewevent.component.html',
  styleUrls: ['./viewevent.component.css']
})
export class VieweventComponent implements OnInit {

todayevent:any
userid:any

constructor(public ds: DataService,private router:Router) {
 this.userid= localStorage.getItem("currentAcc")
  this.ds.getEvents(this.userid).subscribe((result: any) => {
    if (result) {
      console.log(result.todayevents)

      this.todayevent = result.todayevents
    }
  }, (result) => {
    alert(result.error.message)

  })
}

  ngOnInit(): void {
  }
  deleteAcc(){
    this.userid=localStorage.getItem("currentAcc")
  }
  onDeleteAtParent(event:any){
    this.ds.deleteAcc(event)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl("")
      }
    },
    (result)=>{
      alert(result.error.message)
    }
    )
  }
  onCancel(){
    this.userid=""
  }
  }

