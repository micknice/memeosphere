import BattleEngine from "../BattleEngine";
import Nerd from '../Nerd'
import Bro from '../Bro'
import Hustler from '../Hustler'
import Influencer from '../Influencer'

import {makeAutoObservable} from 'mobx'


class BattleStore {
    constructor(player, enemy) {
        console.log(player)
        makeAutoObservable(this)
        
        this.battleEngine = new BattleEngine(player, enemy)
        this.initializePlayer = this.battleEngine.playerBase.initializeNewPlayer()
        this.initializeEnemy = this.battleEngine.enemyBase.initializeNewPlayer()
        console.log('player @ store post initialization', player)

    }
}


const player = new Nerd()
// player.initializeNewPlayer()

const enemy = new Influencer()
// enemy.initializeNewPlayer()

const battleStore = new BattleStore(player, enemy)
console.log('battlestore', battleStore.battleEngine.playerBase)
// battleStore.battleEngine.playerBase.initializePlayer()

export default battleStore