import BaseModule from '../base'
import WalletModel from '@/models/wallet'

export default new BaseModule(WalletModel, {
  state: {
    secondaryButtonsVisible: false
  },

  getters: {
    byAddress: state => address => state.all.find(wallet => wallet.address === address),
    byProfileId: state => profileId => state.all.filter(wallet => !wallet.isContact && wallet.profileId === profileId),
    contactsByProfileId: state => profileId => state.all.filter(wallet => wallet.isContact && wallet.profileId === profileId),
    secondaryButtonsVisible: state => state.secondaryButtonsVisible
  },

  mutations: {
    SET_SECONDARY_BUTTON (state, visibility) {
      state.secondaryButtonsVisible = visibility
    }
  },

  actions: {
    setSecondaryButtonsVisible ({ commit }, visibility) {
      commit('SET_SECONDARY_BUTTON', visibility)
    }
  }
})