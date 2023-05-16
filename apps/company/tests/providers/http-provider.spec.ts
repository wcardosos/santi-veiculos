import { describe, expect, it, vi } from 'vitest'
import axios from 'axios'
import { HttpProvider } from '../../src/providers/http-provider'

vi.mock('axios')

describe('HttpProvider', () => {
  const httpProvider = new HttpProvider()
  const axiosPostMock = vi.spyOn(axios, 'post')
  axiosPostMock.mockResolvedValue({ data: 'data' })

  describe('post', () => {
    it('should make post to url', async () => {
      const data = await httpProvider.post(
        'url',
        { test: 'test' },
        { Authorization: 'token' },
      )

      expect(axiosPostMock).toHaveBeenCalledWith(
        'url',
        { test: 'test' },
        {
          headers: {
            Authorization: 'token',
          },
        },
      )
      expect(data).toEqual({ data: 'data' })
    })
  })
})
