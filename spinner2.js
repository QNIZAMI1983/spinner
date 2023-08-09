const animationInterval = 200; // Time interval between animation frames

const frames = ['|', '/', '-', '\\']; // Array of animation frames

const animate = (frames, interval) => {
  let index = 0;

  const animation = setInterval(() => {
    process.stdout.write(`\r${frames[index]}   `); // Write the current animation frame
    index = (index + 1) % frames.length; // Move to the next frame in a circular manner
  }, interval);

  // Stop the animation after a certain time (e.g., 5 seconds)
  setTimeout(() => {
    clearInterval(animation);
    process.stdout.write('\n'); // Add a newline after stopping the animation
  }, 5000);
};

animate(frames, animationInterval);