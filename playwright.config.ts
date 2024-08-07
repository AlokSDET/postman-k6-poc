import { defineConfig } from '@playwright/test';
export default defineConfig({
  use: {
    // All requests we send go to this API endpoint.
    baseURL: 'https://api.escuelajs.co/',
    extraHTTPHeaders: {
      // We set this header per GitHub guidelines.
      //'Accept': 'application/json',
      // Add authorization token to all requests.
      // Assuming personal access token available in the environment.
     // 'Authorization': `Bearer ${process.env.API_TOKEN}`,
    },
  }
});