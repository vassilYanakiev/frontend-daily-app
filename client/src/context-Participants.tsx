import { createContext } from "react";
import { ACTIONTYPE, TeamMember } from "./reducer";

export interface IParticipantsContext {
  state: {
    participants: TeamMember[];
    activeParticipant: TeamMember | null;
    invalidateCache: boolean;
    timerStarted: boolean;
  };
  dispatch: React.Dispatch<ACTIONTYPE>;
}

export const ParticipantsContext = createContext<IParticipantsContext>({
  state: {
    participants: [],
    activeParticipant: null,
    invalidateCache: false,
    timerStarted: false,
  },
  dispatch: () => null,
});
