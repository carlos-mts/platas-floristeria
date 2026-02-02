const SidebarItem = ({ children, active }) => (
  <div
    className={`
      px-3 py-2 rounded-xl cursor-pointer text-sm
      ${active 
        ? 'bg-white font-medium text-stone-800 shadow-sm'
        : 'text-stone-600 hover:bg-white/60'}
    `}
  >
    {children}
  </div>
)

export default SidebarItem;