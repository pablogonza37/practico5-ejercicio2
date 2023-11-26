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
      return `La persona de nombre "${this.nombre}" pertenece a la Silent Generation y su rasgo caracteristico es la "Austeridad".`;
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      return `La persona de nombre "${this.nombre}" pertenece a la generacion Baby Boom y su rasgo caracteristico es la "Ambicion".`;
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      return `La persona de nombre "${this.nombre}" pertenece a la generacion X y su rasgo caracteristico es la "Obsesion por el exito".`;
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      return `La persona de nombre "${this.nombre}" pertenece a la generacion Y(Millennials) y su rasgo caracteristico es la "Frustracion".`;
    } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      return`La persona de nombre "${this.nombre}" pertenece a la generacion Z y su rasgo caracteristico es la "Irreverencia".`;
    } else {
      return `No tiene definida una generacion`;
    }
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }

  mostrarDatos() {
    return `Nombre: ${this.nombre}\nEdad: ${this.edad} años\nDNI: ${this.dni}\nSexo: ${this.sexo}\nPeso: ${this.peso} kg\nAltura: ${this.altura} cm\nAño de Nacimiento: ${this.anioNacimiento}`;
  }
}

function crearPersona() {
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const dni = document.getElementById("dni").value;
  const sexo = document.getElementById("opciones").value;
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
  validacion();
  return persona;
}

function mostrarGeneracion() {
  if (validacion()) {
    alert(crearPersona().mostrarGeneracion());
  } else {
    alert("Primero crea una persona.");
  }
}

function esMayorDeEdad() {
  if (validacion()) {
    const mensaje = crearPersona().esMayorDeEdad()
      ? "Es mayor de edad."
      : "No es mayor de edad.";
    alert(mensaje);
  } else {
    alert("Primero crea una persona.");
  }
}

function mostrarDatos() {
  if (validacion()) {
    alert(crearPersona().mostrarDatos());
  } else {
    alert("Primero crea una persona.");
  }
}

function validacion() {
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const dni = document.getElementById("dni").value;
  const sexo = document.getElementById("opciones").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseInt(document.getElementById("altura").value);
  const anioNacimiento = parseInt(
    document.getElementById("anioNacimiento").value
  );

  if (
    nombre === "" ||
    edad === NaN ||
    dni === NaN ||
    sexo === "Selecione una opcion" ||
    peso === NaN ||
    altura === NaN ||
    anioNacimiento === NaN
  ) {
    alert("Por favor, complete todos los campos.");
    return false;
  }
  const letras = /^[A-Za-z]+$/;
  if (!nombre.match(letras)) {
    alert("El nombre solo debe contener letras.");
    return false;
  }
  if (edad < 0 || edad > 120) {
    alert("Ingrese un rango de edad valido");
    return false;
  }

  if (dni.length !== 7 && dni.length !== 8) {
    alert("El número de DNI debe tener 7 u 8 dígitos.");
    return false;
  }
  if (peso < 30 || peso > 300) {
    alert("El peso debe estar entre 3 y 300 kg.");
    return false;
  }

  if (altura < 100 || altura > 250) {
    alert("La altura debe estar entre 100 y 250 cm.");
    return false;
  }

  let anioActual = new Date().getFullYear();

  if (anioNacimiento < 1900 || anioNacimiento > anioActual) {
    alert("El año de nacimiento debe estar entre 1900 y " + anioActual);
    return false;
  }
  if (sexo === "selecione una opcion") {
    alert("Selecione una opcion en el campo sexo");
    return false;
  }

  return true;
}
