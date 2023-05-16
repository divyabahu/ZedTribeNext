function flightHandler(req, res) {
  
    const { registration } = req.query;
  
    const flights = [
      {
        id: 'abcd123',
        registration: 'N12345',
        previousCity: 'Los Angeles',
        currentCity: 'New York',
        nextCity: 'London',
      },
      {
        id: 'efgh456',
        registration: 'N67890',
        previousCity: 'London',
        currentCity: 'Paris',
        nextCity: 'Madrid',
      },
      {
        id: 'ijkl789',
        registration: 'N24680',
        previousCity: 'Sydney',
        currentCity: 'Tokyo',
        nextCity: 'Los Angeles',
      },
    ];
  
    const flight = flights.find((f) => f.registration === registration);
  
    if (!flight) {
      res.status(404).json({ error: 'Flight not found' });
    } else {
      const { previousCity, currentCity, nextCity } = flight;
      res.status(200).json({
        previousCity,
        currentCity,
        nextCity,
      });
    }
  }
  
  module.exports = flightHandler;
  