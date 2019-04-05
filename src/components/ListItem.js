import React from 'react';

export function ListItem({ item, onComplete, onRemove }) {
  return (
    <div className="card mt-3 bg-light">
      <div className="card-header">{item.title}</div>
      <div className="card-body">
        <p className="card-text">{item.description}</p>
        <p className="card-text">
          <span className="badge badge-primary">
            {friendlyDate(new Date(item.createdAt).getTime())}
          </span>
        </p>
        {!item.completed && (
          <a
            href="/"
            onClick={e => {
              onComplete(item.id);
              e.preventDefault();
            }}
            className="btn btn-outline-success mr-3"
          >
            Complete
          </a>
        )}
        <a
          href="/"
          onClick={e => {
            onRemove(item.id);
            e.preventDefault();
          }}
          className="btn btn-outline-danger"
        >
          Remove
        </a>
      </div>
    </div>
  );
}

function friendlyDate(value) {
  if (!value) {
    return '';
  }

  const seconds = Math.floor((new Date() - new Date(value)) / 1000);

  if (seconds < 29) {
    return 'Just now';
  }

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  };

  let counter: number;
  for (const interval of Object.keys(intervals)) {
    counter = Math.floor(seconds / intervals[interval]);
    if (counter > 0) {
      if (counter === 1) {
        return counter + ' ' + interval + ' ago'; // singular (1 day ago)
      } else {
        return counter + ' ' + interval + 's ago'; // plural (2 days ago)
      }
    }
  }

  return value;
}
