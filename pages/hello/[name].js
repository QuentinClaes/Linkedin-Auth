 
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';
import styled from 'styled-components'

const BodyMain = styled.div`
  font-size: 12px;
  font-family: Comic Sans MS;
  padding: 50px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;


div#main-card {
  max-width: 300px;
  box-shadow: -5px 2px 18px 4px #ccc;
}

.cover-photo {
  background: #03436B;
  width: 300px;
  height: 100px;
}

.photo {
  background: #f9f9f9;
  width: 300px;
  height: 100px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
img {
  position: relative;
  top: -50px;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
  box-shadow: -1px 1px 11px 6px rgba(189, 172, 172, 0.33);
}
.content {
  background: #f9f9f9;
  width: 300px;
  height: 100px;
  position: relative;
  top: -35px;
}

.contact {
  background: #03436B;
  width: 300px;
  height: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

h2.name,
h3,
a {
  margin: 0;
  text-align: center;
}

h2.name {
  padding-bottom: 20px;
}

h3.fullstack {
  padding-bottom: 10px;
}

a {
  color: #FF6169;
  text-decoration: none;
}

a:hover {
  color: black;
}

ul {
  padding: 0;
}

.fa {
  font-size: 22px;
  padding: 10px;
  text-decoration: none;
  color: #0ab581;
}

.fa:hover {
  color: #000;
}

div#main-card:hover {
  -webkit-animation-name: pulse;  
  animation-name: pulse;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
  @-webkit-keyframes pulse {
  0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
  }
  50% {
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
      transform: scale3d(1.05, 1.05, 1.05);
  }
  100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
  }
}
  @keyframes pulse {
  0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
  }
  50% {
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
      transform: scale3d(1.05, 1.05, 1.05);
  }
  100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
  }
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
      <BodyMain className={styles.main}>
        <div id="main-card">
        <div class="cover-photo"></div>
        <div class="photo">
            <img src={url} alt=""/>
        </div>
        <div class="content">
            <h2 class="name">{name}</h2>
            <h3 class="fullstack">Full stack <br/> web developer</h3>
            <h3 class="email">
                <a>{email}</a>
            </h3>
        </div>
        <div class="contact">
            <ul>
                <a href="https://www.linkedin.com/in/abdeladhim-abbassi-5026b0120/" target="_blank">
                    <i class="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/Adhouma" target="_blank">
                    <i class="fa fa-github"></i>
                </a>
                <a href="https://codepen.io/Adhouma/" target="_blank">
                    <i class="fa fa-codepen"></i>
                </a>
            </ul>
        </div>
    </div>
      </BodyMain>
    </div>
  );
};
export default Index;