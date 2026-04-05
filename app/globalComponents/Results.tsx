import { Event } from "@/app/globalComponents/Event";

export function Results({ results }: {results: Event[]}) {
  if (results.length > 0) {
    return (
      results.map((event) => (
        <div key={event.event_id} className="event-card">
          {event.artist_image ? (
            <img 
              src={event.artist_image} 
              alt={event.artist_name} 
              className="artist-img" 
            />
          ) : (
            <div className="artist-img-placeholder">
              No Image
            </div>
          )}
          <div>
            <h1 className="artist-name">{event.artist_name}</h1>
            <h2 className="event-name">{event.event_title}</h2>
            <h3 className="event-date">{event.event_date.toLocaleDateString()}</h3>
            <h4 className="event-category">{event.event_category}</h4>
            <h4 className="event-venue">{event.venue_name}</h4>
            <p className="event-location">{event.venue_city}, {event.venue_state}</p>
          </div>
        </div>
      ))
    );
  } else {
    return (
      <p className="no-results">No events found. Try another search!</p>
    );
  }
  
}