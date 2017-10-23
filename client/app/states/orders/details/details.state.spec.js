/* global $state, $controller */
/* eslint-disable no-unused-expressions */
describe('State: orders.details', () => {
  beforeEach(function () {
    module('app.states', 'app.orders', 'app.core')
  })

  let ctrl

  beforeEach(() => {
    bard.inject('$controller', '$state', '$stateParams')

    ctrl = $controller($state.get('orders.details').controller, {
      $stateParams: {
        serviceOrderId: 213
      },
      order: {name: 'test order'}
    })
  })

  describe('controller', () => {
    it('is created successfully', () => {
      expect(ctrl).to.be.defined
    })

    it('has an order title', () => {
      expect(ctrl.title).to.be.eq('test order')
    })
  })
})
