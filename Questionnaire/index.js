const QUESTIONS = [
    {
      question:
        'A quel compositeur est consacré le film Amadeus ?\n1. Beethoven\n2. Mozart',
      reponse: 2
    },
    {
      question: "Quelle est la capitale de l'Autriche ?\n1. Vienne\n2. Oslo",
      reponse: 1
    },
    {
      question:
        'Quel organe est perturbé par les acouphènes ?\n1. Les Pieds\n2. Les Oreilles',
      reponse: 2
    }
  ];

function startQuestionnaire(questions) {
    let questionNumber = 0;
    let goodAnswer = 0;
    let badAnswer = 0;
    while (questionNumber !== questions.length)
    {
        let answer = prompt(questions[questionNumber].question);
        if (answer == questions[questionNumber].reponse)
        {
            goodAnswer++;
            alert("Bonne réponse !");
        }
        else
        {
            badAnswer++;
            alert("Mauvaise réponse :(");
        }
        questionNumber++;
    }
    if (goodAnswer == 1)
    {
        alert("C'est la fin du questionnaire\nVous avez:\n" + goodAnswer + " Bonne réponse et " + badAnswer + " Mauvaises réponses");
    }
    else if (badAnswer == 1)
    {
        alert("C'est la fin du questionnaire\nVous avez:\n" + goodAnswer + " Bonnes réponses et " + badAnswer + " Mauvaise réponse");
    }
    else if (badAnswer == 3)
    {
        alert("Vous n'avez répondu correctement à aucune question :(");
    }
    else if (goodAnswer == 3)
    {
        alert("Vous avez bien répondu à toutes les questions, bravo !!!");
    }
}

document.getElementById("start-quizz").addEventListener("click", (e) => {
    startQuestionnaire(QUESTIONS);
});