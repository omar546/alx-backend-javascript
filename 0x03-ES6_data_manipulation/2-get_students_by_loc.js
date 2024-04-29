export default function getStudentsByLocation(StudentList, City) {
  return StudentList.filter((obj) => obj.location === City);
}
