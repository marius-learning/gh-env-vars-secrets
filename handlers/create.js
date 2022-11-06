const createEvent = async (req, res) => {
  const eventData = req.body;
  const result = await req.db.collection("events").insertOne({ ...eventData });
  res.status(201).json({
    message: "Event created.",
    event: { ...eventData, id: result.insertedId }
  });
};

export default createEvent;
