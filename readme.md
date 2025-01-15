run this : 
node .\server.js

## Deploying on Netlify

1. Create a Netlify account at [Netlify](https://www.netlify.com/).
2. Install the Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```
3. Run the following command to login to your Netlify account:
   ```bash
   netlify login
   ```
4. Navigate to your project directory and run:
   ```bash
   netlify init
   ```
   Follow the prompts to link your project to a new or existing site on Netlify.
5. Deploy your site with:
   ```bash
   netlify deploy
   ```
   Follow the prompts to deploy your site. Use the `--prod` flag to deploy to production:
   ```bash
   netlify deploy --prod
   ```

6. Configure the build and start commands:
   - Go to your site settings on Netlify.
   - Navigate to the "Build & Deploy" section.
   - Under "Build settings", set the "Build command" to:
     ```bash
     npm run build
     ```
   - Set the "Publish directory" to the directory where your build output is located (e.g., `dist` or `build`).
   - If your project requires a start command, add it under "Advanced build settings" > "Build environment variables" as a new variable:
     - Key: `START_CMD`
     - Value: `node server.js`

7. Trigger a new deploy from the Netlify dashboard or by pushing changes to your repository.