import { useState } from "react";

export default function Stats({ items }) {
  const numItems = items.length;
  const completeItems = items.slice().filter((item) => item.complete).length;
  const percentComplete = (completeItems / numItems) * 100;

  return (
    <div className="stats">
      {numItems === completeItems && numItems === 0 && (
        <h3>It's time to start studying!</h3>
      )}

      {numItems !== completeItems && numItems > 0 && (
        <h3>
          You have completed {percentComplete.toFixed(0)}% of your courses!
        </h3>
      )}
      {numItems === completeItems && numItems !== 0 && (
        <h3> You are finished studying everything!</h3>
      )}
    </div>
  );
}
