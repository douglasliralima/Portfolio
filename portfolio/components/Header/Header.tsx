import headerStyles from "./header.module.css"

const Header = () =>
    <div className={headerStyles.header}>
        <div className={headerStyles.name}>
            <p>Douglas Lima</p>
        </div>

        <div className={headerStyles.navSection}>
            <p>Home</p>
            <p>Work</p>
            <p>About</p>
            <p>Blog</p>
        </div>
    </div>

export default Header