import Hero from './Hero'

class Hustler  {
    constructor() {
        this.hp = 50
        this.mp = 50
        this.ap = 50
        this.muscle = 10
        this.hustle = 10
        this.intro = 10
        this.proj = 10
        this.luck = 10
        this.level = 1
    }

    rollHp() {
        const roll1 = Math.random()
        const roll2 = Math.random() * 10
        let mod1 = (this.hp / 2) * roll2
        roll1 < 0.5 ? mod1 = mod1 * -1 :
        mod1 = mod1 
        this.hp = this.hp  + mod1
    }
    rollMp() {
        const roll1 = Math.random()
        const roll2 = Math.random() * 10
        let mod1 = (this.mp / 2) * roll2
        roll1 < 0.5 ? mod1 = mod1 * -1 :
        mod1 = mod1 
        this.mp = this.mp + mod1
    }
    rollAp() {
        const roll1 = Math.random()
        const roll2 = Math.random() * 10
        let mod1 = (this.ap / 2) * roll2
        roll1 < 0.5 ? mod1 = mod1 * -1 :
        mod1 = mod1 
        this.ap = (this.ap * 1.5)+ mod1
    }
    rollMuscle() {
        const roll1 = Math.random()
        const roll2 = Math.random() * 10
        let mod1 = (this.muscle / 2) * roll2
        roll1 < 0.5 ? mod1 = mod1 * -1 :
        mod1 = mod1 
        this.muscle = (this.muscle * 0.5) + mod1
    }
    rollHustle() {
        const roll1 = Math.random()
        const roll2 = Math.random() * 10
        let mod1 = (this.hustle / 2) * roll2
        roll1 < 0.5 ? mod1 = mod1 * -1 :
        mod1 = mod1 
        this.hustle = (this.hustle * 1.5) + mod1
    }
    rollIntro() {
        const roll1 = Math.random()
        const roll2 = Math.random() * 10
        let mod1 = (this.intro / 2) * roll2
        roll1 < 0.5 ? mod1 = mod1 * -1 :
        mod1 = mod1 
        this.intro = (this.intro * 0.75) + mod1
    }
    rollProj() {
        const roll1 = Math.random()
        const roll2 = Math.random() * 10
        let mod1 = (this.proj / 2) * roll2
        roll1 < 0.5 ? mod1 = mod1 * -1 :
        mod1 = mod1 
        this.proj = (this.proj * 0.75) + mod1
    }
    rollLuck() {
        const roll1 = Math.random()
        this.luck = this.luck * roll1
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

export default Hustler