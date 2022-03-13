 import { Link } from "react-router-dom";
import "./BookAppointment.css"
import BookingCard from "./BookingCard/BookingCard";

const BookAppointment = ({date}) => { 
    // const appointDate= date.toDateString();
    console.log(date);
    const appointDateMod= date.toLocaleString('en-us',{month:'long',day:'numeric'})+','+date.getFullYear(); 
    const bookingData = [
        {
            _id: '5e8df50be6e8231764dc23de',
            id: 1,
            subject: 'Teeth Orthodontics',
            visitingHour: '08:00 AM - 09:00 AM',
            totalSpace: 10
        },
        {
            _id: '5e8df578e6e8231764dc23df',
            id: 2,
            subject: 'Cosmetic Dentistry',
            visitingHour: '10:50 AM - 11:30 AM',
            totalSpace: 10
        },
        {
            _id: '5e8df5aee6e8231764dc23e0',
            id: 3,
            subject: 'Teeth Cleaning',
            visitingHour: '05:00 PM - 06:00 PM',
            totalSpace: 10
        },
        {
            _id: '5e8df63be6e8231764dc23e1',
            id: 4,
            subject: 'Cavity Protection',
            visitingHour: '07:00 AM - 08:30 AM',
            totalSpace: 10
        },
        {
            _id: '5e8df68de6e8231764dc23e2',
            id: 5,
            subject: 'Teeth Orthodontics',
            visitingHour: '08:00 AM - 09:00 AM',
            totalSpace: 10
        },
        {
            _id: '5e8df6a0e6e8231764dc23e3',
            id: 6,
            subject: 'Teeth Orthodontics',
            visitingHour: '08:00 AM - 09:00 AM',
            totalSpace: 10
        }
    ]
    return (
        <section className='text-center container'>
            
            <h1 className='text-primary mt-5'>Available Appointments on {appointDateMod }</h1>
            
            <h4 className='text-primary mb-3'><Link to='/dashboard'>Appointment Dashboard</Link></h4>
            <div className="row">
                {
                    bookingData.map(booking=> <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                }
                </div>
        </section>
    );
};

export default BookAppointment;