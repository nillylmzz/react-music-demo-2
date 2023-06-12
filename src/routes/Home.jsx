import { Col, Row, Container } from 'react-bootstrap';

export default function Home() {

  const Flow = [
    {
      id: 1,
      className: 'd-block w-100  bg-light border border-dark p-2 mb-2 border-opacity-25   img-fluid rounded-circle bg-info',

      imageUrl: 'https://e-cdns-images.dzcdn.net/images/cover/f9abce2119ee4a3818a8775a6af351bc/232x232-none-80-0-0.png',
    },
    {
      id: 2,
      className: 'd-block w-100  bg-light border border-dark p-2 mb-2 border-opacity-25   img-fluid rounded-circle  ',

      imageUrl: 'https://e-cdns-images.dzcdn.net/images/cover/a6fd3972cde0cc5c5e9ed16de62d6917/232x232-none-80-0-0.png',
    },

    {
      id: 3,
      className: 'd-block w-100  bg-light border border-dark p-2 mb-2 border-opacity-25   img-fluid rounded-circle ',

      imageUrl: 'https://e-cdns-images.dzcdn.net/images/cover/134d9be9901c73f5618e022fa447871d/232x232-none-80-0-0.png',
    },
    {
      id: 4,

      imageUrl: 'https://e-cdns-images.dzcdn.net/images/cover/5836f254a07028abb236d750a6869f52/232x232-none-80-0-0.png',
      className: 'd-block w-100  bg-light border border-dark p-2 mb-2 border-opacity-25   img-fluid rounded-circle '
    },
    {
      id: 5,
      className: 'd-block w-100  bg-light border border-dark p-2 mb-2 border-opacity-25   img-fluid rounded-circle ',

      imageUrl: 'https://e-cdns-images.dzcdn.net/images/cover/face4d0d7ef17c0c105b925f025ce67b/232x232-none-80-0-0.png',
    },
    {
      id: 6,

      imageUrl: 'https://e-cdns-images.dzcdn.net/images/cover/2d68fb5571091c3616aebdb5f1fcdb1f/232x232-none-80-0-0.png',
      className: 'd-block w-100  bg-light border border-dark p-2 mb-2 border-opacity-25   img-fluid rounded-circle '
    },

  ]

  const PodcastList = [
    {
      id: 1,
      title: '',
      imageUrl: 'https://e-cdns-images.dzcdn.net/images/playlist/a3f7eb268141304633e6554de0ab7082/264x264-000000-80-0-0.jpg',
      podName: '100% Donovan Woods'
    },
    {
      id: 2,
      title: '',
      imageUrl: 'https://e-cdns-images.dzcdn.net/images/playlist/3bb21068e5457df81c0e331694bb2a3d/264x264-000000-80-0-0.jpg',
      podName: '100% Latto'
    },
    {
      id: 3,
      title: '',
      imageUrl: 'https://e-cdns-images.dzcdn.net/images/playlist/2f55249ab32038228c6241bf5644e463/264x264-000000-80-0-0.jpg',
      podName: '100% Rebelution'
    },
    {
      id: 4,
      title: '',
      imageUrl: 'https://e-cdns-images.dzcdn.net/images/playlist/deb65f1f3a35283db2631e7f5849c6d9/264x264-000000-80-0-0.jpg',
      podName: '100% Two Friends'
    },





  ]

  return (
    <Container className='mt-5'>
      <Row >
        <h4 className='mt-3 mb-5 fw-bold'>Flow: ne hissediyorsan onu çal</h4>
        {Flow.map((Flow) => (
          <Col className='col-xl-4 mx-2 col-6  d-block mx-auto mb-5' style={{ width: '10rem' }}>
            <div className='card-img '>
              <img
                className={Flow.className}
                src={Flow.imageUrl}

              />
            </div>

          </Col>



        ))}

        <h4 className='mb-3'>Seveceğin çalma listeleri</h4>

        {PodcastList.map((PodcastList) => (
          <Col className='col-xl-3 mb-5' >
            <div className='card-img  rounded'>
              <img
                className='img-fluid  '
                src={PodcastList.imageUrl}

              />
              <p className='mt-2 fs-5 text-center fw-bold'>{PodcastList.podName}</p>
            </div>

          </Col>
        ))}

      </Row>
    </Container>

  );
}
