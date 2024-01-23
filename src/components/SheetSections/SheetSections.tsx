import styles from './SheetSections.module.css'

interface SheetSectionProps {
    title: string
    long: boolean
}

export default function SheetSections(props: SheetSectionProps) {
    const divClasses = `${styles.border} ${ props.long ? styles.long : ""}`
    
    return (<>
        <div className={divClasses}>
            <h2 class={styles.heading}>{props.title}</h2>
        </div>
    </>
    )
}