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
        }
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

const allSongs = beyonceHash.hits.map(hit => hit.title);
const allMovies = beyonceHash.movies.map(movie => movie.title);


// 1. Print all the songs
function printAllSongs() {
    console.log(`${allSongs}`)
};

// 2. Print all the movies
function printAllMovies() {
    console.log(`${allMovies}`)
}

// 3. Return an array of all Beyonce's hit song titles
function hitSongTitles() {
    return allSongs;

};


// 4. Return an array of all Beyonce's fierceness ratings
function allFiercenessRatings() {
    const fiercenessRating = beyonceHash.hits.map(hit => hit.fierceness)
    return fiercenessRating
}

// 5. Return all the songs where Beyonce is wearing a bodysuit or a bodysuit is part of the video theme
function songsWithBodySuits() {
    return beyonceHash.hits.filter(hit => hit.signature_look.includes('bodysuit') || hit.video_theme.includes('bodysuit'))
}



// 6. Return an array with all of the songs where Beyonce's fierceness is greater than or equal to a given number
function getSongsByFiercenessGTE() {}

// 7. Return an array with all of the movies Beyonce made after or during a given year
function getMoviesByDateGTE() {}

// 8. Return all hit songs where Beyonce was in a group
function groupHits() {}

// 9. Return a hit song where Beyonce's hair is blonde
function findBlondeHit() {}

// 10. Return the hit song "Sorry"
function sorry() {}

// 11. Return a given song
function getSong() {}

// 12. Return all hit songs where Beyonce's fierceness rating is 10
function fiercestHits() {}

// 13. Return the sum of Beyonce's fierceness value for all of her hit songs
function hitFiercenessSum() {}

// 14. Return the average fierceness value for all Beyonce's hit songs
function hitFiercenessAverage() {

}

// 15. Return the sum of Beyonce's rating value for all of her movies
function ratingSum() {}

// 16. Return the average rating value for all of her movies
function ratingAverage() {}

// 17. Return the sum of the total number of dancers in all of the hit song videos
function hitDancerSum() {}

// 18. Return an array of Beyonce's hairstyles without repeats
function uniqueHairstyles() {}

// 19. Return an object where the properties are song names and the value is an object which contains that song's fierceness and the average fierceness for all songs
function songFiercenessByName() {
    return beyonceHash.hits
        .map(hit => {
            return {
                title: hit.title,
                fierceness: hit.fierceness,
                average_fierceness: hitFiercenessAverage(),
            }
        })
        .reduce((songsByName, hit) => {
            let fierceness = {
                ...songsByName,
                [hit.title]: hit,

            }
            delete hit.title;
            return fierceness;
        });
}

// 20. Return an object where the properties are movie names and the value is an object which contains that movie's rating and the average rating for all movies
function movieRatingsByName() {}


// 21. Return an object with Beyonce's hairstyles as the keys and a tally of each hairstyle, eg. `{ "blonde": 3, ... }`
function hairStyleFrequency() {};


// Testing

// 1.
printAllSongs()

// 2.
// printAllMovies(beyonceHash)

// 3.
// console.log(hitSongTitles(beyonceHash))

// 4.
// console.log(allFiercenessRatings(beyonceHash))

// 5.
// console.log(songsWithBodySuits(beyonceHash))

// 6.
// console.log(getSongsByFiercenessGTE(9))

// 7.
// console.log(getMoviesByDateGTE(2008))

// 8.
// console.log(groupHits(beyonceHash))

// 9.
// console.log(findBlondeHit())

// 10.
// console.log(sorry(beyonceHash))

// 11.
// console.log(getSong("Let Me Upgrade You"))

// 12.
// console.log(fiercestHits(beyonceHash))

// 13.
// console.log(hitFiercenessSum(beyonceHash))

// 14.
// console.log(hitFiercenessAverage())

// 15.
// console.log(ratingSum())

// 16.
// console.log(ratingAverage())

// 17.
// console.log(hitDancerSum())

// 18.
// console.log(uniqueHairstyles())

// 19.
// console.log(songFiercenessByName())

// 20.
// console.log(movieRatingsByName())

// 21.
// console.log(hairStyleFrequency())
}