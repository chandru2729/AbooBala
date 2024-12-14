document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const section = document.getElementById("sec1");

     moveNoButton=() => {
        const sectionRect = section.getBoundingClientRect();
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        const randomX = Math.random() * (sectionRect.width - buttonWidth);
        const randomY = Math.random() * (sectionRect.height - buttonHeight);

        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    };
    noButton.addEventListener("click",moveNoButton,false);
    noButton.addEventListener("mouseover",moveNoButton,false);
    yesButton.addEventListener("click",()=>{
        window.location.href="button2.html";
    });
});
