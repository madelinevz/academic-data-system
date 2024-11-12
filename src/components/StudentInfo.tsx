import { useState } from "react";
import { Enrollment, Student } from "../types";
import { TestEnrollments, TestStudents } from "../testData";

const StudentInfo = () => {
  const [student, setStudent] = useState<Student>(
    // TODO: Get student's info from the databse
    TestStudents[0]
  );

  const [currentEnrollments, setCurrentEnrollments] = useState<Enrollment[]>(
    // TODO: Get student's past enrollments from the database
    [TestEnrollments[0]]
  );

  const [pastEnrollments, setPastEnrollments] = useState<Enrollment[]>(
    // TODO: Get student's current enrollments from the database
    TestEnrollments.slice(1)
  );

  return (
    <>
      {/* Header */}
      <div className="display-6">Student Summary</div>
      <hr />

      {/* Student Info */}
      <div className="p-3 text-dark">
        <div>
          <b>Name: </b>
          {student.firstName} {student.lastName}
        </div>
        <div>
          <b>Student ID: </b>
          {student.id}
        </div>
        <div>
          <b>Major: </b>
          {student.major}
        </div>
        <div>
          <b>GPA: </b>
          {student.gpa}
        </div>
      </div>

      {/* Current enrollemnts table*/}
      <div className="p-3">
        <div className="h5 text-body-secondary">Current enrollments</div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Course Prefix</th>
              <th scope="col">Course Number</th>
              <th scope="col">Semester</th>
              <th scope="col">Credits</th>
              <th scope="col">Grade</th>
            </tr>
          </thead>
          <tbody>
            {currentEnrollments?.map((enrollment, index) => (
              <tr key={index}>
                <td>{enrollment.course.prefix}</td>
                <td>{enrollment.course.number}</td>
                <td>
                  {enrollment.course.semester}
                  {enrollment.course.year}
                </td>
                <td>{enrollment.course.credits}</td>
                <td>{enrollment.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Past enrollments table */}
      <div className="p-3">
        <div className="h5 text-body-secondary">Past enrollments</div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Course Prefix</th>
              <th scope="col">Course Number</th>
              <th scope="col">Semester</th>
              <th scope="col">Credits</th>
              <th scope="col">Grade</th>
            </tr>
          </thead>
          <tbody>
            {pastEnrollments?.map((enrollment, index) => (
              <tr key={index}>
                <td>{enrollment.course.prefix}</td>
                <td>{enrollment.course.number}</td>
                <td>
                  {enrollment.course.semester}
                  {enrollment.course.year}
                </td>
                <td>{enrollment.course.credits}</td>
                <td>{enrollment.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentInfo;
