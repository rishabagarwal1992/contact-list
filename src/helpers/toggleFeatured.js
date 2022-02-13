const findFriend = (id, list) => {
    let friends = [...list];
    let idx = friends.findIndex(val => { return val.id === id });
    return idx;
}
export default findFriend;