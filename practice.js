var firebaseConfig = {
    apiKey: "AIzaSyDkOmEdnCFMMLfmRPu06XudaKKqFzbvLQA",
    authDomain: "kwitter-e7967.firebaseapp.com",
    databaseURL: "https://kwitter-e7967-default-rtdb.firebaseio.com",
    projectId: "kwitter-e7967",
    storageBucket: "kwitter-e7967.appspot.com",
    messagingSenderId: "619956693255",
    appId: "1:619956693255:web:0157056fb23bbbb8b9fda2",
    measurementId: "G-KJYTYBXRVC"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function adduser(){
    var age1=document.getElementById("age").value;
    var user=document.getElementById("user_n").value;
    firebase.database().ref("/").child(user).update({
        purpose:"added_user",age:age1,
    });
}