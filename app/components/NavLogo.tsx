import React from 'react'

const NavLogo = () => {
    return (
        <div className='navforLogsOnly flex justify-between m-auto py-1 items-center max-w-7xl md:px-0 px-2 '>
            <img src="/glamericlogo.png" alt="Medico Logo" className="md:h-20 md:w-48 h-16 w-40 mr-2" />
            <img src="/dentallogo.png" alt="Medico Logo" className="h-20 w-32 mr-2" />
        </div>
    )
}

export default NavLogo