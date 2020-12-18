import PropType from "prop-types";

const Jumbotron = (props) => {
  return (
    <header className="jumbotron my-4">
      <h1 className="display-3">{props.title}</h1>
      <p className="lead">{props.description}</p>
      <a href={props.buttonUrl} className="btn btn-primary btn-lg" target="_blank" rel="noreferrer">
        {props.buttonLabel}
      </a>
    </header>
  );
};

Jumbotron.propTypes = {
  title: PropType.string,
  description: PropType.string,
  buttonLabel: PropType.string,
  buttonUrl: PropType.string,
};

export default Jumbotron;
