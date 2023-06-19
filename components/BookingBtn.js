const BookingButton = ({ booking }) => {
  if (booking) {
    return (
      <button className="btn btn-solid border btn-booking-request">
        Booking Request
      </button>
    );
  }

  return null;
};

export default BookingButton;
