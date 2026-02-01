const Show  = ({ when = false, fallback = null, children = null }) => when ? children : fallback;
export default Show;
