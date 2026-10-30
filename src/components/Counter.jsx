import React, { useState } from 'react';
import {
  incrementCount,
  decrementCount,
  MIN_COUNT,
  MAX_COUNT
} from '../utils/counter';

export default function Counter() {
  const [count, setCount] = useState(0);

  const isMinimum = count === MIN_COUNT;
  const isMaximum = count === MAX_COUNT;

  const progress = `${(count / MAX_COUNT) * 100}%`;

  function handleIncrement() {
    setCount((currentCount) => incrementCount(currentCount));
  }

  function handleDecrement() {
    setCount((currentCount) => decrementCount(currentCount));
  }

  return (
    <section className="counter" aria-labelledby="counter-heading">

      <div className="counter__card-topline">
        <span
          className="counter__status-dot"
          aria-hidden="true"
        />
        <span className="counter__label">COUNTER</span>
        <span className="counter__range-label">0–10</span>
      </div>

      <h2
        id="counter-heading"
        className="counter__heading"
      >
        Increment and Decrement
      </h2>

      <p className="counter__description">
        Use the buttons to increase or decrease the counter.
      </p>

      <div
        className="counter__number-panel"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="counter__number">{count}</span>
        <span className="counter__limit">/ {MAX_COUNT}</span>
      </div>

      <div
        className="counter__progress-track"
        role="progressbar"
        aria-label="Counter progress"
        aria-valuemin={MIN_COUNT}
        aria-valuemax={MAX_COUNT}
        aria-valuenow={count}
      >
        <div
          className="counter__progress-fill"
          style={{ width: progress }}
        />
      </div>

      <div className="counter__actions">

        <button
          className="counter__button counter__button--decrement"
          type="button"
          onClick={handleDecrement}
          disabled={isMinimum}
        >
          Decrement <span aria-hidden="true">−</span>
        </button>

        <button
          className="counter__button counter__button--increment"
          type="button"
          onClick={handleIncrement}
          disabled={isMaximum}
        >
          Increment <span aria-hidden="true">＋</span>
        </button>

      </div>

      <p className="counter__helper-text">
        {isMinimum
          ? 'Minimum value reached: 0.'
          : isMaximum
            ? 'Maximum value reached: 10.'
            : `Current count: ${count}.`}
      </p>

    </section>
  );
}