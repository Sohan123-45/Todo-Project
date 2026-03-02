

export function ModeToggle({modeToggle,setModeToggle}){
    const changeMode=()=>modeToggle==="light" ? setModeToggle("dark"):setModeToggle("light");
    return(
        <>
            <div onClick={changeMode}>Change Mode</div>
            <div>{modeToggle}</div>
        </>
    )
}