const paperCard = document.querySelector(".paper-card"),
qrInput = paperCard.querySelector(".form input"),
generateBtn = paperCard.querySelector(".form button"),
qrImg = paperCard.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

    qrImg.addEventListener("load", () => {
        paperCard.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value) {
        paperCard.classList.remove("active");
    }
});