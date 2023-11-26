class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  mostrarGeneracion() {
    if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      alert(
        `La persona de Nombre ${this.nombre} pertenece a la Silent Generation y su rasgo caracteristico es la "Austeridad".`
      );
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      alert(
        `La persona de Nombre ${this.nombre} pertenece a la generacion Baby Boom y su rasgo caracteristico es la "Ambicion".`
      );
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      alert(
        `La persona de Nombre ${this.nombre} pertenece a la generacion X y su rasgo caracteristico es la "Obsesion por el exito".`
      );
    } else if (this.anioNacimiento >= 1981 && this._anioNacimiento <= 1993) {
      alert(
        `La persona de Nombre ${this.nombre} pertenece a la generacion Y(Millennials) y su rasgo caracteristico es la "Frustracion".`
      );
    } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      alert(
        `La persona de Nombre ${this.nombre} pertenece a la generacion Z y su rasgo caracteristico es la "Irreverencia".`
      );
    }
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }

  mostrarDatos() {
    return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.dni}\nSexo: ${this.sexo}\nPeso: ${this.peso} kg\nAltura: ${this.altura} cm\nAño de Nacimiento: ${this.anioNacimiento}`;
  }
}

function crearPersona() {
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const dni = document.getElementById("dni").value;
  const sexo = document.getElementById("sexo").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseInt(document.getElementById("altura").value);
  const anioNacimiento = parseInt(
    document.getElementById("anioNacimiento").value
  );

  const persona = new Persona(
    nombre,
    edad,
    dni,
    sexo,
    peso,
    altura,
    anioNacimiento
  );
  console.log(persona);
  return persona;
  
}

function mostrarGeneracion() {
    alert(crearPersona().mostrarGeneracion());
}

function esMayorDeEdad() {
  if (crearPersona()) {
    const mensaje = crearPersona().esMayorDeEdad()
      ? "Es mayor de edad."
      : "No es mayor de edad.";
    alert(mensaje);
  } else {
    alert("Primero crea una persona.");
  }
}

function mostrarDatos() {
  if (crearPersona()) {
    alert(crearPersona().mostrarDatos());
  } else {
    alert("Primero crea una persona.");
  }
}
