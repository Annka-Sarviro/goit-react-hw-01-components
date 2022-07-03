import user from 'user.json';
import { Descripsion } from './Descripsion/Descripsion';
import { Stats } from './Stats/stats';
import style from './profile.module.css';


export const Profile = () => {
    return <div className={style.profile}>
           <Descripsion username={user.username}
                        tag={user.tag}
                        location={user.location}
                        avatar={user.avatar}
            />

           <Stats  stats={user.stats}/>
        </div>
  
}

