import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course, Lecturer } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private token = '';

  setToken(value: string) {
    this.token = value;
  }
  constructor(private http: HttpClient) {}

  //מתודה שמוציאה קריאה לשרת ומבקשת את רשימת המרצים
  getLecturersList(): Observable<Array<Lecturer>> {
    return this.GET<Array<Lecturer>>(`lecturers`);
  }

  getCoursesList(): Observable<Array<Course>> {
    return this.GET<Array<Course>>(`Courses`);
  }

  GET<T>(url: string): Observable<T> {
    return this.http.get<T>(`${environment.serverUrl}/${url}`, {
      headers: { 'x-auth-token': this.token },
    });
  }
}
