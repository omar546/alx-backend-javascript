export default function getStudentIdsSum(StudentList) {
  return StudentList.reduce((prev, current) => prev + current.id, 0);
}
