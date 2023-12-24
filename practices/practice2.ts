const computers = [
  "Dell",
  "Hp",
  "Lenovo",
  "Toshiba",
  "Acer",
  "Asus",
  "Samsung",
  "Apple",
]

const newComputers = computers.map(computer => ({
  name: computer,
  price: "$5000"
}))

console.log(newComputers)