export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ message: 'Missing URL' });
  }

  try {
    // Example: Use fetch or scraper here (you can replace this with real parsing later)
    const siteResponse = await fetch(url);
    const html = await siteResponse.text();

    // For demo: Just return a basic success message
    return res.status(200).json({ message: `Fetched site content from ${url}`, preview: html.slice(0, 500) });

  } catch (err) {
    return res.status(500).json({ message: 'Failed to fetch site content', error: err.toString() });
  }
}
