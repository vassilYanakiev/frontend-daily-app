export interface TeamMember {
  id: string;
  name: string;
  surname: string;
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
      payload: TeamMember | null;
    }
  | {
      type: "REORDER_PARTICIPANTS";
    }
  | {
      type: "INVALIDATE_CACHE";
      payload: boolean;
    }
  | {
      type: "SET_TIMER_STARTED";
      payload: boolean;
    };

export const initialState = {
  participants: [] as TeamMember[],
  activeParticipant: null as TeamMember | null,
  invalidateCache: false,
  timerStarted: false,
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

    case "REORDER_PARTICIPANTS": {
      return {
        ...state,
        participants: state.participants.sort(() => Math.random() - 0.5),
      };
    }

    case "INVALIDATE_CACHE": {
      return {
        ...state,
        invalidateCache: action.payload,
      };
    }

    case "SET_TIMER_STARTED": {
      return {
        ...state,
        timerStarted: action.payload,
      };
    }

    default:
      throw new Error();
  }
};

export default reducer;
