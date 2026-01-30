// Quick API Key Tester
// Run with: node test-api-key.js

const GEMINI_API_KEY = 'PLAK_JE_API_KEY_HIER';

async function testApiKey() {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: 'Test: say hello' }] }]
        })
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('❌ API Key werkt NIET!');
      console.error('Status:', response.status);
      console.error('Error:', error);
      return;
    }

    const data = await response.json();
    console.log('✅ API Key werkt!');
    console.log('Response:', data.candidates[0].content.parts[0].text);
  } catch (error) {
    console.error('❌ Fout:', error.message);
  }
}

testApiKey();
