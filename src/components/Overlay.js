const Overlay = ({isSidebarOpen, toggleSidebar}) => {
  const styles = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.8)",
    zIndex: "1500",
    // transitionDuration: ".4s"
  }

  return isSidebarOpen && <div style={styles} onClick={toggleSidebar}></div>
}

export default Overlay