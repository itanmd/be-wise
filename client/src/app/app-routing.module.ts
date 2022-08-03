import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LecturersComponent } from './lecturers/lecturers/lecturers.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  { path: 'lecturers-component', component: LecturersComponent },
  { path: 'courses-component', component: CoursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
