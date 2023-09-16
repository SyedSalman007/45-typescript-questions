export {}

interface Album {
    artist: string,
    album_title: string,
    tracks?: number
}

function make_album(artist:string, album_title:string, tracks?: number): Album
{
    const album: Album = {
        artist,
        album_title,
    }

    // const album: Album = {
    //     artist: name,
    //     album_title: title
    // }  can also do this way

    if(tracks !== undefined)
    {
        album.tracks = tracks;
    }

    return album
}

console.log(make_album("Artist1", "Title 1"));
console.log(make_album("Artist2", "Title 2"));
console.log(make_album("Artist3", "Title 3", 22));
