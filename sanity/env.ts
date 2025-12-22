export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-12-20'

// Provide fallback values during build time to prevent build failures
// These will be overridden at runtime with actual environment variables
// Using valid-looking dummy values that won't cause Sanity client to fail
// Handle both undefined and empty string cases
const envDataset = process.env.NEXT_PUBLIC_SANITY_DATASET
export const dataset = (envDataset && envDataset.trim() !== '') ? envDataset : 'production'

const envProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const projectId = (envProjectId && envProjectId.trim() !== '') ? envProjectId : 'dummy-project-id-for-build'

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
