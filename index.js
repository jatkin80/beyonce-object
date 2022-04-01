const beyonceHash = {
    hits: [{
            title: 'Bootylicious',
            group: true,
            group_name: 'destinysChild',
            hair: ['straight', 'blonde', 'pink tips'],
            signature_look: 'fedora with yellow feather',
            video_theme: 'dressing room dance',
            best_line: 'Move your body up and down, make your booty touch the ground',
            fierceness: 7,
            formation: false,
            dancers: 20
        },
        {
            title: 'Single Ladies',
            group: false,
            group_name: 'none',
            hair: ['honey brown', 'half up, half down'],
            signature_look: 'black bodysuit and legs for days',
            video_theme: 'single ladies dance',
            best_line: 'if you like it then you should\'ve put a ring on it',
            fierceness: 10,
            formation: true,
            dancers: 2
        },
        {
            title: 'Let Me Upgrade You',
            group: false,
            group_name: 'none',
            hair: ['beaded bun', 'wet hair', 'honey brown', 'waves'],
            signature_look: 'flapper dress and bodysuit',
            video_theme: 'decadence, water, gold beads and pearls',
            best_line: 'I could do for you what Martin did for the people',
            fierceness: 10,
            formation: true,
            dancers: 5
        },
        {
            title: 'Sorry',
            group: false,
            group_name: 'none',
            hair: ['braids', 'bun', 'blonde', 'waves', 'bob'],
            signature_look: 'braided crown with gold bikini top',
            video_theme: 'party bus and Serena Williams in bodysuit',
            best_line: 'Boi bye',
            fierceness: 10,
            formation: false,
            dancers: 1
        },
        {
            title: 'Say My Name',
            group: true,
            group_name: 'destinysChild',
            hair: ['blonde', 'curly', 'braid', 'pony tail'],
            signature_look: 'none',
            video_theme: 'color blocked scenes with group',
            best_line: 'say my name, say my name',
            fierceness: 7,
            formation: true,
            dancers: 6
        },
        {
            title: 'Feeling Myself',
            group: true,
            group_name: 'Nicki Minaj featuring Beyonce',
            hair: ['blonde', 'waves'],
            signature_look: 'sporty bodysuit',
            video_theme: 'Coachella music festival',
            best_line: 'Im felling myself',
            fierceness: 9,
            formation: false,
            dancers: 0
        },
    ],
    movies: [{
            title: 'Austin Power\'s Goldmember',
            year: 2002,
            rating: 5
        },
        {
            title: 'Dreamgirls',
            year: 2006,
            rating: 7
        },
        {
            title: 'Obsessed',
            year: 2009,
            rating: 6
        },
        {
            title: 'Cadillac Records',
            year: 2008,
            rating: 8
        },
        {
            title: 'Life is But a Dream',
            year: 2013,
            rating: 6
        },
        {
            title: 'The Pink Panther',
            year: 2006,
            rating: 4
        },
        {
            title: 'Epic',
            year: 2013,
            rating: 7
        },
        {
            title: 'The Fighting Temptations',
            year: 2003,
            rating: 5
        }
    ]
};

const beySongs = beyonceHash.hits;
const beyMovies = beyonceHash.movies;

// 1. Print all the songs
function printAllSongs() {
    let allSongs = beySongs.map(hit => hit.title)
    console.log(`${allSongs}`)
}

// 2. Print all the movies
function printAllMovies() {
    let allMovies = beyMovies.map(movie => movie.title)
    console.log(`${allMovies}`)
}

// 3. Return an array of all Beyonce's hit song titles
function hitSongTitles() {
    return beySongs
}

// 4. Return an array of all Beyonce's fierceness ratings
function allFiercenessRatings() {
    const fierceBey = beySongs.map(hit => hit.fierceness)
    return fierceBey
}

// 5. Return all the songs where Beyonce is wearing a bodysuit or a bodysuit is part of the video theme
function songsWithBodySuits() {
    const beyBody = hitSongTitles().filter(hit => hit.signature_look.includes('bodysuit') || hit.video_theme.includes('bodysuit'))
    return beyBody.map(hit => hit.title)
}

// 6. Return an array with all of the songs where Beyonce's fierceness is greater than or equal to a given number
function getSongsByFiercenessGTE(number) {
    const fierceGTE = beySongs.filter(hit => hit.fierceness > number)
    return fierceGTE
}

// 7. Return an array with all of the movies Beyonce made after or during a given year
function getMoviesByDateGTE(year) {
    return beyMovies.filter(movie => movie.year >= year)
}

// 8. Return all hit songs where Beyonce was in a group
function groupHits() {
    return beySongs.filter(hit => hit.group === true)
}

// 9. Return a hit song where Beyonce's hair is blonde
function findBlondeHit() {
    return beySongs.filter(hit => hit.hair.includes('blonde'))
}

// 10. Return the hit song "Sorry"
function sorry() {
    return beySongs.find(hit => hit.title === ('Sorry'))
}

// 11. Return a given song
function getSong(song) {
    return beySongs.filter(hit => hit.title === song)
}

// 12. Return all hit songs where Beyonce's fierceness rating is 10
function fiercestHits() {
    return beySongs.filter(hit => hit.fierceness === 10)
}

// 13. Return the sum of Beyonce's fierceness value for all of her hit songs
function hitFiercenessSum() {
    let fierceSum = beySongs.map(hit => hit.fierceness)
    const sum = fierceSum.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    })
    return sum
}

// 14. Return the average fierceness value for all Beyonce's hit songs
function hitFiercenessAverage() {
    let fierceSum = beySongs.map(hit => hit.fierceness)
    return hitFiercenessSum() / fierceSum.length
}

// 15. Return the sum of Beyonce's rating value for all of her movies
function ratingSum() {
    let rateSum = beyMovies.map(movie => movie.rating)
    const sum = rateSum.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    })
    return sum
}

// 16. Return the average rating value for all of her movies
function ratingAverage() {
    let rateSum = beyMovies.map(movie => movie.rating)
    return ratingSum() / rateSum.length
}

// 17. Return the sum of the total number of dancers in all of the hit song videos
function hitDancerSum() {
    let dancerSum = beySongs.map(hit => hit.dancers)
    const sum = dancerSum.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    })
    return sum
}

// 18. Return an array of Beyonce's hairstyles without repeats
function uniqueHairstyles() {
    return [...new Set(beySongs.map(hit => hit.hair).reduce((array, hair) => array.concat(hair), []))]
}

// 19. Return an object where the properties are song names and the value is an object which contains that song's fierceness and the average fierceness for all songs
function songFiercenessByName() {
    return beySongs.reduce((hitObject, hit) => {
        return {
            ...hitObject,
            [hit.title]: {
                fierceness: hit.fierceness,
                average_fierceness: hitFiercenessAverage()
            }
        }
    })
}

// 20. Return an object where the properties are movie names and the value is an object which contains that movie's rating and the average rating for all movies
function movieRatingsByName() {
    return beyMovies.reduce((movieObject, movie) => {
        return {
            ...movieObject,
            [movie.title]: {
                rating: movie.rating,
                average_rating: ratingAverage()
            }
        }
    })
}

// 21. Return an object with Beyonce's hairstyles as the keys and a tally of each hairstyle, eg. ` {
function hairStyleFrequency() {
    return uniqueHairstyles().reduce((hairObject, hair) => {
        return {
            ...hairObject,
            [hair]: beySongs.map(hit => hit.hair).flat().filter(hairstyle => hairstyle === hair).length
        }
    }, {})
}