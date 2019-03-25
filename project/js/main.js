  // Gets called whenever the user clicks "sign in" or "sign out".
  function toggleSignIn() {
    if (!firebase.auth().currentUser) { // if the user's not logged in, handle login
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/plus.login');
      firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log("success");
      }).catch(function(error) {
        console.error("error", error);
      });
    } else { // handle logout
      firebase.auth().signOut();
    }
    //This disables the button until login or logout is successful. You'll want to replace 'login-button' with the id of your login button.
    $('#login-button').attr("disabled", true);
  }