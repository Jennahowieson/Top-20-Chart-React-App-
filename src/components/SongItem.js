import React from 'react';

const SongItem = ({ song, index }) => {
    const chartPosition = index + 1;
    const songImg = song['im:image'][2]['label']
    const songUrl = song['link'][0]['attributes']['href']

    return (
        <div id='one-song'>
            <a href={songUrl}>
                <h2>{chartPosition}  </h2>
                <h3>{song['im:name']['label']}</h3>
                <p>{song['im:artist']['label']} </p>
                <img src={songImg}></img>
            </a>
        </div>
    )

}

export default SongItem