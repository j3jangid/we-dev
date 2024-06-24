import React from 'react';

const AnimeCard = ({ animeName, writer, voice_artist, director, year_of_release, duration, age_rating, status, total_episodes, popularity, imageLink, imdbLink, watchLink }) => {
    return (
        <div className="animeCard">
            <div className="animeCardImage">
                <img className="cardImage" src={imageLink} alt="Movie Image" />
            </div>
            <div className="animeDetails">
                <h3>{animeName}</h3>
                <div>
                    <h4>Writer: {writer}</h4>
                    <h4>Voice Artist: {voice_artist}</h4>
                    <h4>Director: {director}</h4>
                </div>
            </div>
            <div className="animeDetailsExt">
                <h5>Year of Release: {year_of_release}</h5>
                <h5>Duration: {duration}</h5>
                <h5>Age Rating: {age_rating}</h5>
                <h5>Status: {status}</h5>
                <h5>Total Episodes: {total_episodes}</h5>
                <h5>Popularity: {popularity}</h5>
            </div>
            <div className="animeGotoSec">
                <button className="animeGotoBtn"><a href={imdbLink} className="webLink">Learn More</a></button>
                <button className="animeGotoBtn"><a href={watchLink} className="watchLink">Watch Now</a></button>
            </div>
        </div>
    );
};

export default AnimeCard;
