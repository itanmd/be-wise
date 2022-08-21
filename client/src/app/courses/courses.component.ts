import { Component, NgModule, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../core/api.service';
import {
  Course,
  Lecturer,
  FilePath,
  CourseSort,
  sortColumn,
  Category,
  categoriesValue,
} from '../shared/types';

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
  tableSort!: CourseSort;
  categories!: Array<Category>;
  selectedCategory: categoriesValue = 'All';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCourses();
    this.getCategories();

    this.tableSort = {
      column: 'name',
      dirAsc: true,
    };
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

  getCategories() {
    this.apiService.getCategories().subscribe({
      next: (data: Array<Category>) => {
        this.categories = data;
      },
      error: (err) => console.error(err),
    });
  }

  getCoursesByCategory() {
    if (this.selectedCategory === 'All') {
      this.getCourses();
      return;
    }
    this.apiService
      .getFilteredCourses('category', this.selectedCategory)
      .subscribe({
        next: (data: Array<Course>) => {
          this.courses = data;
        },
        error: (err) => console.error(err),
      });
  }

  exportCoursesData() {
    this.apiService.exportCourses().subscribe({
      next: (data: FilePath) => {
        window.open(`${environment.serverUrl}/${data.name}`);
      },
      error: (err) => console.error(err),
    });
  }

  sortCourses(column: sortColumn) {
    if (this.tableSort.column === column) {
      this.tableSort.dirAsc = !this.tableSort.dirAsc;
    } else {
      this.tableSort.column = column;
      this.tableSort.dirAsc = true;
    }

    const direction = this.tableSort.dirAsc ? 'ASC' : 'DESC';

    this.apiService.getSortedCourses(column, direction).subscribe({
      next: (data: Array<Course>) => {
        this.courses = data;
      },
      error: (err) => console.error(err),
    });
  }

  displaySort(column: sortColumn): string {
    if (this.tableSort.column === column) {
      return this.tableSort.dirAsc ? 'bi-chevron-up' : 'bi-chevron-down';
    }
    return 'bi-chevron-expand';
  }
}
