import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function CheckBooking() {
    const [bookings, setBookings] = useState([]);
    const [userName, setUserName] = useState('');
    const [editBooking, setEditBooking] = useState(null);
    const [editData, setEditData] = useState({
        name: '',
        phone: '',
        date: '',
        time: ''
    });

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:6005/api/bookings');
                console.log('Fetched bookings:', response.data); 
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    const deleteBooking = async (id, bookingUserName) => {
        console.log(`Deleting booking with id: ${id} and name: ${bookingUserName}`); 
        try {
            const response = await axios.delete(`http://localhost:6005/api/bookings/${id}`, {
                params: { name: bookingUserName }
            });
            if (response.status === 200) {
                setBookings(bookings.filter(booking => booking._id !== id));
            }
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
    };

    const updateBooking = async (id) => {
        try {
            const response = await axios.put(`http://localhost:6005/api/bookings/${id}`, editData);
            if (response.status === 200) {
                setBookings(bookings.map(booking => booking._id === id ? response.data : booking));
                setEditBooking(null);
                setEditData({ name: '', phone: '', date: '', time: '' });
            }
        } catch (error) {
            console.error('Error updating booking:', error);
        }
    };

    const startEditBooking = (booking) => {
        setEditBooking(booking._id);
        setEditData({
            name: booking.name,
            phone: booking.phone,
            date: booking.date,
            time: booking.time
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        if (editBooking) {
            updateBooking(editBooking);
        }
    };

    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
    };

    const thStyle = {
        border: '1px solid #dddddd',
        textAlign: 'left',
        padding: '8px',
    };

    const tdStyle = {
        border: '1px solid #dddddd',
        textAlign: 'left',
        padding: '8px',
    };

    const containerStyle = {
        margin: '0',
        padding: '0',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    };

    return (
        <div style={containerStyle}>
            <div style={{ width: '100%', maxWidth: '1000px' }}>
                <h2>Booking Details</h2>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Name</th>
                            <th style={thStyle}>Phone</th>
                            <th style={thStyle}>Date</th>
                            <th style={thStyle}>Time</th>
                            <th style={thStyle}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => (
                            <tr key={booking._id}>  
                                <td style={tdStyle}>{booking.name}</td>
                                <td style={tdStyle}>{booking.phone}</td>
                                <td style={tdStyle}>{booking.date}</td>
                                <td style={tdStyle}>{booking.time}</td>
                                <td style={tdStyle}>
                                    <button onClick={() => deleteBooking(booking._id, userName)}>Delete</button>
                                    <button onClick={() => startEditBooking(booking)}>Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {editBooking && (
                    <form onSubmit={handleUpdateSubmit}>
                        <h2>Edit Booking</h2>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={editData.name}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Phone:
                            <input
                                type="text"
                                name="phone"
                                value={editData.phone}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Date:
                            <input
                                type="date"
                                name="date"
                                value={editData.date}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Time:
                            <input
                                type="time"
                                name="time"
                                value={editData.time}
                                onChange={handleChange}
                            />
                        </label>
                        <button type="submit">Save</button>
                        <button type="button" onClick={() => setEditBooking(null)}>Cancel</button>
                    </form>
                )}
            </div>
        </div>
    );
}
