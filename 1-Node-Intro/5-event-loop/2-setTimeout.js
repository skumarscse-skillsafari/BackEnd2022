console.log("I will be executed first..."); // 1

setTimeout(() => {
  console.log("I am from setTimeout function"); // 3
}, 0);

console.log("I will be executed second"); // 2
