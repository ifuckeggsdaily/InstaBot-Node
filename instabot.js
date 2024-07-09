const { IgApiClient } = require('instagram-private-api');
const fs = require('fs');
const Bluebird = require('bluebird');

const ig = new IgApiClient();

async function login() {
  // replace "your_username" and "your_password"
  ig.state.generateDevice('your_username');
  await ig.simulate.preLoginFlow();
  const loggedInUser = await ig.account.login('your_username', 'your_password');
  process.nextTick(async () => await ig.simulate.postLoginFlow());
  return loggedInUser;
}

async function welcomeAndFarewellBot() {
  await login();

  // replace "thread_id" to the thread id of the gc (getthreadid.js)
  const threadId = 'thread_id';

  const thread = ig.entity.directThread(threadId);

  
  thread.broadcastTypingIndicator();

  ig.realtime.on('receive', async (data) => {
    const message = data.message;
    if (message && message.thread_id === threadId) {
      if (message.item_type === 'link' && message.link.text === 'joined') {
        const joinedUser = message.link.username;
        await thread.broadcastText(`Welcome to the group, @${joinedUser}!`);
      } else if (message.item_type === 'link' && message.link.text === 'left') {
        const leftUser = message.link.username;
        await thread.broadcastText(`Goodbye @${leftUser}, we will miss you!`);
      }
    }
  });

  console.log('Instagram bot is online... \n ~ifuckeggsdaily');
}

welcomeAndFarewellBot().catch(console.error);
