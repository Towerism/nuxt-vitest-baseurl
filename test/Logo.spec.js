import { mountSuspended } from '@nuxt/test-utils/runtime'
import Logo from '@/components/Logo.vue'
import { describe, expect, test } from 'vitest'

describe('Logo', () => {
  test('is a Vue instance', async () => {
    const wrapper = await mountSuspended(Logo)
    expect(wrapper.vm).toBeTruthy()
  })
})
