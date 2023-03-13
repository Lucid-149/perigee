import styles from "./utils.module.css";
interface Props {
    content: any;
}

const Container = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {props.content}
            </div>
        </div>
    );
};

export default Container;