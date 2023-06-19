import { artistDetailsUrl } from "@/utils/constants";
import Body from "@/components/Body";

const ArtistPage = ({ artist }) => {
  return (
    <div>
      <Body
        artistName={artist.name}
        img={artist.image}
        country={artist.country.name}
        genre={artist.genre.name}
        subgeneres={artist}
        socials={artist}
        graphs={artist}
        booking={artist.booking_available}
        trending={artist.trending}
        claimed={artist.claimed}
      />
    </div>
  );
};

export default ArtistPage;

export const getServerSideProps = async (context) => {
  const {
    query: { artist_id },
  } = context;
  const res = await fetch(artistDetailsUrl(artist_id));
  const json = await res.json();

  return {
    props: {
      artist_id,
      artist: json.data,
    },
  };
};
