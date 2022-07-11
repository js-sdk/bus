function bus() {
  const handlers = {};

  return {
    subscribe(type, handler) {
      (handlers[type] || (handlers[type] = [])).push(handler);
    },
    unsubscribe(type, handler) {
      handlers[type] = (handlers[type] || []).filter(h => h !== handler);
    },
    publish(type, data) {
      (handlers[type] || []).forEach(h => h(data));
    }
  };
}

module.exports = bus;
