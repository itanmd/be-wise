// מייצג מבנה נתונים של מרצה
export interface Lecturer {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  started_teaching: Date;
  image: string;
}

export interface Course {
  code: string;
  name: string;
  description: string;
  num_of_classes: number;
  start_date: Date;
  price: number;
  category: number;
  first_name: string;
  last_name: string;
  lecturer_id: number;
}

export interface FilePath {
  name: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export type sortColumn = 'name' | 'price';

export type categoriesValue = Category['id'] | 'All';

export interface CourseSort {
  column: sortColumn;
  dirAsc: boolean;
}
