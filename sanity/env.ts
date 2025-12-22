export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-12-20'

// Provide fallback values during build time to prevent build failures
// These will be overridden at runtime with actual environment variables
export const dataset = 
  process.env.NEXT_PUBLIC_SANITY_DATASET || 
  (process.env.NODE_ENV === 'production' ? '' : 'production')

export const projectId = 
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 
  (process.env.NODE_ENV === 'production' ? '' : 'dummy-project-id')

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
