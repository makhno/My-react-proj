export const DUMMY_ACTION = 'DUMMY_ACTION'
export const SEND_MESSAGE = 'SEND_MESSAGE'

export function dummyAction(str: string) {
    return {
        type: DUMMY_ACTION,
        str
    }
}

export function sendMessage(str: string) {
    return {
        type: SEND_MESSAGE,
        str
    }
}
