header = document.getElementById("header")

window.addEventListener("scroll", function () {

        if (window.scrollY >= 10) {
            header.classList.add("fixed-header");

        } else {
            header.classList.remove("fixed-header");
        }
    });
