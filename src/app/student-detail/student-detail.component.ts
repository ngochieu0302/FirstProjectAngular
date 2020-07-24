import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/model/student';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StudentService } from './../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
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

  goBack(): void {
    this.location.back();
  }
}
