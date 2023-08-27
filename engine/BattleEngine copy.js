import Empty from './memes/empty/empty'
import CardBack from '../public/assets/memecards/cardbacks/cardback.jpg'
import {makeAutoObservable} from 'mobx'
import GigaChad from '../engine/memes/self/GigaChad'

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

    executePlayerMove(moveName) {
        console.log('move', moveName)
        if(!this.playerTurnTaken) {
            const pointType = this.playerBase.moves[moveName].cost[1]
            const cost = this.playerBase.moves[moveName].cost[0]
            console.log(pointType)
            console.log(cost)
            this.spendPoints(pointType, cost)
            this.playerBase.moves[moveName].function(this.enemyBase)
            this.addCardToPSlot(GigaChad)
            console.log('pcardslot1', this.pCardSlot1)
            // this.playerTurnTaken = true
        }
    }
    addCardToPSlot(memeCard) {
        console.log('addcard invoked')
        let targetSlot = this.pCardSlot1
        this.pCardSlot1.title === 'empty' ? targetSlot = this.pCardSlot1 :
        this.pCardSlot2.title === 'empty' ? targetSlot = this.pCardSlot2 :
        this.pCardSlot3.title === 'empty' ? targetSlot = this.pCardSlot3 :
        this.pCardSlot4.title === 'empty' ? targetSlot = this.pCardSlot4 :
        this.pCardSlot5.title === 'empty' ? targetSlot = this.pCardSlot5 :
        targetSlot = null;
        if (targetSlot !== null) {
            console.log('tslot !== conditional passed')
            console.log('mcard', memeCard)
            targetSlot = memeCard
        }
        console.log('tslot',targetSlot)
        
    }
    spendPoints(pointType, cost) {
        const finalValue = this.playerBase[pointType] - cost
        this.playerBase[pointType] = finalValue
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