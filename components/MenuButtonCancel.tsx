import battleStore from "@/engine/BattleStore/BattleStore"
import useSound from "use-sound"



const MenuButtonCancel = (props : any) => {
    const [playMenuPlink] = useSound('assets/sfx/menuPlink.mp3')
    const [playMenuCancel] = useSound('assets/sfx/menuCancel.mp3')

    const handleCancel = () => {
        console.log('tttttt')
        battleStore.hoverVal = battleStore.hoverValDefault
        battleStore.hoverLock = false
        battleStore.battleEngine.playerAction = null
        
        playMenuCancel()
    }
    return (
        <div onClick={(event) => {handleCancel()}}
            className=' rounded-lg w-5/6 hover:scale-105 select-none' >
            <p className=' rounded-lg p-2 font-mono text-l text-white shadow-xl hover:scale-110'>{props.text}</p>
                                            
        </div>
    )

}

export default MenuButtonCancel