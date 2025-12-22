'use client'

import {useEffect, useState} from 'react'
import {NumberInputProps, useClient, useFormValue} from 'sanity'
import {Stack, Text, Card} from '@sanity/ui'

export function OrderIdInput(props: NumberInputProps) {
  const {onChange, value} = props
  const client = useClient({apiVersion: '2024-01-01'})
  const [loading, setLoading] = useState(false)
  const documentType = useFormValue(['_type']) as string | undefined
  const [hasInitialized, setHasInitialized] = useState(false)

  useEffect(() => {
    // Only fetch max order if value is not set and we have a document type and haven't initialized yet
    if ((value === undefined || value === null) && documentType && !hasInitialized) {
      setLoading(true)
      setHasInitialized(true)
      const query = `*[_type == $type && defined(orderId)] | order(orderId desc) [0].orderId`
      
      client.fetch(query, {type: documentType})
        .then((max: number | null) => {
          const nextOrder = max !== null && max !== undefined ? max + 1 : 1
          // Use setPatch to update the value
          onChange([{type: 'set', path: [], value: nextOrder}])
        })
        .catch((error) => {
          console.error('Error fetching max order:', error)
          // Default to 1 if error
          onChange([{type: 'set', path: [], value: 1}])
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [value, documentType, client, onChange, hasInitialized])

  // Use the default number input
  return (
    <Stack space={3}>
      {loading && (
        <Card padding={2} tone="transparent" radius={2}>
          <Text size={1} muted>
            Auto-generating order ID...
          </Text>
        </Card>
      )}
      {props.renderDefault(props)}
      <Card padding={2} tone="caution" radius={2}>
        <Text size={1} muted>
          Posts are ordered by this number. Higher numbers appear first. You can change this value to reorder posts.
        </Text>
      </Card>
    </Stack>
  )
}

