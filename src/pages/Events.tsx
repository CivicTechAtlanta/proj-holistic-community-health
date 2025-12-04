import { useState, useEffect } from 'react'
import './Events.css'

interface Event {
  id: string
  poster: string
  description: string
  created_at: string
  event_date: string
}

function Events() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://green-careers-map-demo.fly.dev/items/events')
        const result = await response.json()
        
        // Extract the data array from the response
        const data = result.data || result
        
        // Ensure data is an array before sorting
        if (Array.isArray(data)) {
          // Sort by event_date newest first
          const sortedEvents = data.sort((a: Event, b: Event) => 
            new Date(b.event_date).getTime() - new Date(a.event_date).getTime()
          )
          
          setEvents(sortedEvents)
        } else {
          console.error('Expected array but got:', typeof data)
        }
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }
    
    fetchEvents()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <section>
      <h2>Events</h2>
      <div className="events-container">
        {events.length === 0 ? (
          <p>No upcoming events at this time.</p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.poster} alt={event.description} className="event-poster" />
              <div className="event-details">
                <h3>{event.description}</h3>
                <p className="event-date">
                  <strong>Event Date:</strong> {formatDate(event.event_date)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default Events
