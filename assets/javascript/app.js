

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBC6wBbU9YeUdAteIfLGXYiIsnkTBPSV8g",
    authDomain: "trainscheduler-9bca2.firebaseapp.com",
    databaseURL: "https://trainscheduler-9bca2.firebaseio.com",
    projectId: "trainscheduler-9bca2",
    storageBucket: "trainscheduler-9bca2.appspot.com",
    messagingSenderId: "851967345324"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#submit-form").on("click", function(event) {
    event.preventDefault();

    var trainName = $("#trainInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var initialTime = $("#initialTime").val().trim();
    var frequencyMin = $("#frequencyInput").val().trim();

    //Create temp variable to store inputs in
    var newTrain ={
        name: trainName,
        dest: destination,
        time: initialTime,
        frequency: frequencyMin
    };

    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.dest);
    console.log(newTrain.time);
    console.log(newTrain.frequency);

    alert("Train added to database");

    $("#trainInput").val("");
    $("#destinationInput").val("");
    $("#initialTime").val("");
    $("#frequencyInput").val("");
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());


    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().dest;
    var initialTime = childSnapshot.val().time;
    var frequencyMin = childSnapshot.val().frequency;

    console.log(trainName);
    console.log(destination);
    console.log(initialTime);
    console.log(frequencyMin);
});    