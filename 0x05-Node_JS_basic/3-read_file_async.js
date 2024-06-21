const fs = require('fs');

// Asynchronous function to count and display information about students
async function countStudents(path) {
  let data;

  try {
    // Attempt to read the file content asynchronously
    data = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    // Handle errors during file reading by throwing an error
    throw new Error('Cannot load the database');
  }

  // Process the file data into an array of student objects
  const students = data.split('\n')
    .map((student) => student.split(','))
    .filter((student) => student.length === 4 && student[0] !== 'firstname')
    .map((student) => ({
      firstName: student[0],
      lastName: student[1],
      age: student[2],
      field: student[3],
    }));

  // Extract the list of students in the CS field
  const cs_Students = students
    .filter((student) => student.field === 'CS')
    .map((student) => student.firstName);

  // Extract the list of students in the SWE field
  const swe_Students = students
    .filter((student) => student.field === 'SWE')
    .map((student) => student.firstName);

  // Display the total number of students and the counts for each field
  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${cs_Students.length}. List: ${cs_Students.join(', ')}`);
  console.log(`Number of students in SWE: ${swe_Students.length}. List: ${swe_Students.join(', ')}`);

  // Return the categorized student data
  return { students, csStudents: cs_Students, sweStudents: swe_Students };
}

module.exports = countStudents;
