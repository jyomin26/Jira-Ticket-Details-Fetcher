const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const { JIRA_BASE_URL, JIRA_ISSUE_ID, JIRA_EMAIL, JIRA_API_TOKEN } = process.env;

// Fetch Jira issue by ID
async function fetchJiraIssue(issueId) {
  const url = `${JIRA_BASE_URL}/rest/api/3/issue/${JIRA_ISSUE_ID}`

  try {
    const response = await axios.get(url, {
      auth: {
        username: JIRA_EMAIL,
        password: JIRA_API_TOKEN,
      },
      headers: {
        'Accept': 'application/json'
      }
    });

    // Log response status code
    console.log(`HTTP Status: ${response.status} ${response.statusText}`);

    const data = response.data;

    // Create output json file
    const outputDir = path.join(__dirname, 'output');
    if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
    }

    // Prettify the output json file
    const filePath = path.join(outputDir, `${issueId}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Prettified issue data saved to ${filePath}`);


  } catch (error) {
    console.error('Error fetching Jira issue:', error.message);
  }
}

fetchJiraIssue('Ticket_Details');


