
let str = "";

class Songs {
    title;
    track;
    mins;
    streams;
    strStreams;
    constructor(title, track, mins, streams) {
        this.title = title;
        this.track = track;
        this.streams = streams;
        this.mins = mins;
        this.strStreams = parseInt(streams, 10).toLocaleString('en-US')
    }
    toString() {
        return `
        <tr>
            <td>${this.track}</td>
            <td>${this.title}</td>
            <td>${this.mins} m</td>
            <td>${this.strStreams}</td>
        </tr>`
    }

}

function display() {
    str = "";
    album.forEach(function (e) {
        str += e;
    });
    document.getElementById("output").innerHTML = `<table>
    <tr> 
        <th>Track</th>
        <th>Song Title</th>
        <th>My Streams</th>
        <th>Total Streams</th>
    </tr>` + str + "</table >";
}

function clickOrder() {
    album.sort(
        (p1, p2) =>
            (p1.track < p2.track) ? -1 : (p1.track > p2.track) ? 1 : 0);
   
    display();

}
function clickStreams() {
    album.sort(
        (p1, p2) =>
            (p1.streams < p2.streams) ? 1 : (p1.streams > p2.streams) ? -1 : 0);
    display();
}
function clickFavs(){
    album.sort(
        (p1, p2) =>
            (p1.mins < p2.mins) ? 1 : (p1.mins > p2.mins) ? -1 : 0);
    display();
}


const album = [
    new Songs("Lavendar Haze", 1, 466, 264704393),
    new Songs("Maroon", 2, 232, 207184573),
    new Songs("Anti-Hero", 3, 403, 534044971),
    new Songs("Snow On The Beach", 4, 248, 214720147),
    new Songs("Your're On Your Own, Kid", 5, 276, 207068479),
    new Songs("Midnight Rain", 6, 206, 253476063),
    new Songs("Question...?", 7, 223, 154396385),
    new Songs("Vigilante Shit", 8, 146, 164171745),
    new Songs("Bejeweled", 9, 239, 192125706),
    new Songs("Labyrinth", 10, 196, 127420655),
    new Songs("Karma", 11, 261, 194745196),
    new Songs("Sweet Nothing", 12, 216, 122955932),
    new Songs("Mastermind", 13, 254, 136216277),
    new Songs("The Great War", 14, 358, 97719642),
    new Songs("Bigger Than The Whole Sky", 15, 411, 80553335),
    new Songs("Paris", 16, 204, 77192099),
    new Songs("High Infidelity", 17, 190, 67154067),
    new Songs("Glitch", 18, 104, 57692205),
    new Songs("Would've, Could've, Should've", 19, 614, 104609284),
    new Songs("Dear Reader", 20, 250, 56332796)
];
clickOrder(); 


//Next do Something to add a number to shows individual ranks. 