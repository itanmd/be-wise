import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../../core/api.service';
import { Lecturer } from '../../shared/types';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.scss'],
})
export class LecturersComponent implements OnInit {
  lecturers!: Array<Lecturer>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getLecturers();
  }

  getLecturers() {
    this.apiService.getLecturersList().subscribe({
      next: (data: Array<Lecturer>) => {
        this.lecturers = data;
      },
      error: (err) => console.error(err),
      // complete: () => console.log(`complete`)
    });
  }
}
