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
    async function loadCustomerData() {
      try {
        const res = await fetch('/api/account/customer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: cookies.email }),
        });

        const result = await res.json();

        if (result.success) {
          setUserData(result.user);
        } else {
          setMessage(result.message || 'Could not load customer data.');
        }
      } catch (error) {
        console.error(error);
        setMessage('Something went wrong loading customer data.');
      } finally {
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