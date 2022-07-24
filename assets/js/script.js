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

function colorCodes(){
    // 8am
    time1 = moment().startOf('day').add(8, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time1)) {
        $(".eightam").addClass("past");
    }
    else if (currentTime.isSame(time1)) {
        $(".eightam").addClass("present");
    }
    else if (currentTime.isBefore(time1)) {
        $(".eightam").addClass("future");
    };

    // 9am
    time2 = moment().startOf('day').add(9, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time2)) {
        $(".nineam").addClass("past");
    }
    else if (currentTime.isSame(time2)) {
        $(".nineam").addClass("present");
    }
    else if (currentTime.isBefore(time2)) {
        $(".nineam").addClass("future");
    };

    // 10am
    time3 = moment().startOf('day').add(10, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time3)) {
        $(".tenam").addClass("past");
    }
    else if (currentTime.isSame(time3)) {
        $(".tenam").addClass("present");
    }
    else if (currentTime.isBefore(time3)) {
        $(".tenam").addClass("future");
    };

    // 11am
    time4 = moment().startOf('day').add(11, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time4)) {
        $(".elevenam").addClass("past");
    }
    else if (currentTime.isSame(time4)) {
        $(".elevenam").addClass("present");
    }
    else if (currentTime.isBefore(time4)) {
        $(".elevenam").addClass("future");
    };

    // 12pm
    time5 = moment().startOf('day').add(12, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time5)) {
        $(".twelvepm").addClass("past");
    }
    else if (currentTime.isSame(time5)) {
        $(".twelvepm").addClass("present");
    }
    else if (currentTime.isBefore(time5)) {
        $(".twelvepm").addClass("future");
    };

    // 1pm
    time6 = moment().startOf('day').add(13, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time6)) {
        $(".onepm").addClass("past");
    }
    else if (currentTime.isSame(time6)) {
        $(".onepm").addClass("present");
    }
    else if (currentTime.isBefore(time6)) {
        $(".onepm").addClass("future");
    };

    // 2pm
    time7 = moment().startOf('day').add(14, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time7)) {
        $(".twopm").addClass("past");
    }
    else if (currentTime.isSame(time7)) {
        $(".twopm").addClass("present");
    }
    else if (currentTime.isBefore(time7)) {
        $(".twopm").addClass("future");
    };

    // 3pm
    time8 = moment().startOf('day').add(15, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time8)) {
        $(".threepm").addClass("past");
    }
    else if (currentTime.isSame(time8)) {
        $(".threepm").addClass("present");
    }
    else if (currentTime.isBefore(time8)) {
        $(".threepm").addClass("future");
    };

    // 4pm
    time9 = moment().startOf('day').add(16, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time9)) {
        $(".fourpm").addClass("past");
    }
    else if (currentTime.isSame(time9)) {
        $(".fourpm").addClass("present");
    }
    else if (currentTime.isBefore(time9)) {
        $(".fourpm").addClass("future");
    };

    // 5pm
    time10 = moment().startOf('day').add(17, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time10)) {
        $(".fivepm").addClass("past");
    }
    else if (currentTime.isSame(time10)) {
        $(".fivepm").addClass("present");
    }
    else if (currentTime.isBefore(time10)) {
        $(".fivepm").addClass("future");
    };
};

colorCodes();

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