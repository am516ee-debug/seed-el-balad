import { useState, useEffect } from 'react';

/**
 * Custom hook to animate a numeric count-up with smooth easing deceleration.
 * @param end Target end value
 * @param duration Animation duration in milliseconds
 * @param shouldStart Trigger to start the animation
 */
export const useCountUp = (end: number, duration: number = 2000, shouldStart: boolean = false): number => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      setCount(0);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Quadratic Ease-Out function for premium deceleration feel
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      const currentVal = Math.floor(easedProgress * end);
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, shouldStart]);

  return count;
};
export default useCountUp;
