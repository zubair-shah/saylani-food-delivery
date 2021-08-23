//===============function-getCurrentUser==============
// const getCurrentUser = () => {
//   var detail = document.getElementById("detail");
//   let fullName = document.getElementById("FullName")
//   let phoneNumber = document.getElementById("PhoneNumber")
//   let email = document.getElementById("Email")
//   var user = JSON.parse(localStorage.getItem("user"));
//   detail.innerHTML = "Welcome " + "\n" +user.name;
//   fullName.innerHTML = "Full Name :" + "\n" +user.name;
//   phoneNumber.innerHTML = "Phone :" + "\n" +user.phone;
//   email.innerHTML = "Email :" + "\n" +user.email;
// }

// ============todo-list=============
var display = document.getElementById("display")

const todo = () =>{

// // ------------------taking-input-from-users-------------------

var title = document.getElementById("titleInput");
var discription = document.getElementById("discriptionInput");

if (title.value ==="" && discription.value === "") {
  alert("plz enter your Title and discription")
  return false;
}
 JSON.parse(localStorage.getItem(createCard));
//  =============by-template-literal-method===============
let createCard= document.getElementById("display");
createCard.innerHTML += ` <div class="col-md-4"><div class="mt-35px card-deck"><div class="card"><img src="https://media.istockphoto.com/photos/check-off-a-todo-list-with-a-black-pen-picture-id1212554542?k=6&amp;m=1212554542&amp;s=612x612&amp;w=0&amp;h=dAEORdxXuwjVzkuSvnqNfZaCD1mNq9dupvQzqyKooh8=" class="card-img-top"><div class="card-body"><h5 class="card-title">${title.value}</h5><p class="card-text">${discription.value}</p></div></div></div><button id="delet" class="btn btn-danger " onclick="deletitem(this)">DELET</button></div>`
 localStorage.setItem("createCard",createCard)
 localStorage.getItem(createCard)
 console.log(createCard)
var ForDatabase = {
  title:title.value, 
  discription:discription.value
}


  // ----------------------after-creating-1-div-input-value-remove--------------------
  title.value = ""
  discription.value = ""
  
  firebase.database().ref("students/student1").push(ForDatabase)
  firebase.database().ref('students/student1').on('child_added', function(data){

       console.log(data.val())
  })
}


function onLogout(){
  var message = document.getElementById("message");
  firebase.auth().signOut().then(function() {
    // message.innerHTML="Good Bye"
    console.log('Signed Out');
    location.replace("../index.html")
  }, function(error) {
    console.error('Sign Out Error', error);
  });

} 
