const Icon = ({ name, link }) => {
  return (
    <li>
      <a href={link} className={`btn social-icon ${name}`}>
        {name}
      </a>
    </li>
  );
};

export default Icon;
