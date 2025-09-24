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
