firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
     
    } else {
        window.location = "?view=login";
    }
});

$("#btncerrar").click(function(){
    var confirm = window.confirm("Estas seguro de cerrar sesion?");
    if(confirm){
        firebase.auth().signOut().then(function() {
            window.location = "?view=login";
        }).catch(function(error) {
        
        });
    }
});