import "./Input.css";
import PropTypes from "prop-types";

const Input = ({ text, result }) => {
  return (
    <div className="input-wrapper">
      <div className="result">
        <h1>{result}</h1>
      </div>
      <div className="text">
        <h3>{text}</h3> {/* Consider using <p> if it's not a heading */}
      </div>
    </div>
  );
};

Input.propTypes = {
  text: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};

export default Input;
