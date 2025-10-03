import express from 'express';
import path from 'path';

const app = express();

const CURRENT_WORKING_DIR = process.cwd();

const frontendDistPath = path.join(CURRENT_WORKING_DIR, 'project', 'dist');
const indexFilePath = path.join(frontendDistPath, 'index.html');

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
