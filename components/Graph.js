const Graph = ({ title, percentage }) => {
  return (
    <div className="row">
      <h5>{title}</h5>
      <div className="graph-line">
        <span className="line" style={{ width: `${percentage}` + "%" }}>
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default Graph;
