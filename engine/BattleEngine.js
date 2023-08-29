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
        this.playerEffectsInProgress = false
        this.playerActionConfirmed = false
        this.playerActionInProgress = false
        this.playActionSfx = 'assets/sfx/menuPulse.mp3'
        this.playerTurnTaken = false
        this.enemyEffectsInProgress = false
        this.enemyAction = null
        this.enemyActionInProgress = false
        this.enemyActionSfx = 'assets/sfx/flurrySfx.mp3'
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

    executePlayerMove() {
        const moveName = this.playerAction
        console.log('move', moveName)
        if(!this.playerTurnTaken && this.playerActionConfirmed) {
            const pointType = this.playerBase.moves[moveName].cost[1]
            const cost = this.playerBase.moves[moveName].cost[0]
            console.log(pointType)
            console.log(cost)
            this.spendPoints(this.playerBase, pointType, cost)
            // this.enemyEffectsInProgress = true
            this.playerBase.moves[moveName].function(this.enemyBase)
            // this.addCardToPSlot(GigaChad)
            
            // this.playerTurnTaken = true
        }
    }
    
    async executeEnemyMove() {
        // const roll = Math.floor(Math.random() * 5);
        const roll = 0
        const movesArr = this.enemyBase.getMovesArr()
        const move = movesArr[roll]
        const pointType = move.cost[1]
        const cost = move.cost[0]
        if(this.enemyBase[pointType] < cost) {
            if(this.enemyBase.ap >= 10 || this.enemyBase.mp >= 10) {
                this.executeEnemyMove()
            } else {
                return
            }
        } else {
            this.enemyAction = move.name
            this.enemyActionSfx = move.sound
            this.enemyActionInProgress = true
            const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            await delay(500)
            this.enemyBase.img = this.playerBase.rageImg
            await delay(1900)
            this.enemyBase.img = this.playerBase.baseImg
            this.playerEffectsInProgress = true
            await delay(100)
            this.spendPoints(this.enemyBase, pointType, cost)
            move.function(this.playerBase)
            await delay(200)
            this.playerEffectsInProgress = false
        }
    }

    async executeRound() {
        this.checkMoveOrder()
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        if(this.playerMoveFirst){
            const moveName = this.playerAction
            this.playActionSfx = this.playerBase.moves[moveName].sound
            this.playerActionInProgress = true

            await delay(500)
            this.playerBase.img = this.playerBase.rageImg
            
            await delay(1900)
            this.playerBase.img = this.playerBase.baseImg
            this.enemyEffectsInProgress = true
            await delay(100)
            this.executePlayerMove()
            await delay(200)
            this.enemyEffectsInProgress = false
            this.playerRoundReset()

            if(this.enemyBase.hp > 0) {
                await this.executeEnemyMove()
                this.enemyRoundReset()
                this.roundReset()
            } else {
                // logic for battle win here
            }

        } else {
            await this.executeEnemyMove()
            this.enemyRoundReset()
            await delay(200)
            const moveName = this.playerAction
            this.playActionSfx = this.playerBase.moves[moveName].sound
            this.playerActionInProgress = true

            await delay(500)
            this.playerBase.img = this.playerBase.rageImg
            
            await delay(1900)
            this.playerBase.img = this.playerBase.baseImg
            this.enemyEffectsInProgress = true
            await delay(100)
            if(this.playerBase.hp > 0) {
                this.executePlayerMove()
                await delay(200)
                this.enemyEffectsInProgress = false
                this.playerRoundReset()
                this.roundReset()
            } else {
                // logic for battle loss here
            }
        }

    }
    playerRoundReset() {
        this.playerAction = null
        // this.playerActionConfirmed = false
        this.playerActionInProgress = false
        this.playActionSfx = 'assets/sfx/menuPulse.mp3'
    }
    enemyRoundReset() {
        this.enemyAction = null
        this.enemyActionInProgress = false
        this.enemyActionSfx = 'assets/sfx/flurrySfx.mp3'
    }
    roundReset() {
      this.playerActionConfirmed = false  
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
    spendPoints(target, pointType, cost) {
        const finalValue = this.playerBase[pointType] - cost
        target[pointType] = finalValue
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