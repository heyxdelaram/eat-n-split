import { Friend } from "./Friend";

export function FriendsList({ friends, onSelect, onClose, isOpen }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          isOpen={isOpen}
          onClose={onClose}
          onSelect={onSelect}
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
