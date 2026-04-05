'use client'

import { useState, useEffect, useCallback } from 'react';
import { getAllEvents } from '@/app/actions';
import { Results } from "../globalComponents/Results";
import "../../styles/main.css";
import "../../styles/events.css";

export default function EventsPage() {
  const [ results, setResults ] = useState<any[]>([]);
  const [ loading, setLoading ] = useState(false);
  
  const loadEvents = useCallback(async () => {
    setLoading(true);
    try {
      const events = await getAllEvents();
      setResults(events || []);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  return (
    <div className="page">
      <h1>Events</h1>
      <div id="results">
        {loading ? 'Searching...' : <Results results={results} />}
      </div>
    </div>
  );
}