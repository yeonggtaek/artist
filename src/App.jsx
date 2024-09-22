import { ArtistList } from "./component/ArtistList";
import { artists } from "./best-selling-music-artists";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <section className={styles.container}>
        <h1>Best-selling music artists</h1>
        <ArtistList artists={artists} />
      </section>
    </div>
  );
}

export default App;