var APISchema = new APISchema();

//para acceder al id del componente
$("#login").click(function(){
    login();
});

function login(){
    var email =  $("#txtusuario").val();
    var password = $("#txtpassword").val();
  

    if(email === "" || password === ""){
        M.toast({html: 'No se permiten campos vacios'});
    }else{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          // ...
          /*
          fetch(APISchema.users, {
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
*/
          M.toast({html: 'Login Exitoso! :D'});
          window.location = "?view=home";
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          M.toast({html: errorCode + ' - ' + errorMessage});
        });
    }
}
