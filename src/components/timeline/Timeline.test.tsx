import { render, screen } from '@testing-library/react';
import React from 'react';
import Timeline from './Timeline';

test('renders a timeline with events', () => {
  const events = [
    { date: '2023-01-01', description: 'Event 1' },
    { date: '2023-02-01', description: 'Event 2' },
  ];

  render(<Timeline events={events} />);

  // Check if the timeline container element is rendered
  const timelineElement = screen.getByTestId('timeline');
  expect(timelineElement).toBeInTheDocument();

  // Check if the events are rendered
  events.forEach((event) => {
    const eventDateElement = screen.getByText(event.date);
    const eventDescriptionElement = screen.getByText(event.description);

    expect(eventDateElement).toBeInTheDocument();
    expect(eventDescriptionElement).toBeInTheDocument();
  });
});
