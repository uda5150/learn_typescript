const wakeUp = ms => {
  setTimeout( () => { console.log('起きた'); }, ms);
};

const greet = () => {
  console.log('おやすみ');
  wakeUp(2000);
  console.log('おはよう！');
}



const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const promiseGreet = () => {
  console.log('おやすみ');

  delay(2000)
    .then(() => {
      console.log('起きた');
    })
    .then(() => {
      console.log('おはよう！');
    })
    .catch(err => {
      console.error('睡眠例外です：', err);
    })
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncGreet = async () => {
  console.log('おやすみ');

  try {
    await sleep(2000);
    console.log('起きた');
    console.log('おはよう！');
  } catch (err) {
    console.error('睡眠例外です：', err);
  }
}

asyncGreet();