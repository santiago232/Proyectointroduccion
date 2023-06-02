// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {getAuth, GoogleAuthProvider, signInWithPopup}
from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js'
import { getDatabase, ref, onValue, update, push,child }
from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXBESb1OQWjlGGDYHROe_BrXX5XpRgz1E",
  authDomain: "fir-intro-2023.firebaseapp.com",
  projectId: "fir-intro-2023",
  storageBucket: "fir-intro-2023.appspot.com",
  messagingSenderId: "397891766299",
  appId: "1:397891766299:web:80bdd4ce3637c3b67550be",
  measurementId: "G-BX6CJX44PH"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

var usuarioConectado = document.getElementById('usuarioConectado');
var botonIniciar = document.getElementById('botonIniciar');
var botonCerrar = document.getElementById('botonCerrar');
var textoMensaje = document.getElementById('textoMensaje');
var mensajeChat = document.getElementById('mensajeChat');
var nombreUsuaioConectado ="";

botonIniciar.onclick = async function(){
  var auth = getAuth();
  var provider = new GoogleAuthProvider();
  auth.language = "es";
  var response = await signInWithPopup(auth, provider);
  usuarioConectado.innerText = response.user.email;
  botonCerrar.style.display = "block";
  botonIniciar.style.display = "none";
  nombreUsuaioConectado = response.user.email;
  escuchatYDibujarMensajes();
}

botonCerrar.onclick = async function (){
  var auth = getAuth();
  await auth.signOut();
  botonCerrar.style.display = "none";
  botonIniciar.style.display = "block";
  usuarioConectado.innerText = "No conectado";
  nombreUsuaioConectado = "";
} 

textoMensaje.onkeydown = async function(event){
  if (event.key == "Enter"){
   if ( nombreUsuaioConectado == ""){
    alert("El usuario debe iniciar sesion");
    return;
   }
   var db = getDatabase();
   var referenciaMensajes = ref(db, "mensajes");
   var nuevaLlave = push( child (ref(db), "mensajes")).key;
   var nuevosDatos = {
    [nuevaLlave]: {
      usuario: nombreUsuaioConectado,
      mensaje: textoMensaje.value,
      fecha: new Date().toLocaleDateString()

    }
   }
   textoMensaje.value = ""
   update(referenciaMensajes, nuevosDatos)
  }
}

function escuchatYDibujarMensajes (){
  var db = getDatabase();
  var referenciaMensajes = ref(db, "mensajes");
  onValue(referenciaMensajes, function(datos) {
      var valoresObtenidos = datos.val();
      //console.log(valoresObtenidos)
      mensajesChat.innerHTML = "";
      Object.keys(valoresObtenidos).forEach(llave=>{
        var mensaje = valoresObtenidos[llave];
        mensajesChat.innerHTML += "<div class='nombre-usuario'>"+ mensaje.usuario +"</div>"
        mensajesChat.innerHTML += "<div class='mensaje-chat'>"+ mensaje.mensaje +"</div>"
        mensajesChat.innerHTML += "<div>"+ mensaje.fecha +"</div><hr></hr>";
      })
  })
}