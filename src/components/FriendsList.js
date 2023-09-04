import { Friend } from "./Friend";

export function FriendsList({ friends, onSelect, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          selectedFriend={selectedFriend}
          onSelect={onSelect}
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
