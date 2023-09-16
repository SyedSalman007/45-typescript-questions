"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist, album_title, tracks) {
    var album = {
        artist: artist,
        album_title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Artist1", "Title 1"));
console.log(make_album("Artist2", "Title 2"));
console.log(make_album("Artist3", "Title 3", 22));
