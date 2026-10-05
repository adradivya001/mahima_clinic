// Simple analytics event dispatcher for tracking interactions
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (typeof window !== 'undefined') {
    // Log to console in dev mode
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[Analytics] ${eventName}`, properties);
    }
    // Dispatch custom event for extensible listeners
    window.dispatchEvent(
      new CustomEvent('analytics_event', { detail: { name: eventName, properties } })
    );
  }
}
