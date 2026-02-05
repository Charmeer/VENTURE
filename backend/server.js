const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.get('/api/problem', (req, res) => {
  try {
    const data = require('./data/problem.json');
    res.json(data.problem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load problem data' });
  }
});

app.get('/api/technology', (req, res) => {
  try {
    const data = require('./data/technology.json');
    res.json(data.technology);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load technology data' });
  }
});

app.get('/api/process', (req, res) => {
  try {
    const data = require('./data/process.json');
    res.json(data.process);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load process data' });
  }
});

app.get('/api/market', (req, res) => {
  try {
    const data = require('./data/market.json');
    res.json(data.market);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load market data' });
  }
});

app.get('/api/investment', (req, res) => {
  try {
    const data = require('./data/investment.json');
    res.json(data.investment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load investment data' });
  }
});

app.get('/api/operations', (req, res) => {
  try {
    const data = require('./data/operations.json');
    res.json(data.operations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load operations data' });
  }
});

app.get('/api/revenue', (req, res) => {
  try {
    const data = require('./data/revenue.json');
    res.json(data.revenue);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load revenue data' });
  }
});

app.get('/api/profitability', (req, res) => {
  try {
    const data = require('./data/profitability.json');
    res.json(data.profitability);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load profitability data' });
  }
});

app.get('/api/risks', (req, res) => {
  try {
    const data = require('./data/risks.json');
    res.json(data.risks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load risks data' });
  }
});

app.get('/api/impact', (req, res) => {
  try {
    const data = require('./data/impact.json');
    res.json(data.impact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load impact data' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});