const students = [
    {
      id: 1,
      nombre: "Jonathan",
      apellido: "Clavijo",
      edad: 21,
      direccion: "Carrera 18 no. 1f-21",
      telefono: "3144416089",
      identificacion: '1234566',
      materias: [
        {
          nombre: "Matematicas",
          calificacion: 5.0,
          id: 1
        },
        {
          nombre: "Ciencias",
          calificacion: 2.3,
          id: 2    
        },
      ]
    },
    {
      id: 2,
      nombre: "Felipe",
      apellido: "Rodríguez",
      edad: 10,
      direccion: "Calle 6 no. 1D Bis",
      identificacion: '12345667',
      telefono: "123456",
      materias: [
        {
          nombre: "Matematicas",
          calificacion: 3.0,
          id: 1
        },
        {
          nombre: "Música",
          calificacion: 3.0,
          id: 3
        },
        {
          nombre: "Ciencias",
          calificacion: 2.3,
          id: 2    
        },
      ]
    },
    {
      id: 3,
      nombre: "Andrea",
      apellido: "Martínez",
      edad: 16,
      direccion: "cra 124--5443",
      telefono: "310233404",
      identificacion: '12323566',
      materias: [
        {
          nombre: "Matematicas",
          calificacion: 5.0,
          id: 1
        },
        {
          nombre: "Música",
          calificacion: 3.7,
          id: 3
        },
        {
          nombre: "Ciencias",
          calificacion: 2.3,
          id: 2
        },
      ]
    }    
  ]

export default students;