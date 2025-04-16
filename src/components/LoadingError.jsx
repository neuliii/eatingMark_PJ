import { useContext } from 'react';
import styles from '../styles/loadingerror.module.scss'
import { GetFetchApi } from '../context/GetFetchApi';


export const Error = () => {
    const { isError } = useContext(GetFetchApi)
    return <div className={styles.error}>❗ {isError}</div>;
}

export const Error404 = () => {
    return <div className={styles.error}> 404 ERROR </div>;
}


export const Loading = () => {
    return <div className={styles.loading}> ⏳ 로딩 중입니다... </div>;
}