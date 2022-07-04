
import {Profile} from './Profile/Profile';
import {Statistics} from './Statistics/Statistics' 
import { FriendList } from './FriendList/FriendList';



export const App = () => {
  return (<div className='container'>
    <Profile />
    <Statistics />
    <FriendList />
    </div>
  );
};
