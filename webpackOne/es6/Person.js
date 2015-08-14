class Person {
  constructor(name) {
    this.name = name;
  }
  get() {
    return 'Im ' + this.name;
  }
}
export default Person;