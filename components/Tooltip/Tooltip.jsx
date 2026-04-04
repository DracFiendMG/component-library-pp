export default function Tooltip({ theme = "black" }) {
    const allStyles = {
        dark: {
            backgroundColor: `var(--tooltip-dark-bg-${theme})`,
            '--tooltip-bg': `var(--tooltip-dark-bg-${theme})`
        },
        light: {
            backgroundColor: `var(--tooltip-light-bg-${theme.slice(6)})`,
            '--tooltip-bg': `var(--tooltip-light-bg-${theme.slice(6)})`
        },
        darkTitle: {
            color: `var(--tooltip-dark-header)`
        },
        lightTitle: {
            color: `var(--tooltip-light-title-${theme.slice(6)})`
        },
        darkContent: {
            color: `var(--tooltip-dark-content-${theme})`
        },
        lightContent: {
            color: `var(--tooltip-light-content-${theme.slice(6)})`
        }
    }

    let styles = allStyles.dark;
    let titleStyles = allStyles.darkTitle;
    let contentStyles = allStyles.darkContent;

    if (theme.startsWith("light-")) {
        styles = allStyles.light;
        titleStyles = allStyles.lightTitle;
        contentStyles = allStyles.lightContent;
    }

    const inboxColor = theme.startsWith("light-") ? `var(--tooltip-light-inbox-${theme.slice(6)})` : `var(--tooltip-dark-inbox-${theme})`;
    const xmarkColor = theme.startsWith("light-") ? `var(--tooltip-light-content-${theme.slice(6)})` : `var(--tooltip-dark-content-black)`;

    return (
        <div className="tooltip" style={styles}>
            <span className="tooltip-arrow" aria-hidden="true"></span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={inboxColor}><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-120H640q-30 38-71.5 59T480-240q-47 0-88.5-21T320-320H200v120Zm349-142q31-22 43-58h168v-360H200v360h168q12 36 43 58t69 22q38 0 69-22ZM200-200h560-560Z"/></svg>
            <div className="tooltip-content">
                <p style={titleStyles}>Archive notes</p>
                <p style={contentStyles}>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
            </div>
            <i className="fa-solid fa-xmark" style={{ color: xmarkColor }}></i>
        </div>
    )
}