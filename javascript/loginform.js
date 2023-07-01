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

var messagesRef = firebase.database().ref('messages');

document.getElementById('logupform').addEventListener('submit', submitForm);

document.getElementById('signinbutton').addEventListener('click', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getInputVal('username');
    var email = getInputVal('useremail');
    var pass = getInputVal('userPassword');

    saveMessage(name, email, pass);

}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, email, pass) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        password: pass
    });
}


const wrapper = document.querySelector('.wrapper2');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

registerlink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})