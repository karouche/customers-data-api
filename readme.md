  
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
 
