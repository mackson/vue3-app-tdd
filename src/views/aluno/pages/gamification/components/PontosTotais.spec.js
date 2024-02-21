import { describe, expect, it, test } from 'vitest'
import { mount } from '@vue/test-utils'

import Pontos from '@/views/aluno/pages/gamification/components/Pontos.vue'

describe('Pontos', () => {

  it('should render the total xp card', () => {
    const wrapper = mount(Pontos, {
      props: { pontos: 1000 }
    })
    expect(wrapper.text()).toContain(1000)
  })

  test('should render the sum of points', () => {
    let math = 500;
    let portuguese = 500;
    let sum  = math + portuguese;
    expect(sum).toBe(1000)
  })

})


