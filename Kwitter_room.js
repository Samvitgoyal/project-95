var firebaseConfig = {
    apiKey: "AIzaSyBwasYmqAyxYtptEuSNBztcfpk4GrHLIoo",
    authDomain: "kwitter-schoolversion.firebaseapp.com",
    databaseURL: "https://kwitter-schoolversion-default-rtdb.firebaseio.com",
    projectId: "kwitter-schoolversion",
    storageBucket: "kwitter-schoolversion.appspot.com",
    messagingSenderId: "5234330492",
    appId: "1:5234330492:web:2eb2051535ff7e766ef2f9"
  };
  
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome "+user_name;
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room name"+Room_names);
row="<div class='room_name' id="+Room_names+ "onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>"
document.getElementById("output").innerHTML+=row;
   });});}
getData();

function Addroom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="Kwitter_page.html"; }
  


function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="Kwitter_page.html";
}


