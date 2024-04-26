export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /* set Name */
  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    this._name = value;
  }

  /* get Name */
  get name() {
    return this._name;
  }

  /* set Length */
  set length(value) {
    if (typeof value !== 'number') {
      throw new Error('TypeError: Length must be a number');
    }
    this._length = value;
  }

  /* get Length */
  get length() {
    return this._length;
  }

  /* set Students */
  set students(value) {
    if (!Array.isArray(value)) {
      throw new Error('TypeError: Students must be an array');
    }
    this._students = value;
  }

  /* get Students */
  get students() {
    return this._students;
  }
}
