import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';

const GoogleCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        apiKey: 'YOUR_API_KEY',
        clientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
        scope: "https://www.googleapis.com/auth/calendar.readonly",
      }).then(() => {
        return gapi.client.calendar.events.list({
          calendarId: 'primary',
          timeMin: (new Date()).toISOString(),
          showDeleted: false,
          singleEvents: true,
          maxResults: 10,
          orderBy: 'startTime'
        });
      }).then(response => {
        const events = response.result.items;
        setEvents(events);
      });
    };
    gapi.load('client:auth2', initClient);
  }, []);

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>{event.summary} ({event.start.dateTime || event.start.date})</li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleCalendar;
