/**
 * Automatic Trello Board & List Creator Script
 * 
 * Usage: node scripts/create-trello-board.js <TRELLO_API_KEY> <TRELLO_TOKEN>
 */

const https = require('https');

const apiKey = process.argv[2];
const token = process.argv[3];

if (!apiKey || !token) {
  console.log("❌ Error: Trello API Key and Token are required.");
  console.log("Usage: node scripts/create-trello-board.js <TRELLO_API_KEY> <TRELLO_TOKEN>");
  process.exit(1);
}

const boardName = "GTM Prospect Pipeline";
const listsToCreate = [
  "1. Scraped Prospects (Apollo/Apify)",
  "2. Audit & Loom Needed",
  "3. 90-Sec Loom Sent",
  "4. Discovery Call Scheduled",
  "5. Proposal / Staging Demo",
  "6. 🎉 CLOSED WON"
];

function makeRequest(options, postData = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(data);
        }
      });
    });
    req.on('error', reject);
    if (postData) req.write(postData);
    req.end();
  });
}

async function createBoardAndLists() {
  try {
    console.log(`🚀 Creating Trello Board "${boardName}"...`);
    
    // 1. Create Board
    const createBoardUrl = `/1/boards/?name=${encodeURIComponent(boardName)}&defaultLists=false&key=${apiKey}&token=${token}`;
    const board = await makeRequest({
      hostname: 'api.trello.com',
      path: createBoardUrl,
      method: 'POST'
    });

    if (!board.id) {
      console.log("❌ Failed to create board:", board);
      return;
    }

    console.log(`✅ Board Created Successfully!`);
    console.log(`   Board Name: ${board.name}`);
    console.log(`   Board ID: ${board.id}`);
    console.log(`   Board URL: ${board.url}\n`);

    // 2. Create Lists
    console.log("📋 Creating the 6 Pipeline Lists...");
    for (let i = 0; i < listsToCreate.length; i++) {
      const listName = listsToCreate[i];
      const createListUrl = `/1/lists?name=${encodeURIComponent(listName)}&idBoard=${board.id}&pos=${(i + 1) * 1000}&key=${apiKey}&token=${token}`;
      const list = await makeRequest({
        hostname: 'api.trello.com',
        path: createListUrl,
        method: 'POST'
      });
      console.log(`   [${i + 1}/6] Created List: "${list.name}" (ID: ${list.id})`);
    }

    console.log("\n🎉 ALL DONE! Your Trello Board is 100% Ready!");
    console.log(`👉 Open Trello Board: ${board.url}`);

  } catch (err) {
    console.error("❌ Error creating Trello board:", err);
  }
}

createBoardAndLists();
