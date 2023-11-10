const randomNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 100);

      if (randomNum < 50) {
        console.log('randomNum rejected', randomNum);
        reject('randomNum is too small!');
      } else {
        console.log('randomNum resolved', randomNum);
        resolve(randomNum);
      }
    }, 1000);
  });
};

// const result = randomNumber();
// console.log(result);

// randomNumber()
//   .then((randomNum) => randomNum * 2)
//   .then((randomNumTimes2) => {
//     const randomNumTimes2Plus100 = randomNumTimes2 + 100;
//     if (randomNumTimes2Plus100 < 260) {
//       console.log('randomNumTimes2Plus100', randomNumTimes2Plus100);
//       throw new Error('final result too small');
//     }

//     return randomNumTimes2Plus100;
//   })
//   .then((randomNumTimes2Plus100) =>
//     console.log('final', randomNumTimes2Plus100)
//   )
//   .catch((err) => console.log(err));

const solveRandomNum = async () => {
  try {
    const randomNum = await randomNumber();
    console.log(randomNum);
  } catch (e) {
    console.log(e);
  }
};

solveRandomNum();
