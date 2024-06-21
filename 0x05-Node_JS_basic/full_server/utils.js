import fs from 'fs';

const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const lines = data.toString('utf-8').trim().split('\n');
        const students_g = {};
        const fields = lines[0].split(',');
        const some_names = fields.slice(0, fields.length - 1);

        for (const line of lines.slice(1)) {
          const s_record = line.split(',');
          const some_values = s_record.slice(0, s_record.length - 1);
          const field = s_record[s_record.length - 1];
          if (!Object.keys(students_g).includes(field)) {
            students_g[field] = [];
          }
          const s_enteries = some_names
            .map((propName, idx) => [propName, some_values[idx]]);
            students_g[field].push(Object.fromEntries(s_enteries));
        }

        resolve(students_g);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;
