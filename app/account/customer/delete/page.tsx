'use client';

import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';

export default function DeleteCustomerPage() {
  const [cookies, , removeCookie] = useCookies(['email']);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  async function handleDelete() {
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/account/customer/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: cookies.email }),
      });

      const result = await res.json();

      if (result.success) {
        removeCookie('email', { path: '/' });
        router.push('/');
      } else {
        setMessage(result.message || 'Delete failed.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Something went wrong deleting customer account.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <h1>Delete Customer Account</h1>
      <p>Are you sure you want to delete your customer account?</p>
      <button onClick={handleDelete} disabled={loading}>
        {loading ? 'Deleting...' : 'Delete Account'}
      </button>
      {message && <p>{message}</p>}
    </main>
  );
}