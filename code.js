const paperCard = document.querySelector(".paper-card"),
qrInput = paperCard.querySelector(".form input"),
generateBtn = paperCard.querySelector(".form button"),
qrImg = paperCard.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Generating QR Code...";
    setTimeout(() => {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        paperCard.classList.add("active");
        generateBtn.innerHTML = `<svg  width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
            <path d="M21 3v5h-5"></path>
          </svg> Generate QR Code`;
    });
}, 1000);
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value) {
        paperCard.classList.remove("active");
    }
});