const SideBarRow = ({selected, Icon, title}) => {
    return (
        <div className={`sidebarrow ${selected ? 'selected': ''}`}>
            <Icon className='side3barrow_icon' />
            <h2 className='sidebarrow_title'>{title}</h2>
        </div>
    )
}

export default SideBarRow;