 
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';
import styled from 'styled-components'

const Vignette = styled.img`
 width: 150px;
 border: 5px solid black;
 border-radius: 50%;
  :hover  {
  opacity: 0.3;
}

`


const Index = () => {
  const router = useRouter();
  const { name } = router.query;
  const email = router.query.email
  const picture = router.query.picture
  let url = picture + "&v=" + router.query.v + "&t=" + router.query.t
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Vignette src={url} />
        <h1 className={styles.title}> Hello {name}</h1>
        <h1 className={styles.title}>{email}</h1>

      </main>
    </div>
  );
};
export default Index;