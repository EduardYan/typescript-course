var computers = [
    "Dell",
    "Hp",
    "Lenovo",
    "Toshiba",
    "Acer",
    "Asus",
    "Samsung",
    "Apple",
];
var newComputers = computers.map(function (computer) { return ({
    name: computer,
    price: "$5000"
}); });
console.log(newComputers);
