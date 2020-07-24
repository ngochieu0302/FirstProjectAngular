import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { AddStudentComponent } from './add-student/add-student.component'
import { EditStudentComponent } from './edit-student/edit-student.component'
import { Student } from './../model/student';

const routes: Routes = [
  { path: '', component: StudentComponent},
  { path: 'student', component: StudentComponent },
  { path: 'student/student-detail/:id', component: StudentDetailComponent },
  { path: 'student/add_student', component: AddStudentComponent },
  { path: 'student/edit_student/:id', component: EditStudentComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [ RouterModule ]
})
export class AppRoutingModule { }
