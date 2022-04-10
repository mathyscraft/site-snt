
// Animation 
// au scroll 
// balisage

let sliding = document.querySelector("#img-balisage"); //Selectione la ligne de code avec l'id "img-balisage"


window.addEventListener("scroll", () => {
    
    const screenHeight = document.documentElement.clientHeight; //La valeur de doc.docElmt.clientHeight = taille de l'écran

    let topElementToTopScreen = sliding.getBoundingClientRect().top; //Cette valeur correspond à la distance du haut de l'élement par rapport à l'écran

    if (scrollY > (scrollY + topElementToTopScreen) - screenHeight * 0.8) {
        sliding.classList.add("active");
        sliding = document.querySelector("#text-balisage");
    }
 
})
