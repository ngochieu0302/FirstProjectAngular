import { Component, OnInit } from '@angular/core';
import { Student } from 'src/model/student';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StudentService } from './../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  selected_sv: Student;
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.getStudentFromRouter();
  }

  getStudentFromRouter(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudentFromId(id).subscribe(student => this.selected_sv = student)
  }

  updateStudent(): void {
    this.studentService.updateStudent(this.selected_sv).subscribe(() => this.goBack())
  }

  goBack(): void {
    this.location.back();
  }
}
