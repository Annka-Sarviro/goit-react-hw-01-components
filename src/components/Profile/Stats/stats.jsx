import PropTypes from 'prop-types';
import style from './stats.module.css'

export const Stats = ({stats}) => {
    return  <ul className={style.stats}>
                <li>
                    <span className={style.label}>Followers</span>
                    <span className={style.quantity}>{stats.followers}</span>
                </li>
                <li>
                    <span className={style.label}>Views</span>
                    <span className={style.quantity}>{stats.views}</span>
                </li>
                <li>
                    <span className={style.label}>Likes</span>
                    <span className={style.quantity}>{stats.likes}</span>
                </li>
            </ul>
}

Stats.propTypes = {
    stats: PropTypes.shape( 
    {   followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    })
}