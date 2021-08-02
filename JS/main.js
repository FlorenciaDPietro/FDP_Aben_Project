// let entrada = parseInt(prompt ("Ingrese año de nacimiento"));
// let edad = 2021 - entrada;

// if (edad < 18) {
//    alert("Por Ley 24.788 se prohibe la venta de bebidad alcohólicas a menores de 18 años.");
// } else if (edad >= 18) {
//    alert("Bienvenido a nuestro amplio catálogo de Vinos de Autor");
// } else {
//    alert("Error, por favor reingresá tu año de nacimiento");
// }

let entrada = prompt("Por favor elegí el Tipo de Vino (Uva) que más te guste (Blanco, Tinto, Rosado, N/A");

while (entrada != "N/A") {
   switch (entrada) {
       case "Blanco":
            alert("Tu Vino preferido es el Vino Blanco, vamos a orderar nuestra lista según esta preferencia");
            break;
        case "Tinto":
            alert("Tu Vino preferido es el Vino Tinto, vamos a orderar nuestra lista según esta preferencia");
            break;
        case "Rosado":
            alert("Tu Vino preferido es el Vino Rosado, vamos a orderar nuestra lista según esta preferencia");
            break;
       default:
           alert("No se encontró esta opción, verifica que tu preferencia esté entre las opciones")
           break;
   }
   entrada = prompt("Por favor Ingrese el tipo de Vino (Uva) que prefiere (Blanco, Tinto, Rosado, N/A");
}