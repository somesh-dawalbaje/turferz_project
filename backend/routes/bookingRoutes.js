const express = require('express');
const router = express.Router();
const { createBooking, getBookings,deleteBooking,updateBooking } = require('../controllers/bookingController');

router.post('/', createBooking);
router.get('/', getBookings);
router.put('/:id', updateBooking);
router.delete('/:id', deleteBooking); 

module.exports = router;