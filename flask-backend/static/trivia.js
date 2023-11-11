document.addEventListener('DOMContentLoaded', () => {
    let questions = [
        { question: "What holiday did we have our first kiss?", correct: "Father's Day", incorrect: ["Juneteenth", "Mother's Day", "Independence Day"] },
        { question: "Where was our 1st official date?", correct: "Old Rag", incorrect: ["Jinya Ramen", "Mission", "Guapos"] },
        { question: "When is our wedding anniversary?", correct: "18 May", incorrect: ["3 July", "4 July", "20 May"] },
        { question: "Where did Arnold propose?", correct: "Kitchen", incorrect: ["Smithsonian Zoo", "Old Town ALexandria", "Balcony"] },
        { question: "What activity did we do the most together", correct: "Workout/gym", incorrect: ["Drink", "Fight", "Dance"] },
        { question: "Where was our first trip together", correct: "Mt. Jackson", incorrect: ["Cancun", "Blacksburg", "Virginia Beach"] },
        { question: "Who made the first move?", correct: "Antara", incorrect: ["Me"] },
        { question: "Where was our most recent trip to?", correct: "Cartagena", incorrect: ["Bogata", "Cancun", "Punta Cana"] },
        { question: "Who made the first move?", correct: "Antara", incorrect: ["Arnold"] },
        { question: "What would we have named the baby if it was a girl?", correct: "Arya", incorrect: ["Anna", "Debra", "Akilah"] },
        { question: "What song did we dance to at our wedding?", correct: "Best Part", incorrect: ["Always Be my Baby", "Just the 2 of Us", "Love"] },
        { question: "Who found out we were expecting first?", correct: "Upa", incorrect: ["Neal", "BA", "Ridi"] },
        { question: "What show did BA and us watch every night?", correct: "Avatar", incorrect: ["Spider Man", "Pokemon", "Teen Titans"] },
        { question: "Where did we work together at?", correct: "Pentagon", incorrect: ["State Dept", "Crystal City", "Arlington"] },
    ];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; 
        }
    }

    function displayQuestion() {
        if (questions.length === 0) {
            document.querySelector('.game-container').innerHTML = "Game Over!";
            return;
        }

        let randomIndex = Math.floor(Math.random() * questions.length);
        let question = questions[randomIndex];
        questions.splice(randomIndex, 1);

        let answers = [question.correct, ...question.incorrect];
        shuffleArray(answers); 

        let questionDiv = document.querySelector('.game-container');
        questionDiv.innerHTML = `
            <h3 class="game_header">Question</h3>
            <div>${question.question}</div>
            <div class="answers">
                ${answers.map(ans => `<div class="answer">${ans}</div>`).join('')}
            </div>
        `;

        document.querySelectorAll('.answer').forEach(answerDiv => {
            answerDiv.addEventListener('click', function() {
                checkAnswer(this, question.correct);
            });
        });
    }

    function checkAnswer(selectedElement, correctAnswer) {
        let isCorrect = selectedElement.textContent === correctAnswer;

        if (!isCorrect) {
            selectedElement.classList.add('incorrect');
        } else {
            // If correct, mark as correct and move to the next question
            selectedElement.classList.add('correct');
            setTimeout(() => {
                displayQuestion();
            }, 1000); // Wait for 1 second before showing the next question
        }
    }

    displayQuestion();
});