import Icon from "components/Icon.js";
import BookingButton from "./BookingBtn";
import Trending from "./Trending";
import Claimed from "./Claimed";
import Graph from "./Graph";

const Body = ({
  artistName,
  img,
  country,
  genre,
  subgeneres,
  socials,
  graphs,
  booking,
  trending,
  claimed,
}) => {
  return (
    <div className="container">
      <main className="main">
        <section className="section section-artist-detail trending claimed">
          <div className="page">
            <div className="col visual">
              <figure style={{ backgroundImage: `url(${img})` }}>
                <figcaption>
                  <button className="btn btn-claim-music-id">
                    Claim music_id
                  </button>
                </figcaption>
              </figure>
            </div>

            <div className="col-wrapper">
              <div className="col info">
                <div className="col-content">
                  <div className="info-wrapper">
                    <div className="title-wrapper">
                      <BookingButton booking={booking} />
                      <h1 className="title">
                        {artistName}

                        <Claimed claimed={claimed} />
                        <Trending trending={trending} />
                      </h1>
                    </div>

                    <div className="row">
                      <button className="btn btn-save long">Follow</button>
                      <button className="btn btn-share">
                        Share
                        <span>Link copied to clipboard</span>
                      </button>
                    </div>

                    <div className="row">
                      <label>Origin</label>
                      <a className="btn btn-filter-tag">{country}</a>
                    </div>

                    <div className="row">
                      <label>Genre</label>
                      <span className="btn btn-filter-tag">{genre}</span>
                    </div>

                    <div className="row">
                      <label>Subgenres</label>
                      {subgeneres?.subgenres?.map((subgenere) => (
                        <span
                          key={subgenere.key}
                          className="btn btn-filter-tag"
                        >
                          {subgenere.name}
                        </span>
                      ))}
                      <div className="tooltip-wrapper">
                        <button className="btn btn-add">Add subgenre</button>
                        <div className="tooltip">
                          <h3>Vote for subgenres</h3>
                          <p>
                            Don’t agree with the subgenres? Add the ones you
                            think are missing or vote for existing to get yours
                            on top!
                          </p>
                          <div className="stats-sheet">
                            <Graph title="Alternative rock" percentage="47" />
                            <Graph title="Alternative metal" percentage="23" />
                            <Graph title="Progressive rock" percentage="15" />
                          </div>
                          <p>
                            <button className="btn btn-shadow">Vote now</button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="footer-detail">
                    <ul className="social-list">
                      {socials?.social_links?.map((social) => (
                        <Icon
                          key={social.key}
                          name={social.channel}
                          link={social.link}
                        />
                      ))}
                    </ul>

                    <div className="tooltip-wrapper">
                      <button className="btn btn-add">Add links</button>
                      <div className="tooltip">
                        <h3>Got more info?</h3>
                        <p>
                          Add Place's links so everyone can see their social
                          media highlights.
                        </p>
                        <p>
                          <button className="btn btn-shadow">Add links</button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col stats">
                <div className="col-content">
                  <div className="stats-sheet">
                    <label>Most popular in</label>
                    {graphs?.popularity?.map((city) => (
                      <Graph
                        key={city.key}
                        title={city.city}
                        percentage={city.percentage}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button className="btn btn-scroll-down">Scroll down</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Body;
