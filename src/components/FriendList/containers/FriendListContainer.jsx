import Friend from '../components/Friend';
import './index.scss';

const FriendListContainer = (props) => {
    const { friends } = props;

    return (
        <div className="friend-list-container">
            {friends && friends.map(friend => {
                return <Friend value={friend} key={`${friend.id}-${friend.name}`} />
            })}
        </div>
    )
}
export default FriendListContainer;