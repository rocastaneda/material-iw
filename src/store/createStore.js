// Redux API
const createStore = ({ name = '' } = {}) => {
  return (() => {
    const subscriptions = [];
    const store = {
      isReady: false,
      name,
      dispatch() {
        // eslint-disable-next-line no-console
        console.error(`store ${this.name}: is NOT ready`);
      },
      getState: () => null, // method will be updated by init
      subscribe(callback) {
        subscriptions.push(callback);
      },
      __onStateUpdated() {
        subscriptions.forEach(fn => fn());
      },
      init({ dispatch, getState }) {
        if (this.isReady) return;

        this.isReady = true;
        this.dispatch = dispatch;
        this.getState = getState;

        Object.freeze(this);
      },
    };

    return store;
  })();
};

export default createStore;
