//almacenamos la API en una variable para luego usar WEB SPEECH API
var SpeechRecognition = window.webkitSpeechRecognition;
//window.WebkitSpeechRecognition es la API de WEB SPEECH que se utiliza para reconocer los que decimos
//y convertirlo en texto

//creamos nuestro nuevo WEB SPEECH API
//para usarlo en nuestra aplicacion y lo almacenamos en una variable
var recognition = new SpeechRecognition;



//Definimos la funcion start cuando se presione el boton INICIAR
function start(){
    document.getElementById("textbox").innerHTML="";
    //para decirle que queremos que realice la accion de iniciar
    recognition.start();
}


//llamamos la funcion ONRESULT 
//esta funcion contendra todos los valores de la voz convertida en texto
//para obtener todos los textos convertidos, escribimos una funcion
recognition.onresult = function(event){
    //mostramos en la consola los eventos
    console.log(event);
    var content= event.results[0][0].transcript;
    console.log(content);













    ////////////////// C100
    ///////// PARTE 1
    //compararemos si el texto recibido es "toma mi selfie"
    //content: tiene todo el texto que se convierte desde nuestra voz
    if(content == "selfie"){
        //si esta condicion se cumple, en la consola nos mostrará el mensaje de que se esta tomando la selfie
        console.log("tomando selfie.....");
        //En este momento será cuando ejecutemos la función que abre la camara
        hablar();

    }



















    document.getElementById("textbox").innerHTML=content



    //////////C99
    //agregamos la funcion speak para que se escuche la voz de lo que se lee
    //hablar();
}


////////////////////
///////// C99
///////////11111111111
//definimos la funcion speak
function hablar(){

    //convertimos el texto a voz
    //se almacena la API
    var synth = window.speechSynthesis;

    //obtenemos lo que está escrito en el cuadro de entrada de texto










    ///// C100
    ///// PARTE 22222
    //haremos que la voz diga "la selfie se tomará e 5 segundos"
    speak_data = "Tomando selfie en 5 segundos"
    












    //convertimos este texto a voz
    //utterThis es para guardar el texto convertido a voz
    //speechSynthesis es la funcion de la API para convertir el texto a voz
    //speak_data es el texto del textinput
    var utterThis = new SpeechSynthesisUtterance(speak_data);


    //synth: es donde almacenamos la API
    //speak(): es la funcion predefinida de la API
    //utterThis: es el texto que queremos convertid a voz
    synth.speak(utterThis);



    //////444444444
    //agregamos la funcion para abrir la camara
    //cuando se lea el texto, tambien se abrirá la camara
    Webcam.attach(camara);











    ////////C100
    //////PARTE 444444
    //agregaremos el retraso para tomar la foto
    setTimeout(function(){
        //se llamará a la funcion se snapshot despues de que se cumplan los 5 segundos
        //tendrá un retraso en la ejecución
        take_snapshot();







        ///PARTE 55555
        //guardar la imagen
        //ejecutamos la funcion save(), despues de haber tomado la captura
        //y despues de los 5 segundos
    }, 5000)



}



//Del siguiente enlace
//"https://makitweb.com/how-to-capture-picture-from-webcam-with-webcam-js/"
//explicamos las caracteristicas que cambiaremos de la camara
///////33333333333
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
})

//obtenemos el ID de donde queremos poner la camara y lo almacenamos en una variable
camara = document.getElementById("camera");












/////// C1000
//// PARTE 333333
//Vamos a escribir el codigo para tomar la selfie
function take_snapshot(){
    //Webcam.snap es una funcion predefinida para sacar la foto
    //data_uri es contenida para mostrar una vista previa de la foto que se tomará
    //debemos decirle que hará la funcion websnap
    Webcam.snap(function(data_uri){
        //Actualizamos el div para que contenga la imagen de data_uri
        //data uri se escribe así porque las variables no van entre comillas
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">'
    })
}








////C100
//PARTE 555555
//para que podamos descargarr la imagen que se tomó
//creamos la funcion guardar
function save (){
    //guardamos en una variable el ID de la etiqueta a
    //es donde mostraremos el enlace para descargar la imagen
    link = document.getElementById("link");
    //guardamos el parametro src de la imagen que se mostró despues de la captura
    //src contiene el enlace de la imagen
    image = document.getElementById("selfie_image").src;
    //tomamos el src de la imagen capturada y lo colocamos en el link de la etiqueta <a>
    link.href= image;
    //es para hacer click automático en la etiqueta link
    //para que la imagen se descargue automaticamente sin tener que darle click
    link.click();
}