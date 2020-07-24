import { Injectable, ɵɵresolveBody } from '@angular/core';
import { Student } from './../model/student';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentURL = 'http://localhost:3000/student';

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.studentURL).pipe(
      tap(receiveStudent => receiveStudent ),
      catchError(err => of([]))
    );
  }

  getStudentFromId(id: string): Observable<Student> {
    // return of(student_fake.find(student => student.id === id))
    const url = `${this.studentURL}/${id}`;
    return this.http.get<Student>(url).pipe(
      tap(receiveStudent => receiveStudent ),
      catchError(err => of(new Student()))
    );
  }

  updateStudent(student: Student): Observable<Student> {
    // const httpOptions = {
    //   HttpHeaders: new HttpHeaders({ 'Content-Type': 'application/json' })
    // }
    const url = `${this.studentURL}/${student.id}`;
    return this.http.put<Student>(url, student, httpOptions).pipe(
      tap(receiveStudent => receiveStudent ),
      catchError(err => of(new Student()))
    );
  }

  addNewStudent(newStudent: Student): Observable<Student> {
    return this.http.post<Student>(this.studentURL, newStudent, httpOptions ).pipe(
      tap(st => console.log(JSON.stringify(st))),
      catchError(err => of(new Student()))
    );
  }

  deleteStudent(id: string): Observable<Student> {
    const url = `${this.studentURL}/${id}`;
    return this.http.delete<Student>(url, httpOptions).pipe(
      tap(st => st),
      catchError(err => of(null)
    ))
  }

  searchStudent(name: string): Observable<Student[]> {
    if(!name === null){
      return  this.getStudents();
    }
    return this.http.get<Student[]>(`${this.studentURL}?Name_like=${name}`).pipe(
      tap(student => student),
      catchError(err => of(null))
    )
  }

  constructor(
    private http: HttpClient
  ) { }
}
