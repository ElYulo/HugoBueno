var API = new APISchema();

$("#registro").click(function(){
    registro();
});

function registro(){
    var email =  $("#txtusuarioR").val();
    var password = $("#txtpasswordR").val();
    var name = $("#txtnameR").val();

    if(email === "" || password === ""){
        M.toast({html: 'No se permiten campos vacios'});
    }else{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          
          // Signed in
          var user = userCredential.user;
          // ...
          var user = userCredential.user;
          var uid = user.uid;
          
          M.toast({html: 'Registro Exitoso! :D'});
          window.location = "?view=home";

          fetch(API.users, {
            method: 'POST',
            body: JSON.stringify({
              US_name: name,
              US_email: email,
              UID: uid
            }),

            headers:{
              "Content-type":"application/json"
            }

          }).then(response => responde.json())
          .then(data =>{

          })
          .catch(err => {

          });

          
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          M.toast({html: errorCode + ' - ' + errorMessage});
        });
    }
}