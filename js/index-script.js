const wordlist = [
    'Programmers',
    'Logo designers',
    'Photographers',
    'song writers',
    'music composers',
]

const wordlist2 = [
    'Website Project',
    'Start up Branding',
    'photoshoots',
    'music',
    'music',
]


function rollText() {
    wordbox = $("#wordbox");
    wordbox2 = $("#wordbox2");
    index = Math.floor(Math.random() * wordlist.length)
    wordbox.text(wordlist[index])
    wordbox2.text(wordlist2[index])
}

$(setInterval(rollText, 2000))



