function printHighScore() {
    const highScore = JSON.parse(window.localStorage.getItem("highscores")) || [];

    highScore.sort(function (a, b) {
        return b.score - a.score
    });

    highScore.forEach(function (score) {
        const liTag = document.createElement("li");
        liTag.textContent = score.initials + " your score is " + score.score + " points";

        const liElement = document.getElementById("userScore");

        liElement.appendChild(liTag);


    });
}

printHighScore();