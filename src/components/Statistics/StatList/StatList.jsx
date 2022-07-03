import PropTypes from 'prop-types';
import style from './statList.module.css'

export const StatList = ({stats}) => {
    return   <ul className={style.statList}>
                {stats.map((stat) => {
                    return <li key={stat.id} className={style.item}>
                        <span className={style.label}>{stat.label}</span>
                        <span className={style.percentage}>{stat.percentage}%</span>
                    </li>
                    })
                }
              </ul>}

StatList.propTypes = {
    stats: PropTypes.arrayOf(
            PropTypes.shape(
                {
                 id: PropTypes.string.isRequired,
                 item: PropTypes.string,
                 label: PropTypes.string,
                 percentage: PropTypes.number,
                }
            )
    )
}