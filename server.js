import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();

const CURRENT_WORKING_DIR = process.cwd();

const frontendDistPath = path.join(CURRENT_WORKING_DIR, 'project', 'dist');
const indexFilePath = path.join(frontendDistPath, 'index.html');

// Startup check: log whether the frontend build file exists. This helps Render logs
// show exactly which path the server expects and whether the build step ran.
const indexExists = fs.existsSync(indexFilePath);
console.info('Expected frontend index path:', indexFilePath);
console.info('Frontend index exists:', indexExists);
// Behavior control: by default only log. To make the server fail fast when the
// frontend build is missing (so a deploy fails), set the environment variable
// FAIL_ON_MISSING_BUILD=true in Render (or your environment).
const failOnMissing = process.env.FAIL_ON_MISSING_BUILD === 'true';
if (!indexExists) {
    console.error('\n*** WARNING: frontend build not found.');
    console.error('Make sure your Render Build Command runs `npm run build` inside the `project` folder so that `project/dist/index.html` is created.');
    console.error('Suggested Build Command: npm install --prefix project && npm run build --prefix project');
    console.error('Start Command should be: node server.js');
    if (failOnMissing) {
        console.error('FAIL_ON_MISSING_BUILD is true — exiting with code 1 to fail the deploy.');
        process.exit(1);
    } else {
        console.warn('Continuing despite missing frontend build. To fail the deploy when missing, set FAIL_ON_MISSING_BUILD=true');
    }
}

app.use(express.static(frontendDistPath));

app.get(/.*/, (req, res) => {
    const url = req.originalUrl;
    if (url.startsWith('/dist/') || url.includes('.')) {
        return res.status(404).end();
    }

    res.sendFile(indexFilePath, (err) => {
        if (err) {
            console.error('Error serving index.html:', err);
            res.status(500).send('Could not find the frontend build files.');
        }
    });
});

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.info('Server started on port %s.', port);
});
