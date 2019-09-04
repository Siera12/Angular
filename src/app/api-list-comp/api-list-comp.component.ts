import { Component, OnInit } from '@angular/core';

import { HttpClient , } from '@angular/common/http';
import { StudentServiceService } from '../student-service.service';
import { Observable } from 'rxjs';

import { Student} from '../../Student';
import { FormGroup, FormBuilder,  Validator } from '@angular/forms';

@Component({
  selector: 'list-comp',
  templateUrl: './api-list-comp.component.html',
  styleUrls: ['./api-list-comp.component.css']
})
export class ApiListCompComponent implements OnInit {

 students : Student[];
 student : Student;
  constructor(private service : StudentServiceService, private fb : FormBuilder) {}
  get_students() 
  {
   this.service.get_students().subscribe(data=>this.students= data);
 return this.students;
  }
  InsertStudentForm : FormGroup;
  UpdateStudentForm : FormGroup;
  SearchStudentForm : FormGroup;
     
  ngOnInit() {
    this.get_students();
    this.InsertStudentForm = this.fb.group({
      'RollNo' : [''],
      'F_Name' :[],
      'L_Name':[],
      'City':[]
    });
    this.UpdateStudentForm = this.fb.group({
      'RollNo' : [''],
      'F_Name' :[],
      'L_Name':[],
      'City':[]
    });
    this.SearchStudentForm = this.fb.group({
      'RollNo' : [''] 
    });
      }
      get_student_by_RollNo()
      {
        console.log("RN IS " + this.SearchStudentForm.value);
        
        let i = this.SearchStudentForm.value;
        this.service.get_student_by_RollNo(i.RollNo)
        .subscribe(data=>this.student= data);
         alert(i.RollNo);
      }

     
    msg : string;
      OnInsertStudent()
      {
        console.log(this.InsertStudentForm.value);
        alert("Insdie Insert");
        let student = this.InsertStudentForm.value;
        this.service.InsertStudent(student)
        .subscribe((result)=> {console.log("Inserted")
        this.msg="Inserted"
      },
      error=>{
        alert(error.message);
        console.log(error.message);
      },
        ()=> {
          console.log("Insertion successfull")
        }
        );
        // console.log(value.F_Name);
        // alert(value);
      }

      DeleteStudent(id : number)
      {
        console.log(id);
        alert("Insdie Delete");
        // let student = this.students.find(x=>x.RollNo == id);
        //  if(student != null)
        this.service.DeleteStudent(id)
        .subscribe((result)=> {console.log("Deleted")
        this.msg="Inserted"
      },
      error=>{
        alert(error.message);
        console.log(error.message);
      },
        ()=> {
          console.log("Deletion successfull")
        }
        );
      }
}