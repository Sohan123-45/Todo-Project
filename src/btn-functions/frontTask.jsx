export function frontTask( task, setTask) {
  const newStatus = task.status === "all" ? "active" : "completed";
  setTask(prev =>
    prev.map(t =>
      (t.id === task.id)? { ...t, status: newStatus }: t
    )
  );
}
