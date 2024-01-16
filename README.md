# DNDE API
```wip project using Bun and Hono as alternatives to node and express```

Created as a small project to try out Bun and Hono.

## Description
This project is a DNDEAPI that provides APIs for retrieving information about monsters from dnd.
Additionally will allow custom monster generation. Frontend and API's

## View
1. Visit ```https://dndeapi.nritsondev.workers.dev/api/monsters/all```
2. See API Endpoints below (currently 2 available, all monsters api request for json and a html return for single monster)

## Installation
1. Clone the repository: ```git clone https://github.com/NickRitson/dndeapi_cloudflare.git```
2. Install dependencies: ```bun install```

## Usage
1. Start the server: ```bun dev```
2. Access the APIs at `http://localhost:8787/api`

## API Endpoints
- `/api/monsters`: Retrieves a list of monsters.
- `/api/monsters/:name`: Retrieves json for a specific monster. - *disabled temporarily*
- `/api/monster/:name`: Returns html page with information about specific monster

## TODO
- API status dashboard for monitoring
- Additional CRUD routes
- Custom monster frontend/backend using AI for image and information generation
- Make Responsive
- Look at and modify design for when all data is used (current is just to display and not final)
- Load experimental css feature in hono and clean up ugly object css

## License
This project is licensed under the [MIT License](LICENSE).