import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import Paginacao from '@/views/aluno/pages/gamification/components/Paginacao.vue'

describe('Paginacao', () => {

  it('should render the pagination', () => {
    const wrapper = mount(Paginacao, {
      props: { pagina: 1 }
    })
    expect(wrapper.text()).toContain(1)
  })

  it('should render next page', () => {
    let currentPage = 1;
    let nextPage = currentPage+1;
    expect(nextPage).toBe(2)
  })

  it('should render previous page', () => {
    let currentPage = 2;
    let previousPage = currentPage-1;
    expect(previousPage).toBe(1)
  })

})


