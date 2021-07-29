let entrada = parseInt(prompt ("Ingrese año de nacimiento"));
let edad = 2021 - entrada;

if (edad < 18) {
    alert("Por Ley 24.788 se prohibe la venta de bebidad alcohólicas a menores de 18 años.");
} else if (edad >= 18) {
    alert("Bienvenido a nuestro amplio catálogo de Vinos de Autor");
} else {
    alert("Error, por favor reingresá tu año de nacimiento");
}