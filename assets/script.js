var currentDayEl = moment().format("dddd, MMMM Do");
$("#currentDay").append(currentDayEl);

//var containerEl = document.querySelector("#container");

// var firstHour = moment().set('hour', 9).format("hA");
// console.log(firstHour);
// var lastHour = moment().set('hour', 17).format("hA");
// console.log(lastHour);
// var hour = moment().format("hA");
// console.log(hour);

var hourRange = [{
    hour:"9AM",
    index: 0
},
{
    hour:"10AM",
    index: 1
},
{
    hour:"11AM",
    index: 2
},
{
    hour:"12PM",
    index: 3
},
{
    hour:"1PM",
    index: 4
},
{
    hour:"2PM",
    index: 5
},
{
    hour:"3PM",
    index: 6
},
{
    hour:"4PM",
    index: 7
},
{
    hour:"5PM",
    index: 8
}]


//function that checks class "hour" to see if it is in the past, present or future
var checkTime = function () {
    currentTime = moment().format("hA");
    //currentTime = "10AM"
    for (i = 0; i < hourRange.length; i++) {
        if (currentTime === hourRange[i].hour) {
            currentIndex = hourRange[i].index;
            for (j = 0; j < hourRange.length; j++) {
                loopedIndex = hourRange[j].index;
                if (loopedIndex > currentIndex) {
                    //add past class
                    $("#" + j).removeClass("past");
                    $("#" + j).removeClass("present");
                    $("#" + j).addClass("future");
                } if (loopedIndex === currentIndex) {
                    //add current class
                    $("#" + j).removeClass("past");
                    $("#" + j).removeClass("future");
                    $("#" + j).addClass("present");
                } else if (loopedIndex < currentIndex) {
                     //add future class
                    $("#" + j).removeClass("present");
                    $("#" + j).removeClass("future");
                    $("#" + j).addClass("past");
                };
            };
        };
    };
};
checkTime();

//
var saveText = function(){
    for(i = 0; i <hourRange.length; i++) {
        console.log(i);
        $("saveBtn",[i]).on("click", "saveBtn")
        var textElement = $("textarea")[i].value;
        console.log(textElement);
        localStorage.setItem("user-toDo"+i, JSON.stringify(textElement));
    };
};

var loadText = function(){
    for(i = 0; i <hourRange.length; i++) {
        console.log(i);
        loadedText = localStorage.getItem("user-toDo"+i);
        loadedText = JSON.parse(loadedText);
        $("textarea")[i].value = loadedText;
    }
};

loadText();

$(".btnBorder").click(saveText);


setInterval(checkTime,15000);
