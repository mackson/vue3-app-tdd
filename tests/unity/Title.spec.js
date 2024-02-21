import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

const MessageComponent = {
  template: '<p>{{ msg }}</p>',
  props: ['msg']
}

test('should displays the title', () => {
  const wrapper = mount(MessageComponent, {
    props: {
      msg: 'Ciências da Natureza'
    }
  })

  expect(wrapper.text()).toBe('Ciências da Natureza')
})
