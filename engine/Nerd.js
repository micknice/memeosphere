import Hero from './Hero'
import NerdImg from '../public/assets/character/nerd_smoking.png'

class Nerd extends Hero {
    constructor() {
        super()
        this.img = NerdImg
        this.moves = {
            'Beta-Test': {
                    name: 'Beta Test',
                    target: 'enemy',
                    effect: 'Deals a small amount of damage while returning a report on enemies hidden attributes. After using Beta Test the Early Access ability can be used.',
                    cost: [10, 'ap']

                },
                'D-20': {
                    name: 'D-20',
                    target: 'enemy',
                    effect: 'Roll a single D-20. Deals the same damage as on the Die',
                    const: [10, 'ap']

                },
                'EarlyAccess': {
                    name: 'Early Access',
                    target: 'enemy',
                    effect: 'Deals mid-damage',
                    cost: [15, 'ap']
                }
            
        }
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


}

export default Nerd