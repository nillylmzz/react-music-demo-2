import { Col, Row, Container } from 'react-bootstrap';

export default function Podcast() {


  const PodcastList = [
    {
      id: 1,
      title: '',
      imageUrl:'https://e-cdns-images.dzcdn.net/images/talk/77497a98cf166ac19fe09880e7ac0f12/264x264-000000-80-0-0.jpg',
      podName:'O Tarz Mı?'
    },
    {
      id: 2,
      title: '',
      imageUrl:'https://e-cdns-images.dzcdn.net/images/talk/b1ed7a9e50e847e95a74dcb9f724442c/264x264-000000-80-0-0.jpg',
      podName:'Duolingo Spanish Podcast'
    },
    {
      id: 3,
      title: '',
      imageUrl:'https://e-cdns-images.dzcdn.net/images/talk/f6baae3e3f4f16107eab1c1888b5d6df/264x264-000000-80-0-0.jpg',
      podName:'Parler anglais?'
    },
    {
      id:4,
      title: '',
      imageUrl:'https://e-cdns-images.dzcdn.net/images/talk/0dd73c2faba3339dcd1092589391ca3a/264x264-000000-80-0-0.jpg',
      podName:'Matem?'
    },


 


  ]

  const Kategoriler = [
    {
      id: 1,
      title: '',
      imageUrl:'https://e-cdns-images.dzcdn.net/images/misc/4e50a78a021e3a0b65b4f280565f38ea/134x264-000000-80-0-0.jpg',

      katagoriName:"Yeni podcast'ler"
    },
    {
      id: 2,
      title: '',
      imageUrl:'https://e-cdns-images.dzcdn.net/images/misc/e85521207586b547b39a837120253e50/134x264-000000-80-0-0.jpg',
      katagoriName:'Podcast listeleri'
    },
    {
      id: 3,
      title: '',
      imageUrl:'https://e-cdns-images.dzcdn.net/images/misc/9efe3c34692431b5f7337668d5c46a5d/134x264-000000-80-0-0.jpg',
      katagoriName:'Ruh sağlığı'
    },
    {
      id: 4,
      title: '',
      imageUrl:'https://e-cdns-images.dzcdn.net/images/misc/e705dc11a7f8bf8e06bb41b4dc07407f/134x264-000000-80-0-0.jpg',
      katagoriName:'Spor koçluğu'
    },
  ]


  return (
    
    <Container className='mt-5'>
      <Row >
        <h4>Popüler podcast'ler </h4>

        {PodcastList.map((PodcastList) => (
          <Col className='col-xl-3 mb-5' >
            <div className='card-img shadow-lg p-3 mb-5 bg-light rounded'>
              <img
               className='img-fluid '
                src={PodcastList.imageUrl}
               
              />
              <p>{PodcastList.podName}</p>
            </div>

          </Col>
        ))}


        <h4>Tüm kategoriler</h4>
        {Kategoriler.map((Kategoriler) => (
          <Col className='col-xl-3 mb-5 ' >
            <div className='card-img  position-relative'>
              <img
               className='img-fluid opacity-75'
                src={Kategoriler.imageUrl}
               
              />
              <p className='position-absolute top-50 start-50 translate-middle fw-bold text-white ' style={{fontSize:'17px'}}>{Kategoriler.katagoriName}</p>
            </div>

          </Col>
        ))}
      </Row>
    </Container>
  );
}
