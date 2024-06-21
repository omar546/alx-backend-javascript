const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;

// Function to count students from a file
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }

  fs.readFile(dataPath, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }

    const report_pecies = [];
    const lines = data.toString('utf-8').trim().split('\n');
    const students_g = {};
    const field_Ns = lines[0].split(',');
    const some_names = field_Ns.slice(0, -1);

    // Parse student records into groups
    for (const line of lines.slice(1)) {
      const s_record = line.split(',');
      const some_values = s_record.slice(0, -1);
      const field = s_record[s_record.length - 1];
      if (!students_g[field]) {
        students_g[field] = [];
      }
      const s_enteries = some_names.map((propName, idx) => [
        propName,
        some_values[idx],
      ]);
      students_g[field].push(Object.fromEntries(s_enteries));
    }

    const students_total = Object.values(students_g).reduce(
      (pre, cur) => pre + cur.length,
      0
    );
    report_pecies.push(`Number of students: ${students_total}`);

    // Create report parts for each field
    for (const [field, group] of Object.entries(students_g)) {
      report_pecies.push([
        `Number of students in ${field}: ${group.length}.`,
        'List:',
        group.map((student) => student.firstname).join(', '),
      ].join(' '));
    }

    resolve(report_pecies.join('\n'));
  });
});

// Define the root route
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

// Define the students route
app.get('/students', (_, res) => {
  const report_pecies = ['This is the list of our students'];

  countStudents(process.argv[2] || '')
    .then((report) => {
      report_pecies.push(report);
      const res_text = report_pecies.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', res_text.length);
      res.statusCode = 200;
      res.end(res_text);
    })
    .catch((err) => {
      report_pecies.push(err.message);
      const res_text = report_pecies.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', res_text.length);
      res.statusCode = 200;
      res.end(res_text);
    });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
