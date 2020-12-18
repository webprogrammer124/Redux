export const increment = 'INCREMENT'
export const decrement = 'DECREMENT'
export function incAction(){
    return {
        type: increment
    }
}export function decAction(){
    return {
        type: decrement
    }
}