import flights from '../flightData';

export default function FlightHandler(req, res) {
  const { registration } = req.query;

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
