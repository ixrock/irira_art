"use client";

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorPageProps) {
  const { message, digest } = error;
  const resetHint = "Click to attempt restoring layout.";

  return (
    <div className="flex column gaps">
      <h1>Oops! Something went <a onClick={reset} title={resetHint}>wrong</a>..</h1>

      <b>Error info:</b>
      <code>{String(message)}</code>

      {digest && (
        <>
          <b>Digest:</b>
          <code>{digest}</code>
        </>
      )}
    </div>
  )
}