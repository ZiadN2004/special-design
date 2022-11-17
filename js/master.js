

$("#setting").on("click", function () {
    $(".settings-box").toggleClass("open");
    $("#setting").toggleClass("fa-spin")
    // if ($(".settings-box").hasClass("open")) {
    //     $(".settings-box").removeClass("open");
    // } else {
    //     $(".settings-box").addClass("open");
    // }
})

if (localStorage.getItem("color") !== null) {
    document.documentElement.style.setProperty("--main-color", localStorage.getItem("color"));
    // $(".option-col li").removeClass("active");
    document.querySelectorAll(".option-col li").forEach(element => {
        element.classList.remove("active");
        if (element.dataset.color === localStorage.getItem("color")) {
            element.classList.add("active");
        }
    });
}

$(".option-col li").on("click", function (e) {
    localStorage.setItem("color", e.target.dataset.color);
    document.documentElement.style.setProperty("--main-color", localStorage.getItem("color"));
    $(".option-col li").removeClass("active");
    $(e.target).toggleClass("active");
})


// start background Option
let backgroundRandom = true;


let land_images = ["land1.png", "land2.png", "land3.png", "land4", "land5", "land6"]

let randInter;
function randomBack() {
    if (backgroundRandom) {
        randInter = setInterval(() => {
            let random = Math.floor(Math.random() * land_images.length);
            $(".landing-page").css("background-image", `url(images/land${random + 1}.png)`);
        }, 10000)
    }
}

// localStorage.setItem("random-option", true);

if (localStorage.getItem("random-option") !== null) {
    if (localStorage.getItem("random-option") === "true") {
        randomBack();
        // console.log("te")
        $(".settings-box .background-option button").removeClass("active")
        $(".settings-box .background-option .yes").addClass("active")

    } else {
        backgroundRandom = false;
        clearInterval(randInter);
        console.log("no")
        $(".settings-box .background-option button").removeClass("active")
        $(".settings-box .background-option .no").addClass("active")
    }
}
randomBack();

$(".settings-box .background-option button").on("click", function (e) {

    $(".settings-box .background-option button").removeClass("active");
    e.target.classList.add("active");

    if ($(e.target).hasClass("yes")) {
        backgroundRandom = true;
        randomBack();
        localStorage.setItem("random-option", true);

    } else {
        backgroundRandom = false;
        clearInterval(randInter);
        localStorage.setItem("random-option", false);

    }
})

// end background Option


let ourSkills = document.querySelector(".ourSkills")

// start our skills
let array = document.querySelectorAll(".ourSkills .prog");
array.forEach((e) => {
    e.append(e.dataset.prog)
})
window.onscroll = function () {
    let offsetTop = ourSkills.offsetTop;

    let outHeight = ourSkills.offsetHeight;


    let WindoHeight = this.innerHeight;


    let scroll = window.pageYOffset


    if (scroll > (offsetTop + outHeight - WindoHeight)) {
        // $(".ourSkills .prog").css("width", $(".ourSkills .prog").data("prog"))
        array.forEach((e) => {
            e.style.width = e.dataset.prog;
        })
    }
}
// end our skills



$(".gallery .images img").on("click", function (img) {
    // create popupLay
    let overLay = document.createElement("div");
    overLay.className = "overLay";
    document.body.appendChild(overLay);
    // create popup box
    let popup = document.createElement("div");
    popup.className = "popup";
    overLay.appendChild(popup);
    // add Attr to div
    let image = document.createElement("img");
    popup.appendChild(image);
    image.src = img.target.src;
    // create btn
    let btn = document.createElement("span");
    btn.appendChild(document.createTextNode("X"));
    btn.className = "btn";
    popup.appendChild(btn);

    $(".btn").on("click", function (e) {
        this.parentNode.remove();
        document.querySelector(".overLay").remove()
    })

})


// start bullts

$(".bullts .bullet").on("click", function (e) {
    document.querySelector(e.target.dataset.goal).scrollIntoView({
        behavior: "smooth"
    })
    $(".bullts .bullet").removeClass("active");
    $(this).addClass("active")
})


$(".bullts-option button").on("click", (e) => {
    handlactive(e);
    if ($(e.target).hasClass("yes")) {
        // console.log("yes")
        $(".bullts").css("display", "block");
        localStorage.setItem("state-bullets", true)
    }
    else {
        // console.log("no");
        $(".bullts").css("display", "none");
        localStorage.setItem("state-bullets", false)

    }
});




if (localStorage.getItem("state-bullets") !== null) {


    // console.log("not null")
    if (localStorage.getItem("state-bullets") === "true") {
        $(".bullts").css("display", "block");
        // console.log("true");
        $(".bullts-option").children().removeClass("active")
        $(".bullts-option .yes").addClass("active")


    } else {
        $(".bullts").css("display", "none");
        $(".bullts-option").children().removeClass("active")

        $(".bullts-option .no").addClass("active")
        // console.log("false")
    }
}



// end bullts

function handlactive(ev) {
    $(ev.target).parent().children().removeClass("active");
    $(ev.target).addClass("active");




    // ev.target.parentElement.querySelectorAll(".active").forEach((ele) => {
    //     ele.classList.remove("active")
    // })
    // ev.target.classList.add("active");

}


// reset

document.querySelector(".setings .reset").onclick = function () {
    localStorage.removeItem("color");
    localStorage.removeItem("random-option");
    localStorage.removeItem("state-bullets");

    window.location.reload()
}



// start toogle Headers

$(".links-container i").on("click", function (e) {
    $(".landing-page .header .links").toggleClass("toogle")
    // console.log("asa")
})


// end toogle Headers

