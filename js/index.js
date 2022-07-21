// let dineroPedro = prompt("Cuanto dinero tienes Pedro?");
// let dineroRoberto = prompt("Cuanto dinero tienes Roberto?");
let dineroCofla = prompt("Cuanto dinero tienes Roxette?");
let frutas = ["banana","manzana","pera"];

dineroCofla = parseFloat(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Roxette, comprate el helado de agua")
    alert("y te sobran " + (dineroCofla - 0.6) + "USD");
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Roxette, comprate el helado de crema");
    alert(`y te sobran ${dineroCofla - 1} USD`);
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Roxette, comprate un heladix");
    alert("y te sobran " + (dineroCofla - 1.6) + "USD");
}
else if (dineroCofla >= 1.7 && dineroCofla < 2) {
    alert("Roxette, comprate un helardo")
    alert("y te sobran " + (dineroCofla - 1.7) + "USD");

}
else if (dineroCofla >= 2 && dineroCofla < 2.9) {
    alert("Roxette, comprate un helado con confites o un pote de 1/4kg");
    alert("y te sobran " + (dineroCofla - 2) + "USD");
}
else if (dineroCofla >= 3) {
    alert("Roxette, comprate un helado de 1/2kg")
    alert("y te sobran " + (dineroCofla - 3) + "USD");
}
else {
    alert("No tenes dinero suficiente para comprar ningun helado :(")
}


//Pedro

// if (dineroPedro >= 0.6 && dineroPedro < 1) {
//     alert("Pedro, comprate el helado de agua")
// }
// else if (dineroPedro >= 1 && dineroPedro < 1.6) {
//     alert("Pedro, comprate el helado de crema")
// }
// else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
//     alert("Pedro, comprate un heladix")
// }
// else if (dineroPedro >= 1.7 && dineroPedro < 2) {
//     alert("Pedro, comprate un helardo")
// }
// else if (dineroPedro >= 2 && dineroPedro < 2.9) {
//     alert("Pedro, comprate un helado con confites o un pote de 1/4kg")
// }
// else if (dineroPedro >= 3) {
//     alert("Pedro, comprate un helado con confites o un pote de 1/4kg")
// }
// else {
//     alert("Pedro, no te alcanza para ningun helado")
// }

// //Roberto

// if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
//     alert("Roberto, comprate el helado de agua")
// }
// else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
//     alert("Roberto, comprate el helado de crema")
// }
// else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
//     alert("Roberto, comprate un heladix")
// }
// else if (dineroRoberto >= 1.7 && dineroRoberto < 2) {
//     alert("Roberto, comprate un helardo")
// }
// else if (dineroRoberto >= 2 && dineroRoberto < 2.9) {
//     alert("Roberto, comprate un helado con confites o un pote de 1/4kg")
// }
// else if (dineroRoberto >= 3) {
//     alert("Roberto, comprate un helado con confites o un pote de 1/4kg")
// }
// else {
//     alert("Roberto, no te alcanza para ningun helado")
// }