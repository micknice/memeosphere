import Empty from './memes/empty/empty'
import CardBack from '../public/assets/memecards/cardbacks/cardback.jpg'
import {makeAutoObservable} from 'mobx'

const empty = new Empty()

class BattleEngine{
    constructor(player, enemy) {
        console.log('player @ engine', player)
        makeAutoObservable(this)
        this.playerBase = player
        this.enemyBase = enemy
        
        this.playerBattle = this.playerBase
        this.enemyBattle =  this.enemyBase
        this.pCardSlot1 = empty
        this.pCardSlot2 = empty
        this.pCardSlot3 = empty
        this.pCardSlot4 = empty
        this.pCardSlot5 = empty
        this.eCardSlot1 = empty
        this.eCardSlot2 = empty
        this.eCardSlot3 = empty
        this.eCardSlot4 = empty
        this.eCardSlot5 = empty

        this.round = 1
        this.playerMoveFirst = true
        this.playerAction = null
        this.playerTurnTaken = false
        this.enemyAction = null
        this.enemyTurnTaken = false
        this.moveText = ''
    }

    checkMoveOrder() {
        let moveFirst = true
        if (this.playerBattle.hustle < this.enemyBattle.hustle) {
            moveFirst = false
        } else if (this.playerBattle.hustle === this.enemyBattle.hustle) {
            const roll = Math.random()
            if (roll < 0.5) {moveFirst = false}
        }
        this.playerMoveFirst = moveFirst
    }

    executePlayerAction() {
        this.playerAction()
        this.playerTurnTaken = true
    }

    executeEnemyAction() {
        this.playerAction()
        this.playerTurnTaken = true
    }

    initialize() {
        this.playerBase.initializeNewPlayer()
    }


}

export default BattleEngine