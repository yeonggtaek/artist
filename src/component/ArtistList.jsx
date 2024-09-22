import PropTypes from "prop-types";
import ArtistDetails from "./ArtistDetails";
import styles from "./ArtistList.module.css";

export const ArtistList = ({ artists }) => {
  return (
    <section className={styles.section}>
      {artists.map((artist, index) => (
        <ArtistDetails key={index} artist={artist} />
      ))}
    </section>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired,
};