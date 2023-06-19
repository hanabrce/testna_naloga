import Graph from 'components/Graph.js'

const Claimed = ({ claimed }) => {
    if (claimed) {
    return (
      <div className="tooltip-wrapper">
        <span className="profile-claimed">Profile claimed</span>
        <div className="tooltip">
            <h3>Vote for subgenres</h3>
            <p>Don’t agree with the subgenres? Add the ones you think are missing or vote for existing to get yours on top!</p>
            <div className="stats-sheet">
                <Graph title='Alternative rock' percentage='47' />
                <Graph title='Alternative metal' percentage='23' />
                <Graph title='Progressive rock' percentage='15' />
            </div>
            <p>
                <button className="btn btn-shadow">Vote now</button>
            </p>
        </div>
    </div>
    );
  }

  return null;
};

export default Claimed;