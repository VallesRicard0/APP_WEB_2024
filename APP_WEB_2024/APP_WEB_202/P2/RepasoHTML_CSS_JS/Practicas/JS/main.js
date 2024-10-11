//.Esto es un comentaro de una linea

/*
Este es un comentario
de varias lineas
*/

//alerta
//alert("Hola que tal soy un alerta")

//Variables
var nombre = "Valles Lugo Ricardo Manuel";
let nombre = "Rodolfo el reno";

//Mostrar en pantalla
let edad=20;
let estatura=1.80;
let logico=true;

//Comando en consola
console.log("Hola estoy en la consola");
console.log("Hola tengo" +edad+ "anos");

//Mostrar en pantalla el mismo mensaje
document.write("Hola estoy en la pantalla <br>");
document.write("<h2>Hola tengo" +edad+ "anos </h2>");

//Mostrar en pantalla getElementById
let datos=document.getElementById("Informacion");
datos.innerHTML="Hola este es el contenido de innerHTML";
datos.innerHTML="<hr><h3>Hola soy otro contenido de innerHTML</h3>";
datos.innerHTML="<hr><h3>Mido: " +estatura+ "metros </h3>";
datos.innerHTML=`
    <br>
    <hr>
    <h1>
        Hola soy contenido de innerHTML mi nombre es: ${nombre} 
        <br> y mi estatura es ${estatura} metros
    </h1>
    `;

 //Condicionales
    if (edad=18)
        datos.innerHTML+=`<hr> soy mayor de edad </hr>`;
    else
        datos.innerHTML+=`<hr> Soy menor de edad </hr>`;

for(let i=1;i<=20;i++)
    {
        datos.innerHTML+= `<hr><h3> El numero es ${i}</h3>`;
        i++;
    }

let i=1;
do
{
    datos.innerHTML+=`<hr><h3> El num es ${i}</h3>`
    i++;
}
while(i<=5)


//Funciones
//1- Funciones que no reciben parametros y no regresa valor
function suma1()
{
    let n1=2;
    let n2=3;
    suma1=n1+n2;
    datos.innerHTML+=`<hr><h3> El resultado es; ${suma1} </h3>`;
}

suma2();

//2- Funciones que no reciben parametros y regresa valor
function suma2()
{
    let n1=2;
    let n2=3;
    let suma=n1+n2;
    return suma;
}
 let sum=suma2();
 datos.innerHTML+=`<hr><h3> El resultado es; ${sum} </h3>`;

//3- Funciones que reciben parametros y no regresa valor
function suma3(n1,n2)
{
    let n1=numero2;
    let n2=numero1;
    let sumas=n1+n2;
    datos.innerHTML+=`<hr><h3> El resultado es; ${sumas} </h3>`;


}

//4- Funcion que no recibe parametros y regresa valor

function suma4(numero1,numero2)
{
    let n1=numero1;
    let n2=numero2;
    let suma=n1+n2
}



//Arreglos
let animales=[];
animales[0]="Perros";
animales[1]="Gato";
animales[2]="Ave";

let animale2=["Tigre","Leon","Elefante"]

for(let i=0;i<animales.length;i++)
{
    datos.innerHTML`<hr><h1> El animal es: ${animales[i]}</h1>`

}
 

animale2.forEach(element => {
    datos.innerHTML+=`<hr><h1> El animal es; ${element}</h1>`
    
});