const alb = ["Single", "Taylor Swift", "Fearless", "Speak Now", "RED", "1989", "reputation", "Lover", "folklore", "evermore", "Midnights"];

class Song {
    title;
    track
    album;
    mins;
    secs;
    // length;
    constructor(title, track, album, mins, secs) {
        this.title = title;
        this.track = track;
        this.album = album;
        this.mins = mins;
        this.secs = secs;
        // length = Date.UTC(1970, 0, 1, 0, this.mins, this.secs);
    }
    toString() {
        return this.title;
    }
    trackListing() {
        return this.track + ". " + this.title + " (" + this.mins + ":" + this.getSecs() + ")"
    }
    getSecs() {
        if (this.secs > 9) {
            return this.secs;
        }
        return "0" + this.secs;
    }
    randomTime() {
        let temp = Math.floor(Math.random() * (60 * this.mins + this.secs));
        if((temp % 60) > 9  ){
        return Math.floor(temp / 60)  + ":"+ (temp % 60) ; 
        }
        return Math.floor(temp / 60)  + ":0"+ (temp % 60) ; 

    }
    //Could format toString, to give us the HTML DOM stuff for styling. 
}

// const lh = new Song("Lavender Haze", 1, "Midnights", 3, 22);

const songs = {
    1: {
        title: "Taylor Swift",
        classId: "debut",
        length: 15,
        1: new Song("Tim McGraw", 1, alb[1], 3, 52),
        2: new Song("Picture To Burn", 2, alb[1], 2, 53),
        3: new Song("Teardrops On My Guitar - Radio Single Remix", 3, alb[1], 3, 23),
        4: new Song("A Place in this World", 4, alb[1], 3, 19),
        5: new Song("Cold As You", 5, alb[1], 3, 59),
        6: new Song("The Outside", 6, alb[1], 3, 27),
        7: new Song("Tied Together with a Smile", 7, alb[1], 4, 8),
        8: new Song("Stay Beautiful", 8, alb[1], 3, 56),
        9: new Song("Should've Said No", 9, alb[1], 4, 02),
        10: new Song("Mary's Song (Oh My My My)", 10, alb[1], 3, 33),
        11: new Song("Our Song", 11, alb[1], 3, 21),
        12: new Song("I'm Only Me When I'm With You", 12, alb[1], 3, 33),
        13: new Song("Invisible", 13, alb[1], 3, 23),
        14: new Song("A Perfectly Good Heart", 14, alb[1], 3, 40),
        15: new Song("Teardrops on My Guitar - Pop Version", 15, alb[1], 2, 59),
    },
    2: {
        title: "Fearless",
        classId: "fearless",
        length: 26, //26
        1: new Song("Fearless", 1, alb[2], 4, 1),
        2: new Song("Fifteen", 2, alb[2], 4, 54),
        3: new Song("Love Story", 3, alb[2], 3, 55),
        4: new Song("Hey Stephen", 4, alb[2], 4, 14),
        5: new Song("White Horse", 5, alb[2], 3, 54),
        6: new Song("You Belong With Me", 6, alb[2], 3, 51),
        7: new Song("Breathe (feat. Colbie Caillat)", 7, alb[2], 4, 23),
        8: new Song("Tell Me Why", 8, alb[2], 3, 20),
        9: new Song("You're Not Sorry", 9, alb[2], 4, 21),
        10: new Song("The Way I Loved You", 10, alb[2], 4, 3),
        11: new Song("Forever & Always", 11, alb[2], 3, 45),
        12: new Song("The Best Day", 12, alb[2], 4, 5),
        13: new Song("Change", 13, alb[2], 3, 39),
        14: new Song("Jump Then Fall", 14, alb[2], 3, 57),
        15: new Song("Untouchable", 15, alb[2], 5, 12),
        16: new Song("Forever & Always (Piano Version)", 16, alb[2], 4, 27),
        17: new Song("Come In With The Rain", 17, alb[2], 3, 57),
        18: new Song("Superstar", 18, alb[2], 4, 23),
        19: new Song("The Other Side Of The Door", 19, alb[2], 3, 58),
        20: new Song("Today Was A Fairytale", 20, alb[2], 4, 1),
        21: new Song("You All Over Me", 21, alb[2], 3, 40),
        22: new Song("Mr. Perfectly Fine", 22, alb[2], 4, 37),
        23: new Song("We Were Happy", 23, alb[2], 4, 4),
        24: new Song("That's When (feat. Keith Urban)", 24, alb[2], 3, 9),
        25: new Song("Don't You", 25, alb[2], 3, 28),
        26: new Song("Bye Bye Baby", 26, alb[2], 4, 2)
    },
    3: {
        title: "Speak Now",
        classId: "speakNow",
        length: 20,
        1: new Song("Mine", 1, alb[3], 3, 50),
        2: new Song("Sparks Fly", 2, alb[3], 4, 20),
        3: new Song("Back To December", 3, alb[3], 4, 53),
        4: new Song("Speak Now", 4, alb[3], 4, 0),
        5: new Song("Dear John", 5, alb[3], 6, 43),
        6: new Song("Mean", 6, alb[3], 3, 57),
        7: new Song("The Story Of Us", 7, alb[3], 4, 25),
        8: new Song("Never Grow Up", 8, alb[3], 4, 50),
        9: new Song("Enchanted", 9, alb[3], 5, 52),
        10: new Song("Better Than Revenge", 10, alb[3], 3, 37),
        11: new Song("Innocent", 11, alb[3], 5, 2),
        12: new Song("Haunted", 12, alb[3], 4, 2),
        13: new Song("Last Kiss", 13, alb[3], 6, 7),
        14: new Song("Long Live", 14, alb[3], 5, 17),
        15: new Song("Ours", 15, alb[3], 3, 57),
        16: new Song("If This Was A Movie", 16, alb[3], 3, 54),
        17: new Song("Superman", 17, alb[3], 4, 35),
        18: new Song("Back To December - Acoustic", 18, alb[3], 4, 52),
        19: new Song("Haunted - Acoustic Version", 19, alb[3], 3, 37),
        20: new Song("Mine - POP Mix", 20, alb[3], 3, 50)
    },
    4: {
        title: "RED",
        classId: "red",
        length: 30,
        1: new Song("State Of Grace", 1, alb[4], 4, 55),
        2: new Song("Red", 2, alb[4], 3, 43),
        3: new Song("Treacherous", 3, alb[4], 4, 2),
        4: new Song("I Knew You Were Trouble", 4, alb[4], 3, 39),
        5: new Song("All Too Well", 5, alb[4], 5, 29),
        6: new Song("22", 6, alb[4], 3, 50),
        7: new Song("I Almost Do", 7, alb[4], 4, 4),
        8: new Song("We Are Never Getting Back Together", 8, alb[4], 3, 13),
        9: new Song("Stay Stay Stay", 9, alb[4], 3, 25),
        10: new Song("The Last Time (feat. Gary Lightbody of Snow Patrol)", 10, alb[4], 4, 59),
        11: new Song("Holy Ground", 11, alb[4], 3, 22),
        12: new Song("Sad Beautiful Tragic", 12, alb[4], 4, 44),
        13: new Song("The Lucky One", 13, alb[4], 4, 0),
        14: new Song("Everything Has Changed (feat. Ed Sheeran)", 14, alb[4], 4, 5),
        15: new Song("Starlight", 15, alb[4], 3, 40),
        16: new Song("Begin Again", 16, alb[4], 3, 58),
        17: new Song("The Moment I Knew", 17, alb[4], 4, 45),
        18: new Song("Come Back...Be Here", 18, alb[4], 3, 43),
        19: new Song("Girl At Home", 19, alb[4], 3, 40),
        20: new Song("State Of Grace (Acoustic Version)", 20, alb[4], 5, 21),
        21: new Song("Ronan", 21, alb[4], 4, 24),
        22: new Song("Better Man", 22, alb[4], 4, 57),
        23: new Song("Nothing New (feat. Phoebe Bridgers)", 23, alb[4], 4, 18),
        24: new Song("Babe", 24, alb[4], 3, 44),
        25: new Song("Message In A Bottle", 25, alb[4], 3, 45),
        26: new Song("I Bet You Think About Me (feat. Chris Stapleton)", 26, alb[4], 4, 45),
        27: new Song("Forever Winter", 27, alb[4], 4, 23),
        28: new Song("Run (feat. Ed Sheeran)", 28, alb[4], 4, 0),
        29: new Song("The Very First Night", 29, alb[4], 3, 20),
        30: new Song("All Too Well (10 Minute Version)", 30, alb[4], 10, 13),
    },
    5: {
        title: "1989",
        classId: "l989",
        length: 16,
        1: new Song("Welcome To New York", 1, alb[5], 3, 32),
        2: new Song("Blank Space", 2, alb[5], 3, 51),
        3: new Song("Style", 3, alb[5], 3, 51),
        4: new Song("Out Of The Woods", 4, alb[5], 3, 55),
        5: new Song("All You Had To Do Was Stay", 5, alb[5], 3, 13),
        6: new Song("Shake It Off", 6, alb[5], 3, 39),
        7: new Song("I Wish You Would", 7, alb[5], 3, 27),
        8: new Song("Bad Blood", 8, alb[5], 3, 31),
        9: new Song("Wildest Dreams", 9, alb[5], 3, 40),
        10: new Song("How You Get The Girl", 10, alb[5], 4, 7),
        11: new Song("This Love", 11, alb[5], 4, 10),
        12: new Song("I Know Places", 12, alb[5], 3, 15),
        13: new Song("Clean", 13, alb[5], 4, 31),
        14: new Song("Wonderland", 14, alb[5], 4, 5),
        15: new Song("You Are In Love", 15, alb[5], 4, 27),
        16: new Song("New Romantics", 16, alb[5], 3, 50),
    },
    6: {
        title: "reputation",
        classId: "reputation",
        length: 15,
        1: new Song("...Ready For It?", 1, alb[6], 3, 28),
        2: new Song("End Game [feat. Ed Sheeran and Future]", 2, alb[6], 4, 4),
        3: new Song("I Did Something Bad", 3, alb[6], 3, 58),
        4: new Song("Don't Blame Me", 4, alb[6], 3, 56),
        5: new Song("Delicate", 5, alb[6], 3, 52),
        6: new Song("Look What You Made Me Do", 6, alb[6], 3, 31),
        7: new Song("So It Goes...", 7, alb[6], 3, 47),
        8: new Song("Gorgeous", 8, alb[6], 3, 29),
        9: new Song("Getaway Car", 9, alb[6], 3, 53),
        10: new Song("King Of My Heart", 10, alb[6], 3, 34),
        11: new Song("Dancing With Our Hands Tied", 11, alb[6], 3, 31),
        12: new Song("Dress", 12, alb[6], 3, 50),
        13: new Song("This Is Why We Can't Have Nice Things", 13, alb[6], 3, 27),
        14: new Song("Call It What You Want", 14, alb[6], 3, 23),
        15: new Song("New Year's Day", 15, alb[6], 3, 55)
    },
    7: {
        title: "Lover",
        classId: "lover",
        length: 18,
        1: new Song("I Forgot That You Existed", 1, alb[7], 2, 50),
        2: new Song("Cruel Summer", 2, alb[7], 2, 58),
        3: new Song("Lover", 3, alb[7], 3, 41),
        4: new Song("The Man", 4, alb[7], 3, 10),
        5: new Song("The Archer", 5, alb[7], 3, 31),
        6: new Song("I Think He Knows", 6, alb[7], 2, 53),
        7: new Song("Miss Americana & The Heartbreak Prince", 7, alb[7], 3, 54),
        8: new Song("Paper Rings", 8, alb[7], 3, 42),
        9: new Song("Cornelia Street", 9, alb[7], 4, 47),
        10: new Song("Death By A Thousand Cuts", 10, alb[7], 3, 18),
        11: new Song("London Boy", 11, alb[7], 3, 10),
        12: new Song("Soon You'll Get Better (feat. The Chicks)", 12, alb[7], 3, 21),
        13: new Song("False God", 13, alb[7], 3, 20),
        14: new Song("You Need To Calm Down", 14, alb[7], 2, 51),
        15: new Song("Afterglow", 15, alb[7], 3, 43),
        16: new Song("ME! (feat. Brendon Urie of Panic! At The Disco)", 16, alb[7], 3, 13),
        17: new Song("It's Nice To Have A Friend", 17, alb[7], 2, 30),
        18: new Song("Daylight", 18, alb[7], 4, 53)
    },
    8: {
        title: "folklore",
        classId: "folklore",
        length: 17,
        1: new Song("the 1", 1, alb[8], 3, 30),
        2: new Song("cardigan", 2, alb[8], 3, 59),
        3: new Song("the last great american dynasty", 3, alb[8], 3, 50),
        4: new Song("exile (feat. Bon Iver)", 4, alb[8], 4, 45),
        5: new Song("my tears ricochet", 5, alb[8], 4, 15),
        6: new Song("mirrorball", 6, alb[8], 3, 28),
        7: new Song("seven", 7, alb[8], 3, 28),
        8: new Song("august", 8, alb[8], 4, 21),
        9: new Song("this is me trying", 9, alb[8], 3, 15),
        10: new Song("illicit affairs", 10, alb[8], 3, 10),
        11: new Song("invisible string", 11, alb[8], 4, 12),
        12: new Song("mad woman", 12, alb[8], 3, 57),
        13: new Song("epiphany", 13, alb[8], 4, 49),
        14: new Song("betty", 14, alb[8], 4, 54),
        15: new Song("peace", 15, alb[8], 3, 54),
        16: new Song("hoax", 16, alb[8], 3, 40),
        17: new Song("the lakes - bonus track", 17, alb[8], 3, 31)
    },
    9: {
        title: "evermore",
        classId: "evermore",
        length: 17,
        1: new Song("willow", 1, alb[9], 3, 34),
        2: new Song("champagne problems", 2, alb[9], 4, 4),
        3: new Song("gold rush", 3, alb[9], 3, 5),
        4: new Song("'tis the damn season", 4, alb[9], 3, 49),
        5: new Song("tolerate ti", 5, alb[9], 4, 5),
        6: new Song("no body, no crime (feat. HAIM)", 6, alb[9], 3, 35),
        7: new Song("happiness", 7, alb[9], 5, 15),
        8: new Song("dorothea", 8, alb[9], 3, 45),
        9: new Song("coney island (feat. The National)", 9, alb[9], 4, 35),
        10: new Song("ivy", 10, alb[9], 4, 20),
        11: new Song("cowboy like me", 11, alb[9], 4, 35),
        12: new Song("long story short", 12, alb[9], 3, 35),
        13: new Song("marjorie", 13, alb[9], 4, 17),
        14: new Song("closure", 14, alb[9], 3, 0),
        15: new Song("evermore (feat. Bon Iver)", 15, alb[9], 5, 4),
        16: new Song("right where you left me - bonus track", 16, alb[9], 4, 5),
        17: new Song("it's time to go - bonus track", 17, alb[9], 4, 14)
    },
    10: {
        title: "Midnights",
        classId: "midnights",
        length: 20,
        1: new Song("Lavender Haze", 1, "Midnights", 3, 22),
        2: new Song("Maroon", 2, alb[10], 3, 38),
        3: new Song("Anti-Hero", 3, alb[10], 3, 20),
        4: new Song("Snow On The Beach (feat. Lana Del Ray)", 4, alb[10], 4, 16),
        5: new Song("You're On Your Own, Kid", 5, alb[10], 3, 14),
        6: new Song("Midnight Rain", 6, alb[10], 2, 54),
        7: new Song("Question...?", 7, alb[10], 3, 30),
        8: new Song("Vigilante Shit", 8, alb[10], 2, 44),
        9: new Song("Bejeweled", 9, alb[10], 3, 14),
        10: new Song("Labyrinth", 10, alb[10], 4, 7),
        11: new Song("Karma", 11, alb[10], 3, 24),
        12: new Song("Sweet Nothing", 12, alb[10], 3, 8),
        13: new Song("Mastermind", 13, alb[10], 3, 11),
        14: new Song("The Great War", 14, alb[10], 4, 0),
        15: new Song("Bigger Than The Whole Sky", 15, alb[10], 3, 38),
        16: new Song("Paris", 16, alb[10], 3, 16),
        17: new Song("High Infidelity", 17, alb[10], 3, 51),
        18: new Song("Glitch", 18, alb[10], 2, 28),
        19: new Song("Would've, Could've, Should've", 19, alb[10], 4, 20),
        20: new Song("Dear Reader", 20, alb[10], 3, 45)
    }
}

