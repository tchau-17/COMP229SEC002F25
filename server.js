import express from 'express';
// ... other imports
const app = express();
const port = process.env.PORT || 3000;

// ... other app.use() and routes

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.info('Server started on port %s.', port);
});