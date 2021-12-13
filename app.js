
const registerForm = document.getElementById('register-form')
registerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const fName = document.getElementById('fName').value
  const lName = document.getElementById('lName').value
  const phone = document.getElementById('phone').value

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const update = {
        displayName: `${fName} ${lName}`,

      };
      firebase.auth().currentUser.updateProfile(update).then((res) => {
        console.log('registered')
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      })
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
})
