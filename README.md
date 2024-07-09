


## Installation and Deployment

### Prerequisites
- Node.js (v12 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ifuckeggsdaily/InstaBot-Node.git
   cd InstaBot-Node
   ```

2. **Install Dependencies**
   ```bash
   npm install instagram-private-api fs bluebird
   ```

### Configuration

1. **Get Instagram Credentials**
   Ensure you have your Instagram username and password ready. **Do not share these credentials publicly.**

2. **Get the Thread ID**
   1. Replace `'your_username'` and `'your_password'` in `getthreadid.js` with your Instagram credentials.
   2. Run the script to fetch the thread IDs:
      ```bash
      node getthreadid.js
      ```
   3. Note down the thread ID of the group chat where you want the bot to operate.

3. **Update Bot Script**
   1. Replace `'your_username'`, `'your_password'`, and `'your_thread_id'` in `instagrambot.js` with your Instagram credentials and the thread ID obtained from the previous step.
   
### Deployment

1. **Run the Bot**
   Start the bot using Node.js:
   ```bash
   node instagrambot.js
   ```

2. **Monitor the Bot**
   Ensure the bot is running correctly by monitoring the console output. The bot should log into Instagram and start listening for join and leave events in the specified group chat.

### Notes
- **Security**: Handle your Instagram credentials securely. Avoid hardcoding them in scripts. Consider using environment variables for sensitive data.
- **Instagram ToS**: Automating interactions can violate Instagram's terms of service. Use this bot responsibly.
- **Ethical Use**: Ensure you have permission from all group chat participants to use this bot. Avoid spamming or harassing users.
---
###  ~ifuckeggsdaily (you know who)

