import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [previousEmojis, setPreviousEmojis] = useState<string[]>([]);
  const [currentEmoji, setCurrentEmoji] = useState<string>("");

  const handleChangeToApple = () => {
    if (currentEmoji !== "") {
      setPreviousEmojis((previousEmojis) => [...previousEmojis, currentEmoji]);
    }

    setCurrentEmoji("🍏");
  };

  const handleChangeToGrape = () => {
    if (currentEmoji !== "") {
      setPreviousEmojis((previousEmojis) => [...previousEmojis, currentEmoji]);
    }
    setCurrentEmoji("🍇");
  };

  const handleChangeToPear = () => {
    if (currentEmoji !== "") {
      setPreviousEmojis((previousEmojis) => [...previousEmojis, currentEmoji]);
    }
    setCurrentEmoji("🍐");
  };

  const handleChangeToCherry = () => {
    if (currentEmoji !== "") {
      setPreviousEmojis((previousEmojis) => [...previousEmojis, currentEmoji]);
    }
    setCurrentEmoji("🍒");
  };

  const handleChangeToLemon = () => {
    if (currentEmoji !== "") {
      setPreviousEmojis((previousEmojis) => [...previousEmojis, currentEmoji]);
    }
    setCurrentEmoji("🍋");
  };

  return (
    <>
      <h1>Emoji Picker</h1>
      <p>
        Your previous 5 emojis:{" "}
        {previousEmojis.slice(-5).map((emoji, index) => (
          <li key={index}>{emoji}</li>
        ))}
      </p>
      <p>Current emoji: {currentEmoji}</p>
      <hr />
      <button onClick={handleChangeToApple}>🍏</button>
      <button onClick={handleChangeToGrape}>🍇</button>
      <button onClick={handleChangeToPear}>🍐</button>
      <button onClick={handleChangeToCherry}>🍒</button>
      <button onClick={handleChangeToLemon}>🍋</button>
      <hr />
    </>
  );
}
