import React from 'react';

export type TimelineProps = {
  events: {
    date: string;
    description: string;
  }[];
};

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className='timeline' data-testid='timeline'>
      {events.map((event, index) => (
        <div key={index} className='timeline-event'>
          <div className='event-date'>{event.date}</div>
          <div className='event-description'>{event.description}</div>
        </div>
      ))}
    </div>
  );
}
