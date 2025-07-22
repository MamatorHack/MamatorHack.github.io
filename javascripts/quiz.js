function checkQuiz(quizId, correctAnswers) {
    const quizElement = document.getElementById(quizId);
    const feedbackElement = quizElement.querySelector('.quiz-feedback');
    let allCorrect = true;
    let anyAnswerSelected = false;

    for (const questionName in correctAnswers) {
        const selectedOption = quizElement.querySelector(`input[name="${questionName}"]:checked`);

        if (selectedOption) {
            anyAnswerSelected = true;
            const isCorrect = selectedOption.value === correctAnswers[questionName];
            const label = selectedOption.parentElement;

            // Réinitialiser les styles précédents
            label.classList.remove('correct', 'incorrect');

            if (isCorrect) {
                label.classList.add('correct');
            } else {
                label.classList.add('incorrect');
                allCorrect = false;
            }
        } else {
            // Si aucune réponse n'est sélectionnée pour cette question
            allCorrect = false;
        }
    }

    if (!anyAnswerSelected) {
        feedbackElement.textContent = 'Veuillez sélectionner une réponse.';
        feedbackElement.className = 'quiz-feedback warning';
        return;
    }

    if (allCorrect) {
        feedbackElement.textContent = 'Correct ! Excellent travail.';
        feedbackElement.className = 'quiz-feedback correct';
    } else {
        feedbackElement.textContent = 'Incorrect. Essayez de revoir les options.';
        feedbackElement.className = 'quiz-feedback incorrect';
    }
}
