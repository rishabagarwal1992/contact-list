import { useState, createContext, useEffect } from "react";
import Head from "./components/Head";
import Search from "./components/Search";
import FriendListContainer from "./components/FriendList/containers/FriendListContainer";
import Pagination from "./components/Pagination";
import createFriend from './helpers/createFriend';
import findFriend from "./helpers/toggleFeatured";
export const AppContext = createContext(null);
const PAGE_LENGTH = 4;
const App = () => {
	const [friendList, setFriendList] = useState([]);
	const [viewList, setViewList] = useState([]);
	const [viewPage, setViewPage] = useState(0);
	useEffect(() => {
		updateViewList();
	}, [viewPage, friendList]);
	const handleSearch = (val) => {
		console.log("handle");
		let friends = [...friendList];
		//console.log(friends);
		let id = friends.length ? friends[friends.length - 1]["id"] + 1 : 1;
		let result = createFriend(val, id);
		setFriendList([...friends, result]);
	}
	const delFriend = (id) => {
		let friends = [...friendList];
		let idx = findFriend(id, friends);
		friends = [...friends.slice(0, idx), ...friends.slice(idx + 1)];
		setFriendList(friends);
	};

	const toggleFeatured = (id) => {
		let friends = [...friendList];
		let idx = findFriend(id, friends);
		let updatedFriend = { ...friends[idx], featured: !friends[idx]["featured"] };
		friends = [updatedFriend, ...friends.slice(0, idx), ...friends.slice(idx + 1)];
		setFriendList(friends);
	};

	const updateCurrentPage = (pageNum) => {
		setViewPage(pageNum);
	}
	const updateViewList = () => {
		let friends = [...friendList];
		friends = friends.slice(viewPage * PAGE_LENGTH, PAGE_LENGTH * (viewPage + 1));
		setViewList(friends);
	}
	return (
		<AppContext.Provider value={{ delFriend: delFriend, toggleFeatured: toggleFeatured }}>
			<div id="container">
				<Head />
				<Search onSearch={handleSearch} />
				<FriendListContainer friends={viewList} />
				{friendList.length > PAGE_LENGTH ? <Pagination list={friendList} pageLength={PAGE_LENGTH} updateCurrentPage={updateCurrentPage} viewPage={viewPage} /> : null}
			</div>
		</AppContext.Provider>
	)
}
export default App;
