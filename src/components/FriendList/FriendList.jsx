
import friends from 'friends.json'
import { FriendListItem } from './FriendListItem/FriendListItem'


export const FriendList = () =>{
    return <ul className="friend-list">
       { friends.map((friend) => {
            return  <FriendListItem key={friend.id} friend = {friend}/>
        })}       
  </ul>
}