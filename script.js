fetch('https://icanhazdadjoke.com/slack') //this will fetch the data from the given API
    .then(data => data.json()) //data is stored in the json format
    .then(jokeData => {   
        const jokeText = jokeData.attachments[0].text; // we are trying to get the text where the Joke exist
        const jokeElement = document.getElementById('jokeElement'); //This is the id we have given in the HTML

        jokeElement.innerHTML = jokeText; //Making jokeElement equal to the JokeText.
    })