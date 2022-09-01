//Formulario
let ingreseNombre = prompt('Ingrese su nombre');
let ingreseApellido = prompt('Ingrese su apellido');
let mail = true
do {
    let ingreseCorreo = prompt('Ingrese su correo');
    let repetirCorreo = prompt('Ingrese nuevamente su correo');

    if(ingreseCorreo === repetirCorreo) {
        alert('El correo ha sido guardado con exito!');
        mail = false;
    } else{
        alert('Los correos no coinciden, intente de nuevo');
    }
    
} while (mail);