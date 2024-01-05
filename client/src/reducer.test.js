import { reducer, initialState } from "./reducer.tsx";

describe("reducer", () => {
  const mockTeamMember = {
    id: "1",
    name: "John",
    surname: "Doe",
    role: "Developer",
  };

  it("should handle FETCH_PARTICIPANTS", () => {
    const action = {
      type: "FETCH_PARTICIPANTS",
      payload: [mockTeamMember],
    };
    const state = reducer(initialState, action);
    expect(state.participants).toEqual([mockTeamMember]);
  });

  it("should handle SET_ACTIVE_PARTICIPANT", () => {
    const action = {
      type: "SET_ACTIVE_PARTICIPANT",
      payload: mockTeamMember,
    };
    const state = reducer(initialState, action);
    expect(state.activeParticipant).toEqual(mockTeamMember);
  });

  it("should handle REORDER_PARTICIPANTS", () => {
    const action = {
      type: "REORDER_PARTICIPANTS",
    };
    const state = reducer(
      { ...initialState, participants: [mockTeamMember] },
      action
    );
    expect(state.participants).toEqual([mockTeamMember]);
  });

  it("should handle INVALIDATE_CACHE", () => {
    const action = {
      type: "INVALIDATE_CACHE",
      payload: true,
    };
    const state = reducer(initialState, action);
    expect(state.invalidateCache).toEqual(true);
  });

  it("should handle SET_TIMER_STARTED", () => {
    const action = {
      type: "SET_TIMER_STARTED",
      payload: true,
    };
    const state = reducer(initialState, action);
    expect(state.timerStarted).toEqual(true);
  });
});
