export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export type ACTIONTYPE =
  | { type: "FETCH_PARTICIPANTS"; payload: TeamMember[] }
  | {
      type: "ADD_PARTICIPANT";
      payload: { type: "FETCH_PARTICIPANTS"; payload: TeamMember[] };
    };

export const initialState = {
  participants: [] as TeamMember[],
};

type State = typeof initialState;

export const reducer = (state: State, action: ACTIONTYPE): State => {
  switch (action.type) {
    case "FETCH_PARTICIPANTS":
      return {
        ...state,
        participants: action.payload,
      };

    default:
      throw new Error();
  }
};

export default reducer;
