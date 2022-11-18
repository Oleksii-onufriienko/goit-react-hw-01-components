import css from './Statistics.module.css';

import PropTypes from 'prop-types';

export default function Statistics( { filesType } ) {
    function getRandomHexColor() {
       return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
    }
    return (
<section className={css.statistics}>
            <h2 className={css.title}>Upload stats</h2>
   <ul className={css.stat__list}>
                {filesType.map(element => {
                    const liStyle = {
                        display: "grid",
                        padding: "20px 30px",
                        justifyItems: "center",
                        backgroundColor: getRandomHexColor(),
                    };
                       return (< li key = { element.id } style = {liStyle} >
                        <span className={css.label}>{element.label}</span>
                        <span className={css.percentage}>{element.percentage}%</span>
                      </li>)
                })}
  </ul>
</section>
    );
};

Statistics.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
}