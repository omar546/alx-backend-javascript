import readDatabase from '../utils';

const VALID_MAJORS = ['CS', 'SWE'];

class StudentsController {
  // Handle the request to get all students
  static getAllStudents(request, response) {
    const data_src = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(data_src)
      .then((studentGroups) => {
        const report_pecies = ['This is the list of our students'];


        // Sort fields alphabetically and generate the response
        const alphaOrder = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };



        for (const [field, group] of Object.entries(studentGroups).sort(alphaOrder)) {
          report_pecies.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        response.status(200).send(report_pecies.join('\n'));
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }


  // Handle the request to get students by major
  static getAllStudentsByMajor(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    // Validate the major parameter
    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }


    readDatabase(dataPath)
      .then((studentGroups) => {
        let res_text = '';

        // Check if the major exists in student groups and generate the response
        if (Object.keys(studentGroups).includes(major)) {
          const group = studentGroups[major];

          res_text = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }
        response.status(200).send(res_text);
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
