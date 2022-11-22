import css from './Statistics.module.css';

import PropTypes from 'prop-types';

export default function Statistics( { filesType, title ='' } ) {
    function getRandomHexColor() {
       return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
    }

    return (
      <section className={css.statistics}>
            {title.length > 0 && <h2 className={css.title}>{title}</h2>}
          <ul className={css.stat__list}>
              {filesType.map(element => {
                  return (
                      < li key={element.id} className={css.list__item} style={{ backgroundColor: getRandomHexColor() }} >
                        <span className={css.label}>{element.label}</span>
                        <span className={css.percentage}>{element.percentage}%</span>
                      </li>
                  )
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