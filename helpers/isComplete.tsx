export default function isComplete() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(!!Math.round(Math.random()));
    }, 1500);
  });
}
