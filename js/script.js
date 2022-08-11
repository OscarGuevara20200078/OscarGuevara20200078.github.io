
var tesis = 15, obras = 7, ciencias = 3, otro = 2;
var dias, user = null, tipolibro = null, textbook, textuser,deis,fecha = new Date();

alert("Bienvenido a la biblioteca Nashe");
do {
    user = prompt("Por favor digite una opción de acuerdo a lo que se dedica:\n 1. Estudiante\n 2. Profesor\n 3. Otro\n");
    if (user == null || isNaN(user)== true || (user != 1 && user !=2 && user !=3)) {
        alert("Error, debe ingresar un número válido (1-2-3)");
    }
} while (user == null || isNaN(user)== true || (user != 1 && user !=2 && user !=3));
do {
    tipolibro = prompt("Digite el tipo de libro que usted desea solicitar:\n 1. Ciencias Básicas y Tecnología\n 2. Tesis\n 3. Obras literarias \n 4. Otros\n");
    if (tipolibro == null || isNaN(tipolibro)== true || (tipolibro != 1 && tipolibro!=2 && tipolibro !=3 && tipolibro !=4)) {
        alert("Error, debe ingresar un tipo de libro válido y no vacío o caracter (1-2-3 4)");
    }
} while (tipolibro == null || isNaN(tipolibro)== true || (tipolibro != 1 && tipolibro!=2 && tipolibro !=3 && tipolibro !=4));

if (user == 1) {
    textuser = "Estudiante";
    switch (tipolibro) {
        case "1":
            deis = tesis;
        textbook = "Ciencias básicas y tecnología";
            break;
        case "2":
            deis = tesis;
        textbook = "Tesis";
            break;
        case "3":
            deis = obras;
        textbook = "Obras literarias";
            break; 
        case "4":
            deis = otro;
        textbook = "Otros";
            break;     
    }
}

if (user == 2) {
    textuser = "Profesor";
    switch (tipolibro) {
        case "1":
        ciencias = ciencias * 2;
        deis = ciencias;
        textbook = "Ciencias básicas y tecnología";
            break;
        case "2":
        tesis = tesis * 2;
        deis = tesis;
        textbook = "Tesis";
            break;
        case "3":
        obras = obras * 2;
        deis = obras;
        textbook = "Obras literarias";
            break; 
        case "4":
        otro = otro * 2;
        deis = otro;
        textbook = "Otros";
            break;     
    }
}
if (user == 3) {
    textuser = "Usuario";
    switch (tipolibro) {
        case "1":
            ciencias = 0;
            deis = ciencias;
        textbook = "Ciencias básicas y tecnología";
            break;
        case "2":
            tesis = 0;
            deis = tesis;
        textbook = "Tesis";
            break;
        case "3":
            obras = 0;
            deis = obras;
        textbook = "Obras literarias";
            break; 
        case "4":
            otro = 0;
            deis = otro;
        textbook = "Otros";
            break;     
    }
}



document.write("<table>");
 document.write("<thead><tr>");
document.write("<th scope='col'>Tipo de libro</th><th scope='col'>Tipo de usuario</th><th scope='col'>Fecha de devolución:</th></tr></thead><tbody>");
document.write("<tr><td> "+textbook+" </td><td> "+textuser+"</td><td> "+ (((fecha.getDate()+deis) + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear()))+"</td></tr>")



document.write("</tbody></table>");




if (totalv2 <=20 && totalv2 !=0){
    var descuento ,descuento2, totalv3;
    var mindesc1=80 , maxdesc1=100;
    descuento = Math.random( (maxdesc1 - mindesc1) + mindesc1).toFixed(2);
    alert(descuento);
    alert(descuento2=descuento*totalv2)
    alert(totalv3=totalv2-descuento2)
    
}



