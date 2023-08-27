import CardBack from '../../../public/assets/memecards/cardbacks/cardback.jpg'
import {makeAutoObservable} from 'mobx'
class Empty {
        target = null
        stat = null
        mod = null
        title = 'empty'
        img = CardBack
    constructor() {
        makeAutoObservable(this)
        
    }
}

export default Empty