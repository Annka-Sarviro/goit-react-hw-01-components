import PropTypes from 'prop-types';
import style from './title.module.css'

export const Title = ({title, stats}) => {
    return  (<div>
        {title && <h2 className={style.title}>{title}</h2>}
        </div>);
}

Title.propTypes = {
    title: PropTypes.string,
}