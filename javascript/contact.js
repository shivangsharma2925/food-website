
const firebaseConfig = {
  apiKey: "AIzaSyCb60o32YHTvDcXS-gumgqRXnuF_9-QdNA",
  authDomain: "authfun-4bd77.firebaseapp.com",
  databaseURL: "https://authfun-4bd77-default-rtdb.firebaseio.com",
  projectId: "authfun-4bd77",
  storageBucket: "authfun-4bd77.appspot.com",
  messagingSenderId: "964561558257",
  appId: "1:964561558257:web:d8d7195b4811cb98ff2750"
};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
}


