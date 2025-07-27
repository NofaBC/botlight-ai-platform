// api/config.js
// This file should be placed in: /api/config.js in your repository

export default function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get the API key from Vercel environment variables
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  // Return the API key securely
  res.status(200).json({
    apiKey: apiKey,
    status: 'configured'
  });
}
