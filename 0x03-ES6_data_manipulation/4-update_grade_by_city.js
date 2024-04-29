/* eslint-disable max-len */
export default function updateStudentGradeByCity(StudentList, city, newGrades) {
  return StudentList.filter((obj) => obj.location === city).map((obj) => {
    const ObjEdit = obj;
    let grade = newGrades.filter((GradeObj) => GradeObj.studentId === obj.id);
    if (grade.length === 0) {
      grade = 'N/A';
    } else {
      grade = grade[0].grade;
    }
    ObjEdit.grade = grade;
    return ObjEdit;
  });
}
