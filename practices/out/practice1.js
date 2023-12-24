// type Country = {
//   name: string,
//   poblation: number,
//   tourist: number,
// }
// const countries: Country[] = [
//   { name: "Canada", poblation: 2500, tourist: 30 },
//   { name: "El Salvador", poblation: 1000, tourist: 40 },
//   { name: "Haiti", poblation: 700, tourist: 45 },
//   { name: "Russia", poblation: 5000, tourist: 70 },
//   { name: "Thailand", poblation: 3000, tourist: 84 },
//   { name: "United States", poblation: 4000, tourist: 60 },
// ]
// function showCountry(country: Country): void {
//   console.log(
//     `Country name: ${country.name}`,
//     `Poblation: ${country.poblation}`,
//     `Tourist: ${country.tourist}`
//   )
// }
// countries.forEach(country => {
//   showCountry(country)
// })
// const personsNames = ['Daniel', 'Marcos', 'Adrian', 'Anderson', 'Josue', 'Maria', 'Karla']
// const personsLastNames = ['Yanes', 'Fernandez', 'Guillermo', 'Franco', 'Castro', 'Salome', 'Rodriguez']
// const unions = personsNames.map((name, index) => {
//   return `${name} ${personsLastNames[index]}`
// })
// console.log(unions)
var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
// const newMonths = months.concat(['Unknow', 'Unknow2'])
// const newMonths = months.indexOf('May')
// const newMonths = months.indexOf('May', 5)
// const newMonths = months.join("Month ")
// const result = months.every(month => typeof month === 'boolean')
// const result = months.every(month => typeof month === 'string')
var result = months.some(function (month) { return month.toUpperCase() === 'FEBRUARY'; });
console.log(result);
