import {UserRole} from "../enums/user-role.enum";

export interface User {
  id?: number;
  first_name: string;
  last_name: string;
  age: number;
  role: UserRole;
  email: string;
  education?: Education[];
  info?: string;
}

export interface Education {
  university: string;
  entry_year: string;
  graduation_year: string;
  specialization: string;
}

