/*eslint-disable */
import getListStudents from "./0-get_list_students.js";

export default function updateStudentGradeByCity (arr, city, newGrades) {
    if (!Array.isArray(students)) {
        return [];
    }
    if (!Array.isArray(newGrades)) {
        return [];
    }
    
    const stCity = students.filter((student) => student.location === city);
    
    const studentsGraded = stCity.map((student) => {
    const gradeFilter = newGrades.filter(
      (newGrade) => newGrade.studentId === student.id,
    );
    
    let grade;
    
    if (gradeFilter[0]) {
        grade = gradeFilter[0].grade;
    } else {
      grade = 'N/A';
    }
    
    return {
      ...student,
      grade,
    };
    });
    
    return studentsGraded;    
}