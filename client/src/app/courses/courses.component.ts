import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../core/api.service';
import { Course, Lecturer } from '../shared/types';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses!: Array<Course>;
  lecturers!: Array<Lecturer>;
  clicked = true;
  courseCode?: string;
  openCourse?: number;
  btn?: Element;
  filter?: string;
  filterCategory!: string | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.apiService.getCoursesList().subscribe({
      next: (data: Array<Course>) => {
        this.courses = data;
      },
      error: (err) => console.error(err),
      // complete: () => console.log(`complete`)
    });
  }
}
