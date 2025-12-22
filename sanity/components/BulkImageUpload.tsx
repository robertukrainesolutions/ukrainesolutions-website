'use client'

import {useCallback, useState} from 'react'
import {ArrayInputProps, set, useClient} from 'sanity'
import {Button, Stack, Text, Card} from '@sanity/ui'
import {UploadIcon} from '@sanity/icons'

export function BulkImageUpload(props: ArrayInputProps) {
  const {onChange, value = []} = props
  const client = useClient({apiVersion: '2024-01-01'})
  const [uploading, setUploading] = useState(false)

  const handleFileSelect = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files
      if (!files || files.length === 0) return

      setUploading(true)
      const fileArray = Array.from(files)

      try {
        // Upload all files to Sanity
        const uploadPromises = fileArray.map((file) => {
          return client.assets.upload('image', file, {
            contentType: file.type,
            filename: file.name,
          })
        })

        const uploadedAssets = await Promise.all(uploadPromises)

        // Create image objects for the array
        const newItems = uploadedAssets.map((asset) => ({
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: asset._id,
          },
          _key: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        }))

        // Add to existing array
        onChange(set([...(value || []), ...newItems]))
      } catch (error) {
        console.error('Error uploading images:', error)
      } finally {
        setUploading(false)
        // Reset input
        if (event.target) {
          event.target.value = ''
        }
      }
    },
    [onChange, value, client]
  )

  return (
    <Stack space={4}>
      <Card padding={3} tone="primary" radius={2} border>
        <Stack space={3}>
          <Text size={1} weight="semibold">
            Bulk Upload Images
          </Text>
          <Text size={1} muted>
            Click the button below to select multiple images at once (hold Ctrl/Cmd to select multiple files)
          </Text>
          <Button
            as="label"
            icon={UploadIcon}
            text={uploading ? 'Uploading...' : 'Select Multiple Images'}
            tone="primary"
            mode="ghost"
            disabled={uploading}
            loading={uploading}
            style={{cursor: uploading ? 'wait' : 'pointer'}}
          >
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
              disabled={uploading}
              style={{
                position: 'absolute',
                width: 0,
                height: 0,
                opacity: 0,
                overflow: 'hidden',
              }}
            />
          </Button>
        </Stack>
      </Card>
      {/* Render the default array input */}
      {props.renderDefault(props)}
    </Stack>
  )
}

