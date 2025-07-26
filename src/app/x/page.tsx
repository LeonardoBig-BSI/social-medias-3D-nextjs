"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import styles from './page.module.scss';

export default function X() {
    const [hydrated, setHydrated] = useState<boolean>(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    return (
        <div className={styles.container}>
            {hydrated && (
                <>
                    <FontAwesomeIcon
                        icon={faTwitter}
                        className={styles.rotateY}
                        style={{ fontSize: "96px" }}
                    />
                </>
            )}
            {hydrated && (
                <h1 className={styles.text}>
                    Olá, bem-vindo à página X!
                </h1>
            )}
        </div>
    );
}
