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

var trainName = "";
var destination = "";
var initialTime = "";
var frequencyMin = 0;

// database.ref({

// });

$("#submit-form").on("click", function(event) {
    event.preventDefault();

    var trainName = $("#trainInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var initialTime = $("#initialTime").val().trim();
    var frequencyMin = $("#frequencyInput").val().trim();

    //Create temp variable to store inputs in
    var newTrain = {
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

    alert("Train Schedule added to database");

    $("#trainInput").val("");
    $("#destinationInput").val("");
    $("#initialTime").val("");
    $("#frequencyInput").val("");
});

//Firebase event for adding train to database and row in HTML with each entry
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

//Calculating the ETA/Min Away Field -
//Grab the initialTime (e.g. 3:00 PM or 15:00)
//Grab the frequencyMin (e.g 15 min)
//Grab the current time, using the system clock or webserver or else by linking out to a "the time is now ___" site. (e.g. 3:28)
//Split the difference between the current and initialTime (e.g. 28-00 = 28)
//Take the min difference and use the modulus w/ the frequencyMin (e.g. 28 % 15 = 13)
//Take frequencyMin and subtract the modulus (e.g. 15 - 13 = 2 min away)
//Add to current time to find arrival time (e.g. 3:28 + 2 = 3:30)
