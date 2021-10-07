const person = {
  name: 'Alejo',
  last_name: 'Cedeño',
  full_name: function() {
    return `${this.name} ${this.last_name}`
  }
};

console.log(person.full_name());
