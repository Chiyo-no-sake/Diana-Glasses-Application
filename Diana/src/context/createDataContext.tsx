import React, {
  createContext,
  useReducer,
  Reducer,
  PropsWithChildren,
} from 'react';

type Args<S, A> = {
  actions: A[] | any;
  initialState: S | any;
  defaultContextValue: any;
  reducer: Reducer<S, A>;
};

export default <S, A>({
  reducer,
  actions,
  initialState,
  defaultContextValue,
}: Args<S, A>) => {
  const Context = createContext(defaultContextValue);

  const Provider = ({ children }: PropsWithChildren<any>) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundedActions: typeof actions = {};
    for (let key in actions) {
      boundedActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundedActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
