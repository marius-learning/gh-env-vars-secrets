const getEvent = async (req, res) => {
  const allEvents = await req.db.collection("events").find().toArray();
  res.json({ events: allEvents });
};

export default getEvent;
