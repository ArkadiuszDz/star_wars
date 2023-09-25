'use client'
 
import { useEffect } from 'react'
import Link from 'next/link'

import styles from './Layout.module.scss';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
      <div className={styles.error}>
        <h2>Something went wrong!</h2>
        <button 
          type="button"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button> <p><strong>or</strong></p>
        <Link href="/">Return to homepage.</Link>
      </div>
  )
}