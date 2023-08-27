import Empty from './memes/empty/empty'
import CardBack from '../public/assets/memecards/cardbacks/cardback.jpg'
import {makeAutoObservable} from 'mobx'
import GigaChad from './memes/self/GigaChad'

const empty = new Empty()

class BattleEngine{
    
    constructor(player, enemy) {
        makeAutoObservable(this)
        console.log('player @ engine', player)
        this.playerBase = player
        this.enemyBase = enemy
        
        this.playerBattle = this.playerBase
        this.enemyBattle =  this.enemyBase
        this.pCardSlot1 = new Empty()
        this.pCardSlot2 = new Empty()
        this.pCardSlot3 = new Empty()
        this.pCardSlot4 = new Empty()
        this.pCardSlot5 = new Empty()
        this.eCardSlot1 = new Empty()
        this.eCardSlot2 = new Empty()
        this.eCardSlot3 = new Empty()
        this.eCardSlot4 = new Empty()
        this.eCardSlot5 = new Empty()
        
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
            
            // this.playerTurnTaken = true
        }
    }
    addCardToPSlot(memeCard) {
        // console.log('addcard invoked')
        // let targetSlot = 'pCardSlot1'
        // this.pCardSlot1.title === 'empty' ? targetSlot = 'pCardSlot1' :
        // this.pCardSlot2.title === 'empty' ? targetSlot = 'pCardSlot2' :
        // this.pCardSlot3.title === 'empty' ? targetSlot = 'pCardSlot3' :
        // this.pCardSlot4.title === 'empty' ? targetSlot = 'pCardSlot4' :
        // this.pCardSlot5.title === 'empty' ? targetSlot = 'pCardSlot5' :
        // targetSlot = null;
        // if (targetSlot !== null) {
        //     console.log('tslot !== conditional passed')
        //     console.log('mcard', memeCard)
        //     this[targetSlot].target = memeCard.target
        //     console.log('pslot', this.pCardSlot1.target)
        // }
        // console.log('tslot',targetSlot)
        // console.log('pcardslot1', this.pCardSlot1)
        this.pCardSlot1.img = memeCard.img
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