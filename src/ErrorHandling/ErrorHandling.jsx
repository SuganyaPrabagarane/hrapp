import styles from './ErrorHandling.module.css';

const ErrorHandling = ({error}) =>{
    if(!error) return '';
    return(
        <p className={styles.errorMessage}>{error}</p>
    )
}

export default ErrorHandling;