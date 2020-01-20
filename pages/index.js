import styles from '../src/css/app.module.css';

function HomePage() {
  return <div className={'moreGeneralClass '+ styles.moreSpecificClass}>Welcome to Next.js!</div>
}

export default HomePage
