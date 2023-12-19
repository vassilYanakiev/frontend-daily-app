export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export type ACTIONTYPE =
  | { type: "FETCH_PARTICIPANTS"; payload: TeamMember[] }
  | {
      type: "ADD_PARTICIPANT";
      payload: { payload: TeamMember[] };
    }
  | {
      type: "SET_ACTIVE_PARTICIPANT";
      payload: TeamMember["id"] | null;
    };

export const initialState = {
  participants: [] as TeamMember[],
  activeParticipant: null as TeamMember["id"] | null,
};

type State = typeof initialState;

export const reducer = (state: State, action: ACTIONTYPE): State => {
  switch (action.type) {
    case "FETCH_PARTICIPANTS":
      return {
        ...state,
        participants: action.payload,
      };
    case "SET_ACTIVE_PARTICIPANT": {
      return {
        ...state,
        activeParticipant: action.payload,
      };
    }

    default:
      throw new Error();
  }
};

export default reducer;
