const state = {
    stepper: {
      stepper: 1,
      min: 1,
      max: 10
    }
  }
  const mutations = {
    addStepper (state) {
      state.stepper.stepper++
    },
    minusStepper (state) {
      state.stepper.stepper--
    }
  }
  
  export default {
    state,
    mutations
  }
  