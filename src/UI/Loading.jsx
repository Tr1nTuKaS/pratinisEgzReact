import css from "./Loading.module.css";
import PropTypes from "prop-types";

// <LoaderUI show={bool} noText={hides word loading}  />

function LoadUI(props) {
  if (props.show === false) return null;

  return (
    <div className={css.wrapper}>
      {!props.noText && <h3 className={css.title}>Loading</h3>}
      <div className={css.loader}></div>
    </div>
  );
}

LoadUI.propTypes = {
  show: PropTypes.bool,
  noText: PropTypes.bool,
};

export default LoadUI;
