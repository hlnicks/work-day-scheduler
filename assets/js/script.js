// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// displays current date
moment(Date);
$("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));

var currentTime = moment();
currentTime = currentTime.startOf("hour");
var pastTime = moment().startOf('day').add(8, "hours");

function colorBlocks(){
    // 8am
    time1 = moment().startOf('day').add(8, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time1)) {
        $(".eightam").addClass("past");
    }
    else if (currentTime.isBefore(time1)) {
        $(".eightam").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".eightam").addClass("present");
    };
};


colorBlocks();

var x = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    $(".form" + x[i]).val(dataHour);
}

// saves to local storage
// $(".saveBtn").on("click", function(){

// });

// retrieves from local storage
// function {};