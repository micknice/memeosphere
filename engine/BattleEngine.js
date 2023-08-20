class BattleEngine{
    constructor(player, enemy) {
        this.playerBase = player
        this.enemyBase = enemy
        
        this.playerBattle = null
        this.enemyBattle = null
        this.pCardSlot1 = null
        this.pCardSlot2 = null
        this.pCardSlot3 = null
        this.pCardSlot4 = null
        this.pCardSlot5 = null
        this.eCardSlot1 = null
        this.eCardSlot2 = null
        this.eCardSlot3 = null
        this.eCardSlot4 = null
        this.eCardSlot5 = null

        this.round = 1
        this.playerMoveFirst = true
        this.playerAction = null
        this.playerTurnTaken = false
        this.enemyAction = null
        this.enemyTurnTaken = false
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


}