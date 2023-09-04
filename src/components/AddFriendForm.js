import { useState } from "react";

export function AddFriendForm({ onAdd }) {
  const [friendName, setFriendName] = useState("");
  const [friendImage, setFriendImage] = useState(
    "https://i.pravatar.cc/48?u=118836?=34"
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (!friendImage || !friendName) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      balance: 0,
      name: friendName,
      image: `${friendImage}?=${id}`,
    };

    console.log(newFriend);

    onAdd(newFriend);

    setFriendImage("");
    setFriendName("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-add-friend">
        <label>👩🏼‍🤝‍🧑🏻 Friend name</label>
        <input
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
          type="text"
        />
        <label>🌆 Image URL</label>
        <input
          value={friendImage}
          onChange={(e) => setFriendImage(e.target.value)}
          type="text"
        />
        <button className="button">Add</button>
      </form>
    </>
  );
}
