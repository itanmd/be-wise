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
  category_id: number;
  first_name: string;
  last_name: string;
  lecturer_id: number;
}
