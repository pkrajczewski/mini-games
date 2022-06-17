export default {
  namespaced: true,
  state: {
    brandLink: {
      name: "home",
      title: "MINI GAMES",
      svg: "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M26.9167 31.25H22.75C21.6846 32.6705 20.2739 33.7951 18.6517 34.5169C17.0294 35.2388 15.2496 35.534 13.4812 35.3746C11.7128 35.2151 10.0145 34.6063 8.54755 33.6059C7.08063 32.6054 5.89379 31.2466 5.09972 29.6585C4.30565 28.0703 3.93072 26.3056 4.01053 24.5318C4.09034 22.758 4.62224 21.0341 5.55572 19.5236C6.48921 18.0132 7.79328 16.7665 9.34412 15.9019C10.895 15.0372 12.6411 14.5833 14.4167 14.5833H35.25C37.0256 14.5833 38.7717 15.0372 40.3225 15.9019C41.8734 16.7665 43.1775 18.0132 44.111 19.5236C45.0444 21.0341 45.5763 22.758 45.6561 24.5318C45.736 26.3056 45.361 28.0703 44.567 29.6585C43.7729 31.2466 42.586 32.6054 41.1191 33.6059C39.6522 34.6063 37.9539 35.2151 36.1855 35.3746C34.4171 35.534 32.6372 35.2388 31.015 34.5169C29.3928 33.7951 27.982 32.6705 26.9167 31.25ZM16.5 22.9167V20.8333C16.5 20.2808 16.2805 19.7509 15.8898 19.3602C15.4991 18.9695 14.9692 18.75 14.4167 18.75C13.8641 18.75 13.3342 18.9695 12.9435 19.3602C12.5528 19.7509 12.3333 20.2808 12.3333 20.8333V22.9167H10.25C9.69747 22.9167 9.16756 23.1362 8.77686 23.5269C8.38616 23.9176 8.16667 24.4475 8.16667 25C8.16667 25.5525 8.38616 26.0824 8.77686 26.4732C9.16756 26.8639 9.69747 27.0833 10.25 27.0833H12.3333V29.1667C12.3333 29.7192 12.5528 30.2491 12.9435 30.6398C13.3342 31.0305 13.8641 31.25 14.4167 31.25C14.9692 31.25 15.4991 31.0305 15.8898 30.6398C16.2805 30.2491 16.5 29.7192 16.5 29.1667V27.0833H18.5833C19.1359 27.0833 19.6658 26.8639 20.0565 26.4732C20.4472 26.0824 20.6667 25.5525 20.6667 25C20.6667 24.4475 20.4472 23.9176 20.0565 23.5269C19.6658 23.1362 19.1359 22.9167 18.5833 22.9167H16.5ZM35.25 22.9167C35.8025 22.9167 36.3324 22.6972 36.7231 22.3065C37.1138 21.9158 37.3333 21.3859 37.3333 20.8333C37.3333 20.2808 37.1138 19.7509 36.7231 19.3602C36.3324 18.9695 35.8025 18.75 35.25 18.75C34.6975 18.75 34.1676 18.9695 33.7769 19.3602C33.3862 19.7509 33.1667 20.2808 33.1667 20.8333C33.1667 21.3859 33.3862 21.9158 33.7769 22.3065C34.1676 22.6972 34.6975 22.9167 35.25 22.9167ZM33.1667 29.1667C33.7192 29.1667 34.2491 28.9472 34.6398 28.5565C35.0305 28.1658 35.25 27.6359 35.25 27.0833C35.25 26.5308 35.0305 26.0009 34.6398 25.6102C34.2491 25.2195 33.7192 25 33.1667 25C32.6141 25 32.0842 25.2195 31.6935 25.6102C31.3028 26.0009 31.0833 26.5308 31.0833 27.0833C31.0833 27.6359 31.3028 28.1658 31.6935 28.5565C32.0842 28.9472 32.6141 29.1667 33.1667 29.1667ZM39.4167 27.0833C39.9692 27.0833 40.4991 26.8639 40.8898 26.4732C41.2805 26.0824 41.5 25.5525 41.5 25C41.5 24.4475 41.2805 23.9176 40.8898 23.5269C40.4991 23.1362 39.9692 22.9167 39.4167 22.9167C38.8641 22.9167 38.3342 23.1362 37.9435 23.5269C37.5528 23.9176 37.3333 24.4475 37.3333 25C37.3333 25.5525 37.5528 26.0824 37.9435 26.4732C38.3342 26.8639 38.8641 27.0833 39.4167 27.0833Z' fill='#FFFCF2'/></svg>",
    },
  },
  mutations: {},
  getters: {
    brandLink(state) {
      return state.brandLink;
    },
  },
  actions: {},
};
