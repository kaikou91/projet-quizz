// require("./bootstrap");

const showDefinitionBtns = document.querySelectorAll(
    ".quizzContainer__word__btn--show"
);

const nextDefinitionBtns = document.querySelectorAll(
    ".quizzContainer__word__btn--next"
);
// Sprint 2 --//
const addDefinitionBtns = document.querySelectorAll(
    ".quizzContainer__word__btn--addDefinition"
);
// Sprint 2 --//


showDefinitionBtns.forEach((btn) => {
    btn.addEventListener("click", function() {
        // récupère la définition
        let definition = this.parentNode.parentNode.parentNode.childNodes[3];
        let questionMark = this.parentNode.parentNode.parentNode.childNodes[5];
        // modifie son affichage
        definition.style.display = "flex";
        questionMark.style.display = "none";
    });
});

nextDefinitionBtns.forEach((btn) => {
    btn.addEventListener("click", function(e) {
        let word = this.parentNode.parentNode.parentNode;
        let nextWord = word.nextSibling.nextSibling;
        word.style.opacity = 0;
        word.style.zIndex = -1;
        nextWord.style.opacity = 1;
        nextWord.style.zIndex = 99;
    });
});


// Sprint 2 --//
addDefinitionBtns.forEach((btn) => {
    btn.addEventListener("click", function() {
        // récupère la définition
        console.log("coucou");
        let addDefinition = this.parentNode.parentNode.parentNode.childNodes[7];
        let questionMark = this.parentNode.parentNode.parentNode.childNodes[5];
        // modifie son affichage
        addDefinition.style.display = "flex";
        questionMark.style.display = "none";
    });
});
// Sprint 2 --//