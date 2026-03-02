export function backTask(task,setTask) {
    const newStatus=task.status==="active" ? "all":"active";
    setTask(prev=>
        prev.map(t=>
        (t.id===task.id)?{...t, status:newStatus}:t
        )
    );
}