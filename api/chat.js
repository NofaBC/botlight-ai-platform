export default async function handler(req, res) {
  const { message, botConfig } = req.body;
  
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: "anthropic/claude-3.5-sonnet",
      messages: [
        {
          role: "system", 
          content: `You are ${botConfig.name}. ${botConfig.trainingData}`
        },
        { role: "user", content: message }
      ]
    })
  });
  
  const data = await response.json();
  res.json({ response: data.choices[0].message.content });
}
