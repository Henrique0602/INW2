
const firebaseConfig = {
    apiKey: "AIzaSyC4FLpfYY2xRF2UK8xUdoFHMbLzp79hnZk",
    authDomain: "projeto2mibteste-3ac4e.firebaseapp.com",
    projectId: "projeto2mibteste-3ac4e",
    storageBucket: "projeto2mibteste-3ac4e.appspot.com",
    messagingSenderId: "916647123407",
    appId: "1:916647123407:web:32381d3953c557f15f1aba"
  };


firebase.initializeApp(firebaseConfig);

function logout(){
    firebase.auth().signOut().then (()=>{
        alert("Usuario deslogado")
    })
}

 /*
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
 const email = emailField.value;
 const password = passwordField.value;
 firebase.auth().signInWithEmailAndPassword(email, password)
 .then((userCredential) => {
 // Usuário logado com sucesso
 const user = userCredential.user;
 console.log('Usuário logado:', user);
 })
 .catch((error) => {
 // Tratar erros de autenticação
 const errorMessage = error.message;
 console.error('Erro de autenticação:', errorMessage);
 });
});*/