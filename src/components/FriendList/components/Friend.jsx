import { AppContext } from '../../../App';
import { useContext } from 'react';
import './Friend.scss';

const Friend = (props) => {
	const { value } = props;
	const context = useContext(AppContext);
	const handleDelete = (id) => {
		context.delFriend(id);
	}

	const toggleFeaturedStatus = (id) => {
		context.toggleFeatured(id);
	}
	return (
		<div className={`friend-list-item`}>
			<div className="friend-details">
				<div className="friend-name" title={value.name}>
					{value.name}
				</div>
				<div className="friend-role">
					is a friend
				</div>
			</div>
			<div className="friend-actions">
				<div className={`action-featured`} onClick={(e) => { toggleFeaturedStatus(value.id) }}>
					{value.featured ?
						<img src={`./static/images/star-filled.png`} width={`16`} height={`16`} />
						: <img src={`./static/images/star.png`} width={`16`} height={`16`} />
					}
				</div>
				<div className="action-delete" onClick={(e) => { handleDelete(value.id) }}>
					<img src="https://img.icons8.com/wired/20/000000/filled-trash.png" />
				</div>
			</div>
		</div>
	);
}

export default Friend;