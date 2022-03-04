$("#registro").click(function(){
    registro();
});

function registro(){
    var email =  $("#txtusuarioR").val();
    var password = $("#txtpasswordR").val();

    if(email === "" || password === ""){
        M.toast({html: 'No se permiten campos vacios'});
    }else{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          // ...
          M.toast({html: 'Registro Exitoso! :D'});
          window.location = "?view=home";
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          M.toast({html: errorCode + ' - ' + errorMessage});
        });
    }
}