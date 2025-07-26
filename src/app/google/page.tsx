"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import styles from './page.module.scss';

export default function Google() {
    const [hydrated, setHydrated] = useState<boolean>(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    return (
        <div className={styles.container}>
            {hydrated && (
                <>
                    <FontAwesomeIcon
                        icon={faGoogle}
                        className={styles.rotateY}
                        style={{ fontSize: "96px" }}
                    />
                </>
            )}
            {hydrated && (
                <h1 className={styles.text}>
                    Olá, bem-vindo à página Google!
                </h1>
            )}
        </div>
    );
}
