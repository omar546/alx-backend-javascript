import express from 'express';
import mapRoutes from './routes';

const app = express();
const PORT = 1245;

// Map all routes to the app
mapRoutes(app);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

export default app;
module.exports = app;
