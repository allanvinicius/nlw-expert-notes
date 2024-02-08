export function NoteCard() {
  return (
    <button className="text-left rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">há 5 dias</span>

      <p className="text-sm leading-6 text-slate-400">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti,
        ducimus eligendi nihil asperiores enim mollitia in sapiente perferendis
        ipsa maxime odit impedit quia soluta, a omnis amet reiciendis fugiat?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero dolorum
        minima illum amet esse ea odio excepturi, et quisquam, error nemo enim,
        ipsam a aspernatur eveniet ex. Necessitatibus, libero numquam.
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}