let al = Math.floor(Math.random() * alb.length);
function randomizeButton() {
    al = Math.floor(Math.random() * alb.length);
    so = Math.floor(Math.random() * songs[al].length) + 1;
    // document.getElementById("output").innerHTML = "<p>"+ songs[al][so].title + "</p>";
    document.getElementById("output").innerHTML =
        `<table> 
    <tr>
        <td colspan='2'><span class="${songs[al].classId}" style="font-size: 180%;">${songs[al][so]}</span></td>
    </tr>
    <tr>
        <td><span class="${songs[al].classId}Title" style="font-size: 140%;">${songs[al].title}</span><br>Album</td>
        <td><span class="${songs[al].classId}"> ${songs[al][so].mins}:${songs[al][so].getSecs()}</span><br>duration</td>
    </tr>
    <tr>
    <td><span class="${songs[al].classId}">${so}</span> <br>track</td>
    <td><span class="${songs[al].classId}">${songs[al][so].randomTime()}</span><br>random time</td>
    </tr>
    </table>
    `;
    // document.getElementById("output").innerHTML =  `<p class="${songs[al].classId}">`+ songs[al][Math.floor(Math.random() * songs[al].length) + 1] + "</p>";
    // printAlbums(8); //this prints out the entire album. 
}

// <tr>
//     <td>total streams</td>
//     <td>4:30:20<br>steaming</td>
// </tr>

function printAlbums(album) {
    let str = `<div class="${songs[album].classId}Title"><b>${songs[album].title}</b>\n`;
    for (let i = 1; i <= songs[album].length; i++) {
        str += `<p class="${songs[album].classId}">` + songs[album][i].trackListing() + "</p>";
    }
    document.getElementById("output").innerHTML = str + "</div>";
    // return str + "</div>";


}

