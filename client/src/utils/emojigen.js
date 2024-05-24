const emojis = ["❤️", "🚀", "🤖", "👻", "🤡"];

const random_gen = () => {
  let emoji = null;

  for (let i = 0; i < emojis.length; i++) {
    emoji = emojis[Math.floor(Math.random() * emojis.length)];
  }
  return emoji;
};

export default random_gen;
