function findTheOldest(people) {
    let arrayEdades = []
    for (const person of people) {
        arrayEdades.push(person.yearOfDeath - person.yearOfBirth);
    }
    let edadMaxima = Math.max(...arrayEdades);
    let indiceMaximo = arrayEdades.indexOf(edadMaxima);
    let nombreMasViejo = people[indiceMaximo].name;
    console.log(`La persona con más edad es ${nombreMasViejo}`);
}

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
        name: "Monica",
        yearOfBirth: 1944,
        yearOfDeath: 2011,
    },
    {
        name: "Ricardo",
        yearOfBirth: 1899,
        yearOfDeath: 1966,
    },
    {
        name: "Olga",
        yearOfBirth: 1900,
        yearOfDeath: 2022,
    }
]

findTheOldest(people);