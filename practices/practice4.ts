type Person = {
  userName: string;
  age: number;
  location: {
    lat: string;
    len: string;
  };
  score: number;
  favoriteFood?: string;
};

const persons: Person[] = [];

const addPerson = (person: Person): void => {
  persons.push(person);
};

addPerson({
  userName: "Daniel",
  age: 25,
  location: { lat: "1245.1", len: "8931.5" },
  score: 44,
});
addPerson({
  userName: "Eduardo",
  age: 30,
  location: { lat: "78291.2", len: "999123.2" },
  score: 100,
});
addPerson({
  userName: "Carlos",
  age: 70,
  location: { lat: "2341.6", len: "4446.2" },
  score: 55,
});
addPerson({
  userName: "Gerardo",
  age: 10,
  location: { lat: "882.1", len: "7823142.6" },
  score: 80,
});
addPerson({
  userName: "Pablo",
  age: 17,
  location: { lat: "4518292.6", len: "928193.6" },
  score: 90,
});