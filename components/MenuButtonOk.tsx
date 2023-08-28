import battleStore from "@/engine/BattleStore/BattleStore"
import useSound from "use-sound"



const MenuButtonOk = (props : any) => {
    const [playMenuPlink] = useSound('assets/sfx/menuPlink.mp3')
    const [playMenuSelect] = useSound('assets/sfx/menuSelect.mp3')

    const handleOk = () => {
        console.log('tttttt')
        battleStore.battleEngine.playerActionConfirmed = true
        
        // battleStore.battleEngine.executePlayerMove()
        playMenuSelect()
    }
    return (
        <div onClick={(event) => {handleOk()}}
            className=' rounded-lg w-5/6 hover:scale-105 select-none' >
            <p className=' rounded-lg p-2 font-mono text-l text-white shadow-xl hover:scale-110'>{props.text}</p>
                                            
        </div>
    )

}

export default MenuButtonOk