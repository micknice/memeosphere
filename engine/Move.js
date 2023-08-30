import { makeAutoObservable } from 'mobx'


class Move {
    name = 'empty'
    target = 'empty'
    effect = 'empty'
    cost = 0
    level = 0
    sound = ''
    function = () => {}

    constructor() {
        makeAutoObservable(this)
    }
}

export default Move