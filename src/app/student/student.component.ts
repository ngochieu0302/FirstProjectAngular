import { Component, OnInit } from '@angular/core';
// import { student_fake } from './fake_student';
import { Student } from 'src/model/student';
import { StudentService } from './../student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  student: Student[];
  
  getStudentFromService(): void{
    this.studentService.getStudents().subscribe(student => this.student = student);
  }

  deleteStudent(id: string): void {
    this.studentService.deleteStudent(id).subscribe(
      _ => {
        this.student = this.student.filter(eachStudent => eachStudent.id !== id)
      }
    );
  }

  searchStudent(name: string): void {
    this.studentService.searchStudent(name).subscribe(
      student => this.student = student
    );
  }

  ngOnInit(): void {
    this.getStudentFromService();
  }
}
