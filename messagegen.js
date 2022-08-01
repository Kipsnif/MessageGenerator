
const randomQuote = () => {
    let randomNumber = Math.floor(Math.random() * 6);
    if (randomNumber === 0) {
        console.log("I found Rome a city of bricks and left it a city of marble.")
        console.log("-Augustus, Roman emperor")
    } else if (randomNumber === 1) {
        console.log("I studied at a university in Florence and finished my degree. My mother was very strict about this recipe: You need to get your degree.")
        console.log("- Donatella Versace")
    } else if (randomNumber === 2) {
        console.log("Naples is curiously chaotic and, if I\’m honest, a bit dilapidated. It certainly has a ‘lived-in’ look. It’s alive, it’s vibrant, it’s a little bit dirty, it’s busy, and I loved it. I felt like this was how Rome would probably have been 2,000 years ago. There’s a real bustle, and it’s down and dirty.")
        console.log("– Paul Hollywood")
    } else if (randomNumber === 3) {
        console.log("This was Venice, the flattering and suspect beauty this city, half fairytale and half tourist trap, in whose insalubrious air the arts once rankly and voluptuously blossomed, where composers have been inspired to lulling tones of somniferous eroticism.")
        console.log("– Thomas Mann")
    } else if (randomNumber === 4) {
        console.log("Palermo was lovely. The most beautifully situated town in the world, it dreams away its life in the Conca d’Oro, the exquisite valley that lies between two seas. The lemon groves and the orange gardens were entirely perfect.")
        console.log("- Oscar Wilde")
    } else if (randomNumber === 5) {
        console.log("My cousin Francis and I are in perfect accord - he wants Milan, and so do I.")
        console.log("-Charles V")
    } 
}

randomQuote()