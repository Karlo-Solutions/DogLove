(function(){

    const config = {
            apiKey: "AIzaSyBvQ2TuR3CFU9Gqh9LrsjNYE2m8Yv0BE0A",
            authDomain: "doglove-d79e4.firebaseapp.com",
            databaseURL: "https://doglove-d79e4.firebaseio.com",
            projectId: "doglove-d79e4",
            storageBucket: "doglove-d79e4.appspot.com",
            messagingSenderId: "523279515963"  
    }

    firebase.initializeApp(config);

    const txtEmail= document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignup = document.getElementById('btnSignup');
    const btnLogout = document.getElementById('btnLogout');

    if (btnLogin) {
        btnLogin.addEventListener('click', e => {
            const email = txtEmail.value;
            const pass = txtPassword.value;
            const auth = firebase.auth();

            const promise = auth.signInWithEmailAndPassword(email, pass);
            promise.catch(e => console.log(e.message));
        });
    }

    if (btnSignup) {
        btnSignup.addEventListener('click', e => {
            const email = txtEmail.value;
            const pass = txtPassword.value;
            const auth = firebase.auth();

            const promise = auth.createUserWithEmailAndPassword(email, pass);
            promise.catch(e => console.log(e.message));
        });
    }

    if (btnLogout) {
        btnLogout.addEventListener('click', e => {
            firebase.auth().signOut();
        })
    }


    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser){
            console.log(firebaseUser);
        } else {
            console.log('Not logged in');
        }
    })
}());