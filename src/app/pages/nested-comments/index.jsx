import React from 'react';
import './components/style.css';
import NestedComments from './components/NestedComments';

const data = [
  {
    id: 1,
    content: "This is the first comment",
    votes: 5,
    timestamp: "2024-06-16T10:00:00Z",
    replies: [
      {
        id: 2,
        content: "This is a reply to the first comment",
        votes: 3,
        timestamp: "2024-06-16T11:00:00Z",
        replies: []
      },
      {
        id: 3,
        content: "This is another reply to the first comment",
        votes: 8,
        timestamp: "2024-06-16T12:00:00Z",
        replies: []
      }
    ]
  },
  {
    id: 4,
    content: "This is the second comment",
    votes: 10,
    timestamp: "2024-06-16T09:00:00Z",
    replies: [
      {
        id: 5,
        content: "This is a reply to the second comment",
        votes: 4,
        timestamp: "2024-06-16T09:30:00Z",
        replies: [
          {
            id: 6,
            content: "This is a nested reply to the reply",
            votes: 2,
            timestamp: "2024-06-16T09:45:00Z",
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 7,
    content: "This is the third comment",
    votes: 1,
    timestamp: "2024-06-16T08:00:00Z",
    replies: []
  }
];

function App() {
  return (
    <div className="App">
      <h1>Nested Comments</h1>
      <NestedComments data={data} />
    </div>
  );
}

export default App;
