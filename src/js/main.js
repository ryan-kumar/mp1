/* Your JS here. */

// Very very very bad brute-force solution :(
window.switchSlide = function(value) {
    if (value == 0) {
        document.getElementById("one").classList.add("slide");
        document.getElementById("one").classList.remove("off");

        document.getElementById("two").classList.remove("slide");
        document.getElementById("two").classList.add("off");

        document.getElementById("three").classList.remove("slide");
        document.getElementById("three").classList.add("off");
    } else if (value == 1) {
        document.getElementById("two").classList.add("slide");
        document.getElementById("two").classList.remove("off");

        document.getElementById("one").classList.remove("slide");
        document.getElementById("one").classList.add("off");

        document.getElementById("three").classList.remove("slide");
        document.getElementById("three").classList.add("off");
    } else if (value == 2) {
        document.getElementById("three").classList.add("slide");
        document.getElementById("three").classList.remove("off");

        document.getElementById("one").classList.remove("slide");
        document.getElementById("one").classList.add("off");

        document.getElementById("two").classList.remove("slide");
        document.getElementById("two").classList.add("off");
    }
}

window.modal = function(item) {
    if (item == 1) {
        document.getElementById("modal1").classList.remove("off");
        document.getElementById("modal1").classList.add("modal");
    } else if (item == 2) {
        document.getElementById("modal2").classList.remove("off");
        document.getElementById("modal2").classList.add("modal");
    } else if (item == 3) {
        document.getElementById("modal3").classList.remove("off");
        document.getElementById("modal3").classList.add("modal");
    } else if (item == 4) {
        document.getElementById("modal4").classList.remove("off");
        document.getElementById("modal4").classList.add("modal");
    } else if (item == -1) {
        document.getElementById("modal1").classList.add("off");
        document.getElementById("modal1").classList.remove("modal");
    } else if (item == -2) {
        document.getElementById("modal2").classList.add("off");
        document.getElementById("modal2").classList.remove("modal");
    } else if (item == -3) {
        document.getElementById("modal3").classList.add("off");
        document.getElementById("modal3").classList.remove("modal");
    } else if (item == -4) {
        document.getElementById("modal4").classList.add("off");
        document.getElementById("modal4").classList.remove("modal");
    }
}
