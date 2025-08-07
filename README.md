Jira Ticket Detail Fetcher
This Node.js script fetches the details of a Jira issue using the Jira REST API and saves the output in a prettified JSON file.


Quick Start:
Clone the repository and run the following scripts sequentially in the terminal from the root of the project:

To install the required dependencies:
npm install

To run the project:
node index.js


Configuration:
The configuration of the project is saved in the .env file in the root of the project

JIRA_TICKET_ID=SCRUM-1
You can change the Jira ticket ID by editing the JIRA_TICKET_ID value in the .env file.

Following tickets IDs are available for the POC:
SCRUM-1
SCRUM-2
SCRUM-3


Output
The fetched ticket data/details will be saved in the output folder in prettified view.
Filename.format: Ticket_Details.jsons


Improvements:
The output file can be configured to fetch/use specific values.

