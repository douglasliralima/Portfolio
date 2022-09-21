import Link from "next/link";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import headerStyles from "./header.module.css"

const Underline = (props: { title?: string, active?: boolean }) => {
    const { title, active } = props;
    const underlineContainer = React.createRef<HTMLAnchorElement>();
    const [underlineAnimation, setUnderlineAnimation] = useState(false)

    const [underlineContainerState, setUnderlineContainerState] = useState(underlineContainer.current)

    useEffect(() => setUnderlineContainerState(underlineContainer.current), [underlineContainer])

    const underline = () => {
        if (active) {
            return <div
                className={headerStyles.underliningMainAnimation}
                style={
                    {
                        maxWidth: underlineContainerState?.clientWidth,
                    }
                } />
        }
        if (!active && underlineAnimation) {
            return <div
                className={headerStyles.underliningOnMousePassAnimation}
                style={
                    {
                        maxWidth: underlineContainerState?.clientWidth,
                    }
                } />
        }
    }

    return <p>
        <a href="#" ref={underlineContainer}
            style={{ display: 'inline-block' }}
            onMouseEnter={() => {
                setUnderlineAnimation(true)
            }}
            onMouseLeave={() => {
                setUnderlineAnimation(false)
            }}
        >
            <Link href={title ? title.toLocaleLowerCase() : '/'} passHref>
                {title ?? "DOUGLAS LIMA"}
            </Link>
            {underline()}
        </a>
    </p>
}

const Header = () => {

    return < div className={headerStyles.header} >
        <div className={headerStyles.name}>
            <Underline active={true} />
        </div>

        <div className={headerStyles.navSection}>
            <Underline title="WORK" />
            <Underline title="ABOUT" />
            <Underline title="BLOG" />
        </div>
    </div >
}


export default Header