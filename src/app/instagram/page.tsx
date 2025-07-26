"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import styles from './page.module.scss';

export default function Instagram() {
    const [hydrated, setHydrated] = useState<boolean>(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    return (
        <div className={styles.container}>
            {hydrated && (
                <>
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className={styles.rotateY}
                        style={{ fontSize: "96px" }}
                    />
                </>
            )}
            {hydrated && (
                <h1 className={styles.text}>
                    Olá, bem-vindo à página Instagram!
                </h1>
            )}
        </div>
    );
}
