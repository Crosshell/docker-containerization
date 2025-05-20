import app from './app';

const port = 3033;

const startServer = () => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
};

startServer();