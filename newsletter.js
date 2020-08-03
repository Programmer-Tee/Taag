








// Swal.fire({
//   position: 'top-end',
//   icon: 'success',
//   title: 'Your work has been saved',
//   showConfirmButton: false,
//   timer: 1500
// })



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA5CSBZJ36-K1rm7nbsI-yGZWugez2fzuE",
    authDomain: "newsletteremail-da9db.firebaseapp.com",
    databaseURL: "https://newsletteremail-da9db.firebaseio.com",
    projectId: "newsletteremail-da9db",
    storageBucket: "newsletteremail-da9db.appspot.com",
    messagingSenderId: "658230961632",
    appId: "1:658230961632:web:e5b46a1a5b519f31e83785"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);





  var database = firebase.database();
  var d = new Date();
var t = d.getTime();
var counter = t;

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
 

    var email = document.getElementById('email').value;

    createTask(email);
    
    
    
    
    
   Swal.fire ("Sent")
    form.reset();
//document.getElementById("btn1").addEventListener('submit', (e)=>{Swal.fire("KIK","SSS")})


});



function createTask(email) {
    counter += 1;
    var task = {
   
        email: email
    
    };
    db = firebase.database().ref('NewsLetterEmails/' + counter);
    db.set(task);
}

function reset() {
    document.getElementById('form').reset();
}







