import * as React from 'react';
import fistLogo from '../../assets/FIST Logo.png';
import Button from '@mui/material/Button';
import styles from './KIAButton.module.css'
import { useState } from 'react';

interface KIAButtonProps {
    onClick: () => void
}

export default function KIAButton(props: KIAButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    console.log(styles)

    const buttonClasses = `${styles.kiaButton} ${styles.hidden}`
    return (
        <div className={styles.kiaContainer} onClick={() => props.onClick()}>
            <Button 
                className={buttonClasses}
                variant='contained'>
                K.I.A.
            </Button>
            <img 
                src={fistLogo} 
                alt="Preact logo" 
                className={styles.fistLogoImage}
                onMouseOver={() => {setIsHovered(true)}}
                onMouseLeave={() => {setIsHovered(false)}}/>
        </div>
    )
}