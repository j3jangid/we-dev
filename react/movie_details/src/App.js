import NavBar from "./NavBar";
import AnimeCard from "./animeCard";
import animeDetails from "./animeDetails";

function App() {
  return (
    <>
      <NavBar />
      {animeDetails.map((data, index) => (
        <AnimeCard
          key={index}
          animeName={data.anime_name}
          writer={data.writer}
          voice_artist={data.voice_artist}
          director={data.director}
          year_of_release={data.year_of_release}
          duration={data.duration}
          age_rating={data.age_rating}
          status={data.status}
          total_episodes={data.total_episodes}
          popularity={data.popularity}
          imageLink={data.image_link}
          imdbLink={data.imdb_link}
          watchLink={data.watch_link}
        />
      ))}
    </>
  );
}

export default App;
