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
        $(".form1").addClass("past");
    }
    else if (currentTime.isBefore(time1)) {
        $(".form1").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".form1").addClass("present");
    };


    // 9am
    time2 = moment().startOf('day').add(9, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time2)) {
        $(".form2").addClass("past");
    }
    else if (currentTime.isSame(time2)) {
        $(".form2").addClass("present");
    }
    else if (currentTime.isBefore(time2)) {
        $(".form2").addClass("future");
    };


    // 10am
    time3 = moment().startOf('day').add(10, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time3)) {
        $(".form3").addClass("past");
    }
    else if (currentTime.isSame(time3)) {
        $(".form3").addClass("present");
    }
    else if (currentTime.isBefore(time3)) {
        $(".form3").addClass("future");
    };


    // 11am
    time4 = moment().startOf('day').add(11, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time4)) {
        $(".form4").addClass("past");
    }
    else if (currentTime.isSame(time4)) {
        $(".form4").addClass("present");
    }
    else if (currentTime.isBefore(time4)) {
        $(".form4").addClass("future");
    };

    // 12pm
    time5 = moment().startOf('day').add(12, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time5)) {
        $(".form5").addClass("past");
    }
    else if (currentTime.isSame(time5)) {
        $(".form5").addClass("present");
    }
    else if (currentTime.isBefore(time5)) {
        $(".form5").addClass("future");
    };


    // 1pm
    time6 = moment().startOf('day').add(13, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time6)) {
        $(".form6").addClass("past");
    }
    else if (currentTime.isSame(time6)) {
        $(".form6").addClass("present");
    }
    else if (currentTime.isBefore(time6)) {
        $(".form6").addClass("future");
    };


    // 2pm
    time7 = moment().startOf('day').add(14, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time7)) {
        $("form7").addClass("past");
    }
    else if (currentTime.isSame(time7)) {
        $(".form7").addClass("present");
    }
    else if (currentTime.isBefore(time7)) {
        $("form7").addClass("future");
    };

    // 3pm
    time8 = moment().startOf('day').add(15, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time8)) {
        $("form8").addClass("past");
    }
    else if (currentTime.isSame(time8)) {
        $("form8").addClass("present");
    }
    else if (currentTime.isBefore(time8)) {
        $("form8").addClass("future");
    };


    // 4pm
    time9 = moment().startOf('day').add(16, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time9)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isSame(time9)) {
        $(".form9").addClass("present");
    }
    else if (currentTime.isBefore(time9)) {
        $(".form9").addClass("future");
    };

    // 5pm
    time10 = moment().startOf('day').add(17, "hours");

    if (currentTime.isAfter(time10)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(time10)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(time10)) {
        $(".form10").addClass("present");
    };
};


colorBlocks();

var x = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    $(".form" + x[i]).val(dataHour);
}

// saves to local storage
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});
// retrieves from local storage
// function {};