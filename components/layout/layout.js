import styles from './layout.module.scss'

export default function Layout(props) {
  return <div className={styles.content} {...props} />
}
