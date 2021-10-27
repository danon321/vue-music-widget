const _songs = [
    {
        'id': 1, 
        'title': "Still Don’t Know", 
        'artist': "Icona Pop",
        'image': 'http://eurochannel.com/images/stories/Icona_Pop_01.jpg',
        'file':'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        'length':'3:16',
        'favourite': false
    },
    {
        'id': 2, 
        'title': "I Love It", 
        'artist': "Icona Pop",
        'image': 'http://eurochannel.com/images/stories/Icona_Pop_01.jpg',
        'file':'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        'length':'2:35',
        'favourite': false
    },
    {
        'id': 3, 
        'title': "Girlfriend", 
        'artist': "Icona Pop",
        'image': 'http://eurochannel.com/images/stories/Icona_Pop_01.jpg',
        'file':'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        'length':'2:50',
        'favourite': false
    },
    {
        'id': 4, 
        'title': "We Got the World", 
        'artist': "Icona Pop",
        'image': 'http://eurochannel.com/images/stories/Icona_Pop_01.jpg',
        'file':'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        'length':'3:07',
        'favourite': false
    },
    {
        'id': 5, 
        'title': "Nights Like This", 
        'artist': "Icona Pop",
        'image': 'http://eurochannel.com/images/stories/Icona_Pop_01.jpg',
        'file':'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        'length':'3:24',
        'favourite': false
    },
    {
        'id': 6, 
        'title': "Nights Like This", 
        'artist': "Icona Pop",
        'image': 'http://eurochannel.com/images/stories/Icona_Pop_01.jpg',
        'file':'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        'length':'3:24',
        'favourite': false
    },
    {
        'id': 7, 
        'title': "Nights Like This", 
        'artist': "Icona Pop",
        'image': 'http://eurochannel.com/images/stories/Icona_Pop_01.jpg',
        'file':'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        'length':'3:24',
        'favourite': false
    },
    {
        'id': 8, 
        'title': "Nights Like This", 
        'artist': "Icona Pop",
        'image': 'http://eurochannel.com/images/stories/Icona_Pop_01.jpg',
        'file':'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        'length':'3:24',
        'favourite': false
    }
]

export default {
    getSongs (cb) {
      setTimeout(() => cb(_songs), 100)
    },
    
    getSongById(id){
        return _songs.filter(song => {
            return song.id == id;
        })
    }
}