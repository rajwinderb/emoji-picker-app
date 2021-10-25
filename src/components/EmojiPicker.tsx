import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [previousEmoji, setPreviousEmoji] = useState<string>();
  const [currentEmoji, setCurrentEmoji] = useState<string>();

  const handleChangeToApple = () => {
    setPreviousEmoji(currentEmoji);
    setCurrentEmoji("🍏");
  };

  const handleChangeToGrape = () => {
    setPreviousEmoji(currentEmoji);
    setCurrentEmoji("🍇");
  };

  const handleChangeToPear = () => {
    setPreviousEmoji(currentEmoji);
    setCurrentEmoji("🍐");
  };

  const handleChangeToCherry = () => {
    setPreviousEmoji(currentEmoji);
    setCurrentEmoji("🍒");
  };

  const handleChangeToLemon = () => {
    setPreviousEmoji(currentEmoji);
    setCurrentEmoji("🍋");
  };

  return (
    <>
      <h1>Emoji Picker</h1>
      <p>Your previous emoji: {previousEmoji}</p>
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
