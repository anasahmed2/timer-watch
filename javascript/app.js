var buttonStart = document.getElementById("button_start"); //--------> BUTTON START
var buttonStop = document.getElementById("button_stop"); //--------> BUTTON STOP
var buttonReset = document.getElementById("button_reset"); //--------> BUTTON RESET
var secondTarget = document.getElementById("second")
var minutsTarget = document.getElementById("minuts")
var nenoTarget = document.getElementById("neno")
var timer;

var neno = 0;
nenoTarget.innerHTML = neno   //------------> neno VALUE

minutsTarget.addEventListener("input", function () {
    if (!/^[0-9]+$/.test(minutsTarget.value)) {
        minutsTarget.value = "";
    }
});

secondTarget.addEventListener("input", function () {
    if (!/^[0-9]+$/.test(secondTarget.value)) {
        secondTarget.value = "";
    }
});

neno = 99;     //------------------> value change neno

var sec = Number(secondTarget.value)    //------------> SECOND VALUE
var min = Number(minutsTarget.value)    //------------> MINUTS VALUE


function toggleButton(buttonStart, enable) {
    buttonStart.disabled = !enable
} function toggleButton(buttonStop, enable) {
    buttonStop.disabled = !enable
} function toggleButton(buttonReset, enable) {
    buttonReset.disabled = !enable
}

function sec_input() {
    var secondTarget = document.getElementById("second")
    secondTarget.addEventListener("input", function () {
        if (!/^[0-9]+$/.test(secondTarget.value)) {
            secondTarget.value = "";
        }
    });

    var sec = Number(secondTarget.value)    //------------> SECOND VALUE
    neno = 99;
    clearInterval(timer)
    toggleButton(buttonStart, true)
    toggleButton(buttonStop, false)
    toggleButton(buttonReset, true)
    document.getElementById("timesup").innerHTML = ""

}

function min_input() {
    var minutsTarget = document.getElementById("minuts")
    minutsTarget.addEventListener("input", function () {
        if (!/^[0-9]+$/.test(minutsTarget.value)) {
            minutsTarget.value = "";
        }
    });
    neno = 99;
    var min = Number(minutsTarget.value)    //------------> MINUTS VALUE

    clearInterval(timer)
    toggleButton(buttonStart, true)
    toggleButton(buttonStop, false)
    toggleButton(buttonReset, true)
    document.getElementById("timesup").innerHTML = ""

}

function start() {
    var secondTarget = document.getElementById("second")
    var minutsTarget = document.getElementById("minuts")

    minutsTarget.addEventListener("input", function () {
        if (!/^[0-9]+$/.test(minutsTarget.value)) {
            minutsTarget.value = "";
        }
    });

    secondTarget.addEventListener("input", function () {
        if (!/^[0-9]+$/.test(secondTarget.value)) {
            secondTarget.value = "";
        }
    });

    var sec = Number(secondTarget.value)    //------------> SECOND VALUE
    var min = Number(minutsTarget.value)    //------------> MINUTS VALUE

    toggleButton(buttonStart, false)
    toggleButton(buttonStop, true)
    toggleButton(buttonReset, true)

    if (!isNaN(min) && !isNaN(sec)) {
        if (min === 0 && sec === 0) {
            alert("Enter the value")
            toggleButton(buttonStart,true)
            clearInterval(timer)

        } else if (sec > 59) {
            alert("please Enter the value in second less than 60")
            toggleButton(buttonStart,true)
        } else {
            timer = setInterval(function () {
                nenoTarget.innerHTML = neno;
                neno--;
                if (neno < 0) {
                    neno = 99
                    sec--
                }

                if (sec < 0) {
                    sec = 59;
                    min--
                }
                if (sec >= 0 && min >= 0) {
                    secondTarget.value = sec; // -------------> GO IN HTML
                    minutsTarget.value = min; // -------------> GO IN HTML
                }
                if (sec === 0 && min === 0) {
                    console.log("hello" + "-----> test")
                    clearInterval(timer)
                    document.getElementById("timesup").innerHTML = "Times Up"
                }
            }, 10)

        }
    } else {
        clearInterval(timer);
        toggleButton(buttonStart, true)
        toggleButton(buttonStop, true)
        toggleButton(buttonReset, true)
        alert("Set the timer first")

    }

}

buttonStart.addEventListener("click", start)

function stop() {
    clearInterval(timer)
    toggleButton(buttonStart, true)
    toggleButton(buttonStop, false)
    toggleButton(buttonReset, true)

}

buttonStop.addEventListener("click", stop)

function reset() {
    clearInterval(timer)
    var secondTarget = document.getElementById("second")
    var minutsTarget = document.getElementById("minuts")
    neno = 0
    nenoTarget.innerHTML = neno
    secondTarget.value = 0    //------------> SECOND VALUE
    minutsTarget.value = 0  //------------> MINUTS VALUE
    toggleButton(buttonStart, true)
    toggleButton(buttonReset, false)
    document.getElementById("timesup").innerHTML = ""

}

buttonReset.addEventListener("click", reset)
