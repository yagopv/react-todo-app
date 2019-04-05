import React from 'react';

export function Field({ id, title, placeholder, type, rows, value, onChange }) {
  return (
    <div className="form-group">
      <label>{title}</label>

      {type === 'text' && (
        <input
          type="text"
          className="form-control"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}

      {type === 'textarea' && (
        <textarea
          type="text"
          className="form-control"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows || 2}
        />
      )}
    </div>
  );
}
