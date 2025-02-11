import React from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [playerName, setPlayerName] = React.useState(initialName);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function hangleChangeName(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = !isEditing ? (
    <span className="player-name">{playerName}</span>
  ) : (
    <input
      onChange={hangleChangeName}
      type="text"
      required
      value={playerName}
    />
  );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
