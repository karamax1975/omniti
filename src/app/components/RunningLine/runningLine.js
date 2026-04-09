import styles from "./styles.module.scss";

export const RunningLine = () => {

  const message = "возможности не приходят сами – вы создаете их";
  return (
    <div className={styles.runningLine}>
      <div className={styles.text} style={{}}>
        {message}
      </div>      
    </div>

    
  );  
}