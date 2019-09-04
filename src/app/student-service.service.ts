import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
 
import {catchError,map} from 'rxjs/operators';
import { Student} from '../Student';
  
@Injectable({
  providedIn: 'root'
})


export class StudentServiceService {

  constructor(private httpClient : HttpClient) { }

  private students  = []; 
  baseUrl : string ="http://localhost:50546/api";
  get_students() :Observable<Student[]>
  {
    console.log("Inside Get All Students");
    return this.httpClient.get<Student[]>("api/students");
   
  }
  get_student_by_RollNo(id : number) :Observable<Student>
  {
    alert("ID is " + id);
     const headers = new HttpHeaders();
// headers.append('Accept', 'application/json');
console.log("Inside Get One Student By RollNo" + id);
     

    // let options = new RequestOptions({ headers: myHeaders, params: myParams });
    return this.httpClient.get<Student>("api/students"+"/"+id);
  }
     

   
 
  InsertStudent(student : Student) : Observable<any>
  {
    console.log("In Serv Insert" + student.F_Name );
return this.httpClient.post("api/students", student)
.pipe(
  map((res:Response)=>res),
  catchError(this.errorhandler));
  };

errorhandler(error : Response)
{
  console.log(error.status);
  console.log(error);
  
  return throwError(error);
}
private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
DeleteStudent(id : number)
{
 
  console.log("In Serv Delete" + id );
  return this.httpClient.delete("api/students"+ "/"+ id)
  .pipe(
    map((res:Response)=>res),
    catchError(this.errorhandler));
    };
  
   

  }
