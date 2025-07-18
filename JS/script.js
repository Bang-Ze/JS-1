"use script"

// sleepBtn
let cryBtn = document.getElementById("cry-emoji");
let happyBtn = document.getElementById("happy-emoji");
let sleepyBtn = document.getElementById("sleepy-emoji");

//textResponse
let textResponse = document.getElementById("text-response");

//imgResponse
let imageResponse = document.getElementById("image-response");

// add event
cryBtn.addEventListener("click", () => {
    textResponse.textContent = "I am sorry to hear that you are feeling sad. I hope you feel better soon!";
    imageResponse.src = "https://i.pinimg.com/originals/ce/fc/c5/cefcc585bd4f0de7655f81cbe3d1c3e6.jpg"
})

happyBtn.addEventListener("click", () => {
    textResponse.textContent = "I am glad to hear that you are feeling happy! Keep smiling!";
    imageResponse.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAWluFaawGuridR_CyXvBzv9FZe3qCWAlWAA&s"
})

sleepyBtn.addEventListener("click", () => {
    textResponse.textContent = "I understand that you are feeling sleepy. Make sure to get some rest!";
    imageResponse.src = "https://cdn.cdnstep.com/R01fuztZ3j2wTQVEp42o/3-1.png"
})