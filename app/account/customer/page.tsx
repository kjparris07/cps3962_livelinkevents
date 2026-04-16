'use client';

import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

type CustomerData = {
  fullName?: string;
  email?: string;
  username?: string;
  phoneNumber?: string;
  membershipPlan?: string;
  favoriteGenre?: string;
};

export default function CustomerPage() {
  const [cookies] = useCookies(['email']);
  const [userData, setUserData] = useState<CustomerData | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

    useEffect(() => {
      const fetchInfo = async () => {
        if (cookies.email) {
          try {
            const db_info = await getAccountInfo("customer", cookies.email);

            if (db_info.success) {
              setCustomerData(await setCustomer(db_info.info));
              const customer_events = await getCustomerEvents(cookies.email);
              if (customer_events.success) {
                const results = customer_events.data;
                if (results && results.length > 0) {
                  setEvents(results.map((event) => (
                    <div key={event.event_id} className="event-info">
                      <h3 className="event-date">{event.event_date.toLocaleDateString()} — {event.event_title}</h3>
                      <h4 className="event-artist">{event.artist_name}</h4>
                      <h5 className="event-location">{event.venue_city}, {event.venue_state}</h5>
                    </div>
                  )));
                } else {
                  setEvents([<p key='no-results'>No events found. Try buying a ticket!</p>]);
                }
              }
              
            } 
          } catch (err) {
            console.error("Fetch error:", err);
          }
        }
        setLoading(false);
      }
    }

    if (cookies.email) {
      loadCustomerData();
    } else {
      setMessage('No logged in user found.');
      setLoading(false);
    }
  }, [cookies.email]);

  if (loading) return <main>Loading...</main>;
  if (message) return <main>{message}</main>;

  return (
    <main>
      <h1>Customer Account</h1>
      <p><strong>Full Name:</strong> {userData?.fullName || 'N/A'}</p>
      <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
      <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
      <p><strong>Phone Number:</strong> {userData?.phoneNumber || 'N/A'}</p>
      <p><strong>Membership Plan:</strong> {userData?.membershipPlan || 'N/A'}</p>
      <p><strong>Favorite Genre:</strong> {userData?.favoriteGenre || 'N/A'}</p>
    </main>
  );
}