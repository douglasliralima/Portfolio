import React, { useEffect } from "react";
import { useState, useRef } from "react";
import headerStyles from "./header.module.css"

const Underline = (props: { title: string, active: boolean }) => {
    const { title, active } = props;
    const underlineContainer = React.createRef<HTMLAnchorElement>();
    const [underlineAnimation, setUnderlineAnimation] = useState(active)

    const [underlineContainerState, setUnderlineContainerState] = useState(underlineContainer.current)

    useEffect(() => setUnderlineContainerState(underlineContainer.current), [underlineContainer])

    return <p>
        <a href="#" ref={underlineContainer}
            style={{ display: 'inline-block' }}
            onMouseEnter={() => {
                setUnderlineAnimation(true)
            }}
        >
            {title}
            <div
                className={`${headerStyles.underlined} ${underlineAnimation && headerStyles.underliningAnimation}`}
                style={
                    {
                        maxWidth: underlineContainerState?.clientWidth,
                    }
                } />
        </a>
    </p>


}

const Header = () => {

    return < div className={headerStyles.header} >
        <div className={headerStyles.name}>
            <Underline title="DOUGLAS LIMA" active={true} />
        </div>

        <div className={headerStyles.navSection}>
            <p>WORK</p>
            <p>ABOUT</p>
            <p>BLOG</p>
        </div>
    </div >
}


export default Header