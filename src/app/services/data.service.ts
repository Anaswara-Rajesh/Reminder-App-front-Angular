import { transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  withCredentials:true
}
@Injectable({
  providedIn: 'root'
})

export class DataService {

  currentUser=""

  currentAcc=""

  users: any = {
    1000: { userid: 1000, username: "Aahil", password: "userone", date: "01/02/1997",event:"birthday", todayevents:[] },
    1001: { userid: 1001, username: "Bahit", password: "usertwo", date: "01/02/1997",event:"birthday", todayevents:[] },
    1002: { userid: 1002, username: "Cahit", password: "userthree", date: "01/02/1997",event:"birthday", todayevents:[] },
    1003: { userid: 1003, username: "Dahit", password: "userfour", date: "01/02/1997",event:"birthday", todayevents:[] }
  }

  constructor(private http:HttpClient) {
    // this.getDetails()
   }

  saveDetails(){
    localStorage.setItem("users",JSON.stringify(this.users))

     if(this.currentUser){

      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))

     }
     if(this.currentAcc){

      localStorage.setItem("currentAcc",JSON.stringify(this.currentAcc))

     }
    
  }

  getDetails(){
    if(localStorage.getItem("users")){
      this.users=JSON.parse (localStorage.getItem("users")|| '')
    }
    if(localStorage.getItem("currentUser")){
   this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
  }
  if(localStorage.getItem("currentAcc")){
    this.currentAcc=JSON.parse(localStorage.getItem("currentAcc")||'')
   }
  
}


register(userid: any, username: any, password: any) {

const data={
  userid,
  username,
  password
}

  return  this.http.post("http://localhost:3000/register",data)
  
   }
  login(userid:any,password:any){

    const data ={
      userid,
      password
    }


    return  this.http.post("http://localhost:3000/login",data,options)
    
  }

  remind(userid:any,password:any,date:any,event:any){

    const data ={
      userid,
      password,
      date,
      event
    }


    return  this.http.post("http://localhost:3000/remind",data,options)
  }

  getEvents(userid:any) {
    const data={userid}
    return this.http.post('http://localhost:3000/getEvents',data,options)
  
  }

  deleteAcc(userid:any){
    return this.http.delete("http://localhost:3000/deleteAcc/"+userid,options)
     }
   
 
}