const { IgApiClient } = require('instagram-private-api');
const fs = require('fs');
const Bluebird = require('bluebird');

const ig = new IgApiClient();

async function login() {
  // change 'your_username' and 'your_password' 
  ig.state.generateDevice('your_username');
  await ig.simulate.preLoginFlow();
  const loggedInUser = await ig.account.login('your_username', 'your_password');
  process.nextTick(async () => await ig.simulate.postLoginFlow());
  return loggedInUser;
}

async function getThreadId() {
  await login();

  // fetch list of threads
  const inboxFeed = ig.feed.directInbox();
  const threads = await inboxFeed.items();

  //  thread IDs and their names
  threads.forEach(thread => {
    console.log(`Thread ID: ${thread.thread_id}, Thread Name: ${thread.thread_title || 'No Title'}`);
  });
}

getThreadId().catch(console.error);
