type User = {
  id?:number
  name:string
  cellphone:number
}


const getUser = (user: User) => {
  return {
    ...user,
    newName: user.name.toUpperCase()
  }
}

const user = getUser({id: 45, name: 'Pablo', cellphone: 89214432})
console.log(user)
