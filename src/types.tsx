export interface Course {
  id: number;
  prefix: string;
  number: number;
  semester: string;
  year: number;
  credits: number;
  instructorId: string;
}

export interface Enrollment {
  course: Course;
  grade: string;
}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  major: string;
  gpa: number;
  totalCredits: number;
}

export type Role = "staff" | "advisor" | "student" | "instructor";

export const emptyCourse: Course = {
  id: 0,
  prefix: "",
  number: 0,
  semester: "",
  year: 2000,
  credits: 0,
  instructorId: "",
};

export const emptyEnrollment: Enrollment = {
  course: emptyCourse,
  grade: "A",
};
