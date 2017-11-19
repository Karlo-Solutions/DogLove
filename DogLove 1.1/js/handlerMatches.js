var dogs = []
var index = 0;
var matchesList = [];

function checkStatus(){
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (!firebaseUser){
            console.log("Invalid credentials");
            window.location = "https://dog-love-diegonoe.c9users.io/login.html";
        } else {
            loadProfile();
            loadDogs();
        }
    })
}

function loadProfile() {
    var tmp = "";
    var ref = database.ref("user/" + firebase.auth().currentUser.uid)
    ref.once("value", function(snapshot){
        $("#dognameTitle").html(snapshot.child("dogname").val())
        $("#username").html("Hi " + snapshot.child("username").val() + "!")
        $("#dogname").html("Your dog's name: "+ snapshot.child("dogname").val())
        $("#dogbreed").html(snapshot.child("dogname").val() + "'s breed: " + snapshot.child("dogbreed").val())
        $("#email").html(snapshot.child("email").val())
        
    });
}

function loadDogs() {
    var checked = [];
    var ref = database.ref("user/" + firebase.auth().currentUser.uid + "/profilesReviewed/")
    ref.once("value", function(snapshot){
        snapshot.forEach(function(childsnap){
            checked.push(childsnap.key)
        });
        
        var dogsRef = database.ref("user/")
        dogsRef.once("value", function(snapshotDogs){
            snapshotDogs.forEach(function(childsnapDogs){
                if(checked.indexOf(childsnapDogs.key) < 0){
                    dogs.push(childsnapDogs.key)
                }
            })
            showDog();  
        });
    });
}

function showDog() {
    if(index < dogs.length){
        var doguid = dogs[index];
        var ref = database.ref("user/" + doguid)
        ref.once("value", function(snapshot){
            $("#showDogName").html("Hi, my name is " + snapshot.child("dogname").val() + "!");
        })
    }
    else{
        $("#showDogName").html("There are no more dogs :(");
        document.getElementById("btnDislike").style.visibility = 'hidden';
        document.getElementById("btnLike").style.visibility = 'hidden';
    }
}

function likedDog() {
    var ref = database.ref("user/" + firebase.auth().currentUser.uid + "/profilesReviewed").child(dogs[index]).set(
        true
    ).then(function() {
        var refLiked = database.ref("user/" + dogs[index] + "/profilesReviewed").once('value', function(snapshot) {
            if (snapshot.hasChild(firebase.auth().currentUser.uid)) {
                if (snapshot.child(firebase.auth().currentUser.uid).val()) {
                    console.log("Match!");
                    $('#matchModal').modal('show');
                }
            }
            index++;
            showDog();
        });
    });
}

function dislikedDog() {
    var ref = database.ref("user/" + firebase.auth().currentUser.uid + "/profilesReviewed").child(dogs[index++]).set(
        false
    ).then(function(){
        showDog();
    });
}

function getMatches(){
    var tmp = "";
    var ref = database.ref("user/" + firebase.auth().currentUser.uid + "/profilesReviewed/").once("value", function(snapshot){
        snapshot.forEach(function(childsnap){
            if(childsnap.val()){
                var matchRef =  database.ref("user/" + childsnap.key);
                matchRef.once("value", function(matchsnapshot) {
                    if (matchsnapshot.child("profilesReviewed").hasChild(firebase.auth().currentUser.uid)) {
                        if(matchsnapshot.child("profilesReviewed").child(firebase.auth().currentUser.uid).val()) {
                            tmp += "<h3>" + matchsnapshot.child("dogname").val() + "</h3><br>";
                            $('#loadMatches').html(tmp);

                        }
                    }
                })
            }
        });
    });
}
