import NerdImg from '../public/assets/character/nerd_smoking.png'
import NerdRageImg from '../public/assets/fxsprites/nerdRageHQ.gif'
import { makeAutoObservable } from 'mobx'

class Nerd  {
    hp = 50
    mp = 50
    ap = 50
    muscle = 10
    hustle = 10
    intro = 10
    proj = 10
    luck = 10
    level = 1
    img = NerdImg
    baseImg = NerdImg
    rageImg = NerdRageImg
    movesArr = []
        
    startingMoves = {
        'Beta-Test': {
            name: 'Beta-Test',
            target: 'enemy',
            effect: 'Deals a small amount of damage while returning a report on enemies hidden attributes. After using Beta Test the Early Access ability can be used.',
            cost: [10, 'ap'],
            level:1,
            sound: 'assets/sfx/electricSfx.mp3',
            function: (enemy) => {
                console.log('pre reassignment', this.moves)
                const hp = enemy.hp - 10
                if(hp < 0) {
                    enemy.hp = 0
                } else {
                    enemy.hp = hp
                }
                this.evolveMoveSet()
                
                console.log('moves', this.moves)
                this.getMovesArr()
            }
        },
        'D-20': {
            name: 'D-20',
            target: 'enemy',
            effect: 'Roll a single D-20. Deals the same damage as on the Die',
            cost: [10, 'ap'],
            level: 1,
            sound: 'assets/sfx/flurrySfx.mp3',
            function: (enemy) => {
                const roll = Math.floor(Math.random() * (20 - 1) + 1);
                const hp = enemy.hp - roll
                if(hp < 0) {
                    enemy.hp = 0
                } else {
                    enemy.hp = hp
                }
            }
        },
        'BugFix': {
            name: 'BugFix',
            target: 'pdeck',
            effect: 'Has a percentage chance of disabling an offensive card which has been injected into players stack',
            cost: [20, 'mp'],
            level: 1,
            sound: 'assets/sfx/electronics1Sfx.mp3',
            function: () => {}
        },
        'Giga-Brain': {
            name: 'Giga-Brain',
            target: 'self',
            effect: 'Applies a percentage buff to Introspection stat',
            cost: [20, 'mp'],
            level: 1,
            sound: 'assets/sfx/powerUpLongSfx.mp3',
            function: () => {}
        },
        'SwagHammer': {
            name: 'SwagHammer',
            target: 'self',
            effect: 'Temporary immunity to enemy status influence',
            cost: [20, 'mp'],
            level: 1,
            sound: 'assets/sfx/gigHitSfx.mp3',
            function: () => {}
        },
        'Mind>Matter': {
            name: 'Mind>Matter',
            target: 'self',
            effect: 'Converts a small amount of MP to AP, conversion efficiency scales with Introspection stat',
            cost: [20, 'mp'],
            level: 1,
            sound: 'assets/sfx/littlePowerUpSfx.mp3',
            function: () => {
                this.ap += 20
            }
        }
        
    }
    moves = this.startingMoves
    evoMoves = {
        'EarlyAccess': {
            name: 'EarlyAccess',
            target: 'enemy',
            effect: 'Deals mid-damage',
            cost: [15, 'ap'],
            level: 1,
            sound: 'assets/sfx/magicAttack1Sfx.mp3',
            function: (enemy) => {
                const hp = enemy.hp - 20
                if(hp < 0) {
                    enemy.hp = 0
                } else {
                    enemy.hp = hp
                }
            }
        },
        'D-20': {
            name: 'D-20',
            target: 'enemy',
            effect: 'Roll a single D-20. Deals the same damage as on the Die',
            cost: [10, 'ap'],
            level: 1,
            sound: 'assets/sfx/flurrySfx.mp3',
            function: (enemy) => {
                const roll = Math.floor(Math.random() * (20 - 1) + 1);
                const hp = enemy.hp - roll
                if(hp < 0) {
                    enemy.hp = 0
                } else {
                    enemy.hp = hp
                }
            }
        },
        'BugFix': {
            name: 'BugFix',
            target: 'pdeck',
            effect: 'Has a percentage chance of disabling an offensive card which has been injected into players stack',
            cost: [20, 'mp'],
            level: 1,
            sound: 'assets/sfx/electronics1Sfx.mp3',
            function: () => {}
        },
        'Giga-Brain': {
            name: 'Giga-Brain',
            target: 'self',
            effect: 'Has a percentage chance of disabling an offensive card which has been injected into players stack',
            cost: [20, 'mp'],
            level: 1,
            sound: 'assets/sfx/powerUpLongSfx.mp3',
            function: () => {}
        },
        'SwagHammer': {
            name: 'SwagHammer',
            target: 'self',
            effect: 'Has a percentage chance of disabling an offensive card which has been injected into players stack',
            cost: [20, 'mp'],
            level: 1,
            sound: 'assets/sfx/gigHitSfx.mp3',
            function: () => {}
        },
        'Mind>Matter': {
            name: 'Mind>Matter',
            target: 'self',
            effect: 'Converts a small amount of MP to AP, conversion efficiency scales with Introspection stat',
            cost: [20, 'mp'],
            level: 1,
            sound: 'assets/sfx/littlePowerUpSfx.mp3',
            function: () => {
                this.ap += 20
            }
        }
        
    }
    
            
    constructor() {
        makeAutoObservable(this)
        this.initializeMovesArr = this.getMovesArr()
        
    }

    rollHp() {
        const roll2 = Math.random()
        let mod1 = (this.hp / 2) * roll2
        this.hp = Math.floor(this.hp + mod1)
    }
    rollMp() {
        const roll2 = Math.random() 
        let mod1 = (this.mp / 2) * roll2
        this.mp = Math.floor((this.mp * 1.5) + mod1)
    }
    rollAp() {
        const roll2 = Math.random()
        let mod1 = (this.ap / 2) * roll2
        this.ap = Math.floor(this.ap + mod1)
    }
    rollMuscle() {
        const roll2 = Math.random() 
        let mod1 = (this.muscle / 2) * roll2
        this.muscle = Math.floor((this.muscle * 0.75) + mod1)
    }
    rollHustle() {
        const roll1 = Math.random()
        const roll2 = Math.random() * 10
        let mod1 = (this.hustle / 2) * roll2
        roll1 < 0.5 ? mod1 = mod1 * -1 :
        mod1 = mod1 
        this.hustle = (this.hustle * 0.75) + mod1
    }
    rollIntro() {
        const roll2 = Math.random()
        let mod1 = (this.intro / 2) * roll2
        this.intro = Math.floor((this.intro * 1.5) + mod1)
    }
    rollProj() {
        const roll2 = Math.random()
        let mod1 = (this.proj / 2) * roll2
        this.proj = Math.floor((this.proj * 0.5) + mod1)
    }
    rollLuck() {
        const roll1 = Math.random()
        this.luck = Math.floor(this.luck * roll1)
    }
    initializeNewPlayer() {
        this.rollHp()
        this.rollMp()
        this.rollAp()
        this.rollMuscle()
        this.rollHustle()
        this.rollIntro()
        this.rollProj()
        this.rollLuck()
    }
    getMovesArr() {
        const moves = Object.values(this.moves)
        this.movesArr = moves
        return this.movesArr
    }
    evolveMoveSet() {
        this.moves = this.evoMoves
    }




}

export default Nerd