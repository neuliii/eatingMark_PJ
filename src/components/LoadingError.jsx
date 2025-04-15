import styles from '../styles/loadingerror.module.scss'


export const Error = ({message}) => {
    return <div className={styles.error}>❗ {message}</div>;
}

export const Error404 = () => {
    return <div className={styles.error}> 404 ERROR </div>;
}


export const Loading = () => {
    return <div className={styles.loading}> ⏳ 로딩 중입니다... </div>;
}