import { useState } from "react";

export function AddFriendForm({ onAdd }) {
  const [friendName, setFriendName] = useState("");
  const [friendImage, setFriendImage] = useState(
    "https://png.pngitem.com/pimgs/s/352-3524469_person-silhouette-hd-png-download.png"
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (!friendImage || !friendName) return;

    const newFriend = {
      id: Date.now(),
      balance: 0,
      name: friendName,
      image: friendImage,
    };

    console.log(newFriend);

    onAdd(newFriend);

    setFriendImage("");
    setFriendName("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-add-friend">
        <label>👩🏼‍🤝‍🧑🏻 Friend's name</label>
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
