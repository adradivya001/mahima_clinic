import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ value, duration = 1500, className = '' }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const counterRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Extract numeric part and suffix
  const match = value.match(/^([\d.]+)(.*)$/);
  const targetNumber = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : '';
  const isDecimal = value.includes('.');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentNum = targetNumber * easeProgress;

            if (isDecimal) {
              setDisplayValue(currentNum.toFixed(1) + suffix);
            } else {
              setDisplayValue(Math.floor(currentNum) + suffix);
            }

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated, targetNumber, suffix, isDecimal]);

  return (
    <span ref={counterRef} className={className}>
      {hasAnimated ? displayValue : value}
    </span>
  );
}
