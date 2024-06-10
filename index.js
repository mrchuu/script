import fetch from "node-fetch";

// Define the API endpoint
const apiEndpoint = "https://baca.onrender.com/api/items";

// Function to call the API and log the result
async function fetchAndLogData() {
  try {
    // Call the API
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // add other headers as required
      },
    });

    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response data
    const data = await response.json();

    // Log the result
    console.log("API Response:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function immediately and then every 5 minutes
fetchAndLogData();
setInterval(fetchAndLogData, 300000); // 300000 ms = 5 minutes
