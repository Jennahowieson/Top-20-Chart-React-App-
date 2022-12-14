import React, { useState, useEffect } from 'react';
import SongList from '../components/SongList';
import './SongContainer.css'

const SongContainer = () => {
    const [songs, setSongs] = useState ([]);

    useEffect(()=>{
        getSongs();
    },[])

    const getSongs = function () {
        fetch ('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(result => result.json())
        .then(songs => setSongs(songs.feed.entry))
    }

    return (
        <div>
            <SongList songs={songs}/>
        </div>
    )
}

export default SongContainer
