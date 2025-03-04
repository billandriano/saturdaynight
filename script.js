let currentStep = 0;
const formSteps = document.querySelectorAll(".form-step");

// Ensure only the first step is visible initially
formSteps[currentStep].classList.add("active");

function nextStep() {
    formSteps[currentStep].classList.remove("active");
    currentStep++;
    if (currentStep < formSteps.length) {
        formSteps[currentStep].classList.add("active");
    }
}

function checkAnswer(step) {
    const answers = {
        1: ["Πίτσα","πίτσα","Pizza","pizza"],
        2: ["Μακαρόνια","μακαρόνια","Μακαρονια","μακαρονια","pasta","Pasta","Ζυμαρικά","ζυμαρικά","Ζυμαρικα","ζυμαρικα"],
        3: ["τιραμισου", "Τιραμισου","Τιραμισού","τιραμισου"],
        4: ["σ'αγαπώ", "σαγαπώ","σ'αγαπάω","σ'αγαπω","σ'αγαπαω","σε αγαπάω","σε αγαπώ πολύ","σε αγαπαώ πολύ","Σ'αγαπώ","Σ'αγαπαω","Σαγαπω","Σαγαπαω"]
    };

    let userAnswer = document.getElementById(`answer${step}`).value.toLowerCase().trim();

    if (answers[step].includes(userAnswer)) {
        nextStep();
    } else {
        alert("Oops! Try again! 😜");
    }
}
