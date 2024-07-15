# Fomo Factory Assignment

## Description

This project collects and displays real-time price data for selected stocks and cryptocurrencies.

## Installation and Setup Instructions

### Clone the Repository

First, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/gauri004/fomo-factory
```

Navigate to the project directory:

```bash
cd fomo-factory
```

### Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```
MONGODB_URI=<Your MongoDB URI>
LIVE_COIN_WATCH_API_KEY=<Your Live Coin Watch API Key>
```

### Running the Development Server

Start the development server with the following command:

```bash
npm run dev
```

The application should now be running at `http://localhost:3000`.

## Features

- Real-time price updates for selected cryptocurrency.
- Data stored in MongoDB.
- Dynamic table updating with new data.
- Crypto selector.

## Technologies Used

- Next.js
- TypeScript
- Redux
- MongoDB
- TailwindCSS & ShadCN UI

## Scripts

- `dev`: Runs the development server.
- `build`: Builds the application for production.
- `start`: Starts the application in production mode.
