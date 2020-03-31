export const state = () => ({
  count: 0
})

export const mutations = {
  add (state) {
    state.count += 1
  },
  take (state) {
    state.count -= 1
  }
}
