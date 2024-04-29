export default function getListStudentIds(StudentList) {
  if (!Array.isArray(StudentList)) {
    return [];
  }
  return StudentList.map((obj) => obj.id);
}
