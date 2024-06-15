const Booking = require('../Models/booking');
const moment=require('moment');

 

 exports.createBooking = async (req, res) => {
  try {
    const { name, phone, date, time } = req.body;

    const bookingDateTime = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm');
    const now = moment();
    if (!bookingDateTime.isValid() || bookingDateTime.isBefore(now) || bookingDateTime.diff(now, 'hours') < 1) {
      return res.status(400).json({ msg: 'Invalid date or time. Booking must be at least one hour in the future.' });
    }

   
    const existingBooking = await Booking.findOne({ date, time });
    if (existingBooking) {
      return res.status(400).json({ msg: 'Booking already exists for this date and time.' });
    }

    const booking = new Booking({ name, phone, date, time });

    await booking.save();
    res.status(201).json({ msg: 'Booking created successfully', booking });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};


exports.getBookings = async (req, res) => {
  try {
    const { name, phone, date, time } = req.query;
    const query = {};

    if (name) {
      query.name = name;
    }

    if (phone) {
      query.phone = phone;
    }

    if (date) {
      query.date = new Date(date);
    }

    if (time) {
      query.time = time;
    }

    const bookings = await Booking.find(query);
    res.json(bookings);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};


exports.deleteBooking = async (req, res) => {
  const { id } = req.params;
  const { name } = req.query; 

  console.log(`Received request to delete booking with id: ${id} and name: ${name}`);  

  try {
    const booking = await Booking.findById(id);

    if (!booking) {
      console.log(`Booking with id: ${id} not found`);  
      return res.status(404).json({ msg: 'Booking not found' });
    }

    if (booking.name !== name) {
      console.log(`Unauthorized action. Booking name: ${booking.name}, Provided name: ${name}`);  
      return res.status(403).json({ msg: 'Unauthorized action' });
    }

    await Booking.findByIdAndDelete(id);
    res.json({ msg: 'Booking deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};



exports.updateBooking = async (req, res) => {
  const { id } = req.params; 
  try {
    let booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({ msg: 'Booking not found' });
    }

    const { name, phone, date, time } = req.body;

    if (name) {
      booking.name = name;
    }
    if (phone) {
      booking.phone = phone;
    }
    if (date) {
      booking.date = date;
    }
    if (time) {
      booking.time = time;
    }

    
    booking = await booking.save();

    
    res.json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
