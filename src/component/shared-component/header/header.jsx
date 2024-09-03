import React from 'react'
import './header.scss'

/**
 * Header is a reusable component.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {string} props.subtitle
 * @param {string} props.title
 * @param {string} props.backgroundImage

 *
 * @example
 * <Header
 *   subtitle="Sample Subtitle"
 *   title="Sample Title"
 *   backgroundImage="/path/to/your/image.png"
 * />
 */

const Header = ({ subtitle, title, backgroundImage }) => {
    return (
        <div className="header-custom-style color-white" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="title text-center">
                <p className='contact-sub'>{subtitle}</p>
                <p className="title-section">{title}</p>
            </div>
        </div>
    )
}

export default Header