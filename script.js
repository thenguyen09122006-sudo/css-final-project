function upDate(previewPic) {
    console.log("Hover hoặc Focus hoạt động");

    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function undo() {
    console.log("Leave hoặc Blur hoạt động");

    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "";
    imageDiv.innerHTML = "Hover over an image below or use Tab to display here.";
}

function addTabFocus() {
    console.log("Trang đã load");

    let images = document.querySelectorAll(".gallery img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}

