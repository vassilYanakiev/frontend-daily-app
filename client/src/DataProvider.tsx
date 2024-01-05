import { useReducer } from "react";
import { ParticipantsContext } from "./context-Participants";
import { reducer, initialState } from "./reducer";

const DataProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ParticipantsContext.Provider value={{ state, dispatch }}>
      {children}
    </ParticipantsContext.Provider>
  );
};

export default DataProvider;
