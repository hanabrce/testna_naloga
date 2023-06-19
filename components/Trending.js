const Trending = ({ trending }) => {
  if (trending) {
    return <span className="trending-icon">Trending</span>;
  }

  return null;
};

export default Trending;
