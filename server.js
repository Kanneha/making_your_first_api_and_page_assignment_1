// Boilerplate Code for Virtual Assistant API
const express = require('express');
const app = express();

/*
Task:
You need to build an API for a virtual assistant that provides customized responses.

Requirements:
1. Create a GET endpoint at "/assistant/greet".
2. The endpoint should accept a "name" as a query parameter (e.g., /assistant/greet?name=John).
3. The API should return a JSON response with:
   a. A personalized greeting using the name provided.
   b. A cheerful message based on the current day of the week.

Example Responses:
- For Monday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Happy Monday! Start your week with energy!"
  }
- For Friday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "It's Friday! The weekend is near!"
  }
- For other days:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Have a wonderful day!"
  }

Add the required logic below to complete the API.
*/


// Function to get the current day of the week
function getDayMessage() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const dayIndex = today.getDay();
  const dayName = days[dayIndex];

  // Day-specific messages
  if (dayName === 'Monday') {
    return "Happy Monday! Start your week with energy!";
  } else if (dayName === 'Friday') {
    return "It's Friday! The weekend is near!";
  } else {
    return "Have a wonderful day!";
  }
}

// API Endpoint to greet the user and show a day-specific message
app.get('/assistant/greet', (req, res) => {
  const name = req.query.name; // Read the 'name' query parameter

  if (!name) {
    return res.status(400).send('Please provide a name.');
  }

  // Personalized welcome message
  const greetingMessage = `Hello, ${name}! Welcome to our assistant app!`;
  const dayMessage = getDayMessage(); // Get the day-specific message

  // Return the response as JSON
  return res.json({
    welcomeMessage: greetingMessage,
    dayMessage: dayMessage
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});

