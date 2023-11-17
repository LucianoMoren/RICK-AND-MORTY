export default function validation(input) {
  const regexEmail = /\S+@\S+.\S+/;
  const regexPassword = new RegExp("[0-9]");
  const errors = {};
  // //!Validacion de EMAIL
  if (!input.email.trim().length) {
    errors.email = "Ingrese su email";
  } else if (!regexEmail.test(input.email)) {
    errors.email = "Debe ingresar un email válido";
  } else if (input.email.length > 35) {
    errors.email = "Tiene que ser menor a 35 caracteres";
  }
  // //!Validacion de PASSWORD
  if (!input.password.length) {
    errors.password = "Ingrese su password";
  } else {
    if (!regexPassword.test(input.password)) {
      errors.password = "Debe tener al menos un número";
    }
    if (input.password.length < 6) {
      errors.password = "Al menos 6 caracteres";
    }
    if (input.password.length > 10) {
      errors.password = "Máximo de 10 caracteres";
    }
  }

  return errors;
}

// //!Validacion de EMAIL
// if (!input.email.length) errors.email = "Debes ingresar un email";
// if (input.email.length > 35)
//   errors.email = "El email debe tener menos de 35 caracteres";
// else {
//   if (!emailRegExp.test(input.email))
//     errors.email = "Debes ingresar un email correcto";
// }

// //!Validacion de PASSWORD
// if (input.password.length < 6 || input.password.length > 10)
//   errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
// else {
//   if (!regexNum.test(input.password))
//     errors.password = "Debes ingresar al menos un número";
// }
// return errors;
