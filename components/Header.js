import useFetch from "@/hooks/useFetch";
import { artistListUrl } from "@/utils/constants";
import Link from "next/link";

const Header = () => {
  const { data } = useFetch(artistListUrl);

  return (
    <header className="header">
      <div className="page">
        <a href="#" className="logo">
          <img src="images/logo-v.svg" alt="Viberate" /> Viberate
        </a>

        <nav className="navigation-primary">
          <ul className="menu-sys">
            <li>
              <button className="btn btn-menu search">Search</button>
            </li>
            <li>
              <button className="btn btn-menu more">More</button>
            </li>
          </ul>

          <ul className="menu">
            {data?.all_artists.map((artist) => (
              <li key={artist?.artist_uuid}>
                <Link href={`/${artist?.artist_uuid}`}>
                  {artist?.artist_name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
