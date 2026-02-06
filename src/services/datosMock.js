
//PARA COMPROBAR QUE FUNCIONAN CON UN HOST LOCAL

export const alumnosMock = [
  {
    id: 1,
    nombre: "Alberto",
    apellido1: "del Toro",
    apellido2: "Rodriguez",
    edad: 23,
    sexo: "M",
    curso: 2,
    notas: [
      { codigo: "DWEC", nombre: "Cliente", nota: 7 },
      { codigo: "DWES", nombre: "Servidor", nota: 8 },
      { codigo: "DIW", nombre: "Interfaces", nota: 6 }
    ]
  },
  {
    id: 2,
    nombre: "María",
    apellido1: "Gómez",
    apellido2: "Pérez",
    edad: 22,
    sexo: "F",
    curso: 1,
    notas: [
      { codigo: "PROG", nombre: "Programación", nota: 9 },
      { codigo: "BBDD", nombre: "Bases de Datos", nota: 8 }
    ]
  }
];
