import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileCardComponent } from './profile-card/profile-card.component';
import { LecturersComponent } from './lecturers/lecturers.component';

@NgModule({
  declarations: [ProfileCardComponent, LecturersComponent],
  imports: [CommonModule],
  exports: [LecturersComponent, ProfileCardComponent],
})
export class LecturersModule {}
