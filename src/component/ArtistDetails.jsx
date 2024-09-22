import styles from "./ArtistDetails.module.css";
import PropTypes from "prop-types";
function ArtistDetails({ artist }) {
  return (
    <div className={styles.artistDetailContainer}>
      <div
        className={styles.artistImage}
        style={{
          backgroundImage: `url(${artist.photo_url})`,
        }}
      ></div>
      <div>
        <h2>{artist.name}</h2>
        <div>
          <div>Country: {artist.country}</div>
          <div>Years Active: {artist.years_active}</div>
        </div>
      </div>
    </div>
  );
}

ArtistDetails.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    photo_url: PropTypes.string.isRequired,
    years_active: PropTypes.string.isRequired,
  }).isRequired,
};
export default ArtistDetails;
