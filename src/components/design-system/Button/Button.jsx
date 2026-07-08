import styles from "./Button.module.css"

function Button({children, icon, iconPosition = "left", variant = "primary", size="md", disabled = false}) {
    const isIconOnly = icon && !children
    return (
        <button disabled={disabled} className={`
            ${styles.button}
            ${styles[variant]}
            ${styles[size]}
            ${isIconOnly ? styles.iconOnly : ""}
        `}>
        {iconPosition === "left" && icon}
        {children}
        {iconPosition === "right" && icon}
        </button>
    )
}

export default Button