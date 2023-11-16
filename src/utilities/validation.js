export default function validation(input) {
  const emailRegExp = /\S+@\S+.\S+/;
  const regexNum = /\d+/;
  const errors = {};

  //!Validacion de EMAIL
  if (!input.email.length) errors.email = "Debes ingresar un email";
  if (input.email.length > 35)
    errors.email = "El email debe tener menos de 35 caracteres";
  else {
    if (!emailRegExp.test(input.email))
      errors.email = "Debes ingresar un email correcto";
  }

  //!Validacion de PASSWORD
  if (input.password.length < 6 || input.password.length > 10)
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  else {
    if (!regexNum.test(input.password))
      errors.password = "Debes ingresar al menos un número";
  }
  return errors;
}
