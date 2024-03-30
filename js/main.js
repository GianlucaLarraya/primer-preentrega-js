let texto_bienvenida = "Bienvenido al Software de admision de Samuray Jiu Jitsu!\nPulse 1 para registrar un alumno\nPulse 0 para salir"
let opcion = parseInt(prompt(`${texto_bienvenida}`))

function registrarAlumno(){

    let nombre = ""
    let apellido = ""

    do {
         nombre = prompt("Ingrese el nombre: ")
        if (nombre.trim() === "" ) {
            alert("Ingrese un nombre valido!")
        }
    } while (nombre.trim() === "");

    do {
        apellido = prompt("Ingrese el apellido: ")
       if (apellido.trim() === "" ) {
           alert("Ingrese un apellido valido!")
       }
   } while (apellido.trim() === "")

    let edad = parseInt(prompt("Ingrese la edad"))

    if ( edad < 13) {
        alert("No admitimos alumnos de esas edad. Lo lamentamos ")
        
    } 

    else if ( edad >= 13 && edad < 18 ) {
        alert(`Alumno registrado parcialmente, necesita autorizacion de sus padres\n\nNombre:${nombre}\nApellido:${apellido}\nEdad:${edad}`)
    }
    else {
        alert(`Alumno ingresado correctamente\n\nNombre:${nombre}\nApellido:${apellido}\nEdad:${edad}`)
    }

}

function despedirUsuario(){
    alert("Muchas gracias por usar el programa.\nPrograma finalizado.")
}

while ( opcion != 0) {

    switch(opcion) {

        case 1: 
        registrarAlumno();
        break;

        default:
        alert("Opcion invalida")
        break;


    }

    opcion = parseInt(prompt(`${texto_bienvenida}`))

}

despedirUsuario()

