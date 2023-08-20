import Hero from './Hero'
import InfImg from '../public/assets/character/influencer.png'

class Influencer extends Hero {
    constructor() {
        super()
        this.img = InfImg
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
        const roll2 = Math.random() 
        let mod1 = (this.hustle / 2) * roll2
        this.hustle = Math.floor((this.hustle * 0.75) + mod1)
    }
    rollIntro() {
        const roll2 = Math.random() 
        let mod1 = (this.intro / 2) * roll2
        this.intro = Math.floor((this.intro * 0.5) + mod1)
    }
    rollProj() {
        const roll2 = Math.random() 
        let mod1 = (this.proj / 2) * roll2
        this.proj = Math.floor((this.proj * 1.5) + mod1)
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

export default Influencer