import Body from "@/components/Body";
import { Inter } from "next/font/google";
import placeholderImage from "../public/images/siddharta.jpg";
import Icon from "@/components/Icon";
import Graph from "@/components/Graph";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container">
        <main className="main">
          <section className="section section-artist-detail trending claimed">
            <div className="page">
              <div className="col visual">
                <figure
                  style={{ backgroundImage: `url(${placeholderImage.src})` }}
                >
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
                        <button className="btn btn-solid border btn-booking-request">
                          Booking Request
                        </button>
                        <h1 className="title">
                          Siddharta
                          <div className="tooltip-wrapper">
                            <span className="profile-claimed">
                              Profile claimed
                            </span>
                            <div className="tooltip">
                              <h3>Vote for subgenres</h3>
                              <p>
                                Don’t agree with the subgenres? Add the ones you
                                think are missing or vote for existing to get
                                yours on top!
                              </p>
                              <div className="stats-sheet">
                                <Graph
                                  title="Alternative rock"
                                  percentage="47"
                                />
                                <Graph
                                  title="Alternative metal"
                                  percentage="23"
                                />
                                <Graph
                                  title="Progressive rock"
                                  percentage="15"
                                />
                              </div>
                              <p>
                                <button className="btn btn-shadow">
                                  Vote now
                                </button>
                              </p>
                            </div>
                          </div>
                          <span className="trending-icon">Trending</span>
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
                        <a className="btn btn-filter-tag">Slovenia</a>
                      </div>

                      <div className="row">
                        <label>Genre</label>
                        <span className="btn btn-filter-tag">Rocks</span>
                      </div>

                      <div className="row">
                        <label>Subgenres</label>
                        <span class="btn btn-filter-tag">Alternative rock</span>
                        <span class="btn btn-filter-tag">
                          Alternative metal
                        </span>
                        <span class="btn btn-filter-tag">Progressive rock</span>
                        <div className="tooltip-wrapper">
                          <button className="btn btn-add">Add subgenre</button>
                          <div className="tooltip">
                            <h3>Vote for subgenres</h3>
                            <p>
                              Don’t agree with the subgenres? Add the ones you
                              think are missing or vote for existing to get
                              yours on top!
                            </p>
                            <div className="stats-sheet">
                              <Graph title="Alternative rock" percentage="47" />
                              <Graph
                                title="Alternative metal"
                                percentage="23"
                              />
                              <Graph title="Progressive rock" percentage="15" />
                            </div>
                            <p>
                              <button className="btn btn-shadow">
                                Vote now
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="footer-detail">
                      <ul className="social-list">
                        <Icon name="facebook" />
                        <Icon name="twitter" />
                        <Icon name="instagram" />
                        <Icon name="spotify" />
                        <Icon name="songkick" />
                        <Icon name="soundcloud" />
                        <Icon name="youtube" />
                        <Icon name="beatport" />
                        <Icon name="mixcloud" />
                        <Icon name="gigatools" />
                        <Icon name="eventbrite" />
                        <Icon name="skiddle" />
                        <Icon name="ticketmaster" />
                        <Icon name="tumblr" />
                        <Icon name="google_plus" />
                        <Icon name="google_play_music" />
                        <Icon name="bandsintown" />
                        <Icon name="itunes" />
                        <Icon name="shazam" />
                        <Icon name="deezer" />
                        <Icon name="medium" />
                        <Icon name="telegram" />
                        <Icon name="home_page" />
                        <Icon name="tidal" />
                        <Icon name="home_page" />
                        <Icon name="napster" />
                        <Icon name="amazon_music" />
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
                            <button className="btn btn-shadow">
                              Add links
                            </button>
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
                      <Graph title="Ljubljana" percentage="47" />
                      <Graph title="Maribor" percentage="23" />
                      <Graph title="Celje" percentage="15" />
                      <Graph title="Postojna" percentage="11" />
                      <Graph title="Koper" percentage="9" />
                    </div>
                  </div>
                </div>
              </div>

              <button className="btn btn-scroll-down">Scroll down</button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
