type Debounce = {
  readonly cancel: (callback: () => void) => void;
  readonly decorate: (callback: () => void) => readonly [debounced: () => void, cancel: () => void];
  readonly run: (callback: () => void) => void;
};

const createDebounce = (delayMilliseconds: number): Debounce => {
  let callbacks = new Set<() => void>();
  let timeout: number | null = null;

  const instance: Debounce = {
    cancel: (callback) => {
      callbacks.delete(callback);
    },
    decorate: (callback) => {
      const decorated = () => instance.run(callback);
      const cancel = () => instance.cancel(callback);

      return [decorated, cancel];
    },
    run: (newCallback) => {
      if (!callbacks.has(newCallback)) {
        callbacks.add(newCallback);
      }

      if (timeout == null) {
        timeout = setTimeout(() => {
          const pending = callbacks;

          callbacks = new Set<() => void>();
          timeout = null;

          pending.forEach((callback) => callback());
        }, delayMilliseconds);
      }
    },
  };

  return instance;
};

export { type Debounce, createDebounce };
