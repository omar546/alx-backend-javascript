class AppController {
  // Method to handle requests to the homepage
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}


export default AppController;
module.exports = AppController;
