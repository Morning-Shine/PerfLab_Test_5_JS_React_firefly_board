import React from "react";
import ToggleChangeTheme from "./ToggleChangeTheme";
import styles from "./ControlPanel.module.css";



export default function ControlPanel() {
    return (
        <div className={styles.container}>
            <ToggleChangeTheme/>
        </div>
    )
}
