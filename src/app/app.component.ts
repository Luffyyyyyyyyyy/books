import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'form';
  students: any[] = []
  students1: any[] = []
  regForm!: NgForm
  
  constructor(
    // public name: string,
    // public rollno: number,
    // public email : string,
    // public password : string,
    // public address: string,
    // public state: string,

  ) {
    let data = localStorage.getItem("students1") || ''
    this.students1 = JSON.parse(data)
   }

  register(regForm: any) {
    console.log(regForm)
    this.students.push(regForm.value)
    localStorage.setItem("students1", JSON.stringify(this.students))
    let data = localStorage.getItem("students1") || ''
    this.students1 = JSON.parse(data)
  }

  delete(i:number){
    this.students1.splice(i,1)
    localStorage.setItem("students1", JSON.stringify(this.students1))
    let data = localStorage.getItem("students1") || ''
    this.students1 = JSON.parse(data)
  }

  edit(i:number){
    // console.log(this.regForm)
    // this.regForm.value.name = this.students1[i].name
    // this.regForm.value.rollNo = this.students1[i].rollNo
    // this.regForm.value.address = this.students1[i].address
    // this.regForm.value.password = this.students1[i].password
    // this.regForm.value.state = this.students1[i].state
    // this.regForm.value.email = this.students1[i].email
  
  
  }








  asc(){
    this.students1  = this.students1.sort((a:any,b:any) => {
      return (a.rollNo) - (b.rollNo);
    })
  }

  des(){
    this.students1  = this.students1.sort((a:any,b:any) => {
      return (b.rollNo) - (a.rollNo);
    })
  }

 
  // use splice for edit button & use remove to remove button
  // use sorting ascending & descending
  // students = ["utkarsh", "rahul", "megha"]

  // loginUser(loginForm: any){
  //   console.log(loginForm)
  // }
  // users = ["Rakesh", "Jyoti", "Mahesh"]
  // userDetails:any[] = [
  //   { name: "Rakesh Sharma", rollNo: 52, },
  //   { name: "Jyoti Pareek", rollNo: 42, },
  //   { name: "Mahesh Pandey", rollNo: 22, }
  // ]
}
