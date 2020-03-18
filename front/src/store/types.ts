export interface Event {
    startValue: number 
    startYear: number
    endYear: number
    memberId: number
    categoryId: number
    subcategoryId: number
    intervalYear: number
    interestRate: number
    eventMemo: string 
}

export interface Events {
    events: Event[]
}

export const SET_EVENTS = 'SET_EVENTS'

interface SetEventsAction {
    type: typeof SET_EVENTS
    payload: Events
}

export type EventActionTypes = SetEventsAction