import { Col, Row, Container } from 'react-bootstrap';
export default function Favori() {

  const turk = [
    {
      id: 1,
      title: "GÜNTAÇ ÖZDEMİR",
      imageUrl: 'https://i.scdn.co/image/ab67616d0000b2731a9d64933ff8c96a61026b1f',
      paragraf:'Benimle Yan'
    },
    {
      id: 2,
      title: "MANGA",
      imageUrl:'https://i.ytimg.com/vi/LLEx4gsqFRk/maxresdefault.jpg',
      paragraf:'Bir Kadın Çizeceksin',
    },

    {
      id: 3,
      title: "SENA ŞENER",
      imageUrl:'https://i.ytimg.com/vi/wFRS1knPg_Y/maxresdefault.jpg',
      paragraf:'Sevmemeliyiz'      
    },

    {
      id: 4,
      title: "MAVİ GRİ",
      imageUrl:'https://i.scdn.co/image/ab67616d0000b273c85ba2827735fc4ff063760b',
      paragraf:'Dünyanın En Güzel Kızı'
    },
    {
      id: 5,
      title: "BARIŞ AKARSU",
      imageUrl:'https://images.genius.com/d92719f1e60e9e596da315d418880e23.1000x1000x1.jpg',
      paragraf:'Rüzgar'
    },
    {
      id: 6,
      title: "PERA",
      imageUrl:'https://i.scdn.co/image/ab67616d0000b273371d74c9dc31a01dcab0f005',
      paragraf:'Sensiz Olmaz'
    },
    {
      id: 7,
      title: "DEDİLER Kİ",
      imageUrl: 'https://i.ytimg.com/vi/XLXiWHz89jY/maxresdefault.jpg',
      paragraf:'Anlarsın'
    },
    {
      id: 8,
      title: "MOR VE ÖTESİ",
      imageUrl:'https://i1.sndcdn.com/artworks-kV4KCv7pHbwAosNw-zmj0Kg-t500x500.jpg',
      paragraf:'Bir Derdim Var',
    },

    {
      id: 9,
      title: "HADİSE",
      imageUrl:'https://upload.wikimedia.org/wikipedia/tr/e/eb/Hadise_-_K%C3%BC%C3%A7%C3%BCk_Bir_Yol.jpg',
      paragraf:'Küçük Bir Yol'      
    },

    {
      id: 10,
      title: "YÜKSEK SADAKAT",
      imageUrl:'https://i1.sndcdn.com/artworks-000292126884-wf80b6-t500x500.jpg',
      paragraf:'KAFİLE'
    },
    {
      id: 11,
      title: "Elyas & Taha",
      imageUrl:'data:image/jpeg;base64,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',
      paragraf:'Gece Mavisi'
    },
    {
      id: 12,
      title: "MURAT BAŞARAN",
      imageUrl:'https://i.ytimg.com/vi/HRvPD9EjvDg/maxresdefault.jpg',
      paragraf:'Nankör'
    },
    {
      id: 13,
      title: "KIRAÇ",
      imageUrl:'data:image/jpeg;base64,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',
      paragraf:'Yüzüncü Yıl'
    },
    {
      id: 14,
      title: "NEŞET ERTAŞ",
      imageUrl: 'https://i.ytimg.com/vi/nOgEMfMl4jk/maxresdefault.jpg',
      paragraf:'Sen Benimsin Ben Senin'
    },
    {
      id: 15,
      title: "MÜSLÜM GÜRSES",
      imageUrl:'https://i.ytimg.com/vi/bK-cMOn7fXU/hqdefault.jpg',
      paragraf:'Yıllar Utansın',
    },

    {
      id: 16,
      title: "SİBELCAN",
      imageUrl:'https://i.ytimg.com/vi/dkU66943ZkA/maxresdefault.jpg',
      paragraf:'Vallahi Yalan'      
    },

    {
      id: 17,
      title: "YILDIZ TİLBE",
      imageUrl:'https://i.ytimg.com/vi/_mr6-q6Rpx4/mqdefault.jpg',
      paragraf:'Delikanlım'
    },
        {
      id: 18,
      title: "DUMAN",
      imageUrl:'https://i.ytimg.com/vi/NUXbWSsMLSI/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgXChLMA8=&rs=AOn4CLCRxzQP0slP9vqwHBCElF7F80tqpA',
      paragraf:'Bal'
    },
  
  ]



  const yabanci = [
    {
      id: 1,
      title: "GUNS N ROSES",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/a/af/November_Rain.jpg',
      paragraf:'November Rain'
    },
    {
      id: 2,
      title: "ADELE",
      imageUrl:'https://2.bp.blogspot.com/-haQNZKYijpk/UpjlVOfwwII/AAAAAAAABT4/aRhMGWipY50/s1600/adele-wallpaper-hd-other.jpg',
      paragraf:'Someone Like You',
    },

    {
      id: 3,
      title: "NİCK JONAS",
      imageUrl:'https://m.media-amazon.com/images/M/MV5BODUxOWM0NWQtYjg4Yy00NTJkLWI0Y2UtMzRhYWNmM2YxMWYzXkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg',
      paragraf:'Close'      
    },

    {
      id: 4,
      title: "ARİANA GRANDE",
      imageUrl:'https://m.media-amazon.com/images/I/A1LRANDvjvL._UF1000,1000_QL80_.jpg',
      paragraf:'Dangerous Woman'
    },
    {
      id: 5,
      title: "SKILLET",
      imageUrl:'https://i.scdn.co/image/ab67616d0000b27343e531d5f69170aba281ef43',
      paragraf:'Awake and Alive'
    },
    {
      id: 6,
      title: "RIHANNA",
      imageUrl:'https://upload.wikimedia.org/wikipedia/en/e/e8/Diamonds_-_Rihanna.png',
      paragraf:'Diamonds'
    },
    {
      id:7,
      title:'SELENA GOMEZ',
      imageUrl:'https://upload.wikimedia.org/wikipedia/en/9/9b/The_Heart_Wants_What_It_Wants_Selena_Gomez_cover.png',
      paragraf:'The Heart Wants What is Wants'
    },
    {
      id: 8,
      title: "EMINEM",
      imageUrl:'https://i1.sndcdn.com/artworks-SFfVDwHzmF80yHSD-Unc3CQ-t500x500.jpg',
      paragraf:'Mockingbird'
    },
    {
      id: 9,
      title: "Zara Larsson",
      imageUrl:'https://i.ytimg.com/vi/18zEwH2YHT0/maxresdefault.jpg',
      paragraf:'Symphony'
    },
    {
      id: 10,
      title: "ALAN WALKER",
      imageUrl:'https://i.ytimg.com/vi/HhjHYkPQ8F0/maxresdefault.jpg',
      paragraf:'Alone'
    },
    {
      id:11,
      title:'COOLIO',
      imageUrl:'https://cf.kizlarsoruyor.com/q19352045/29e512d4-1d97-4788-a050-5e9219ef4aaf.jpg',
      paragraf:'Gangsta s Paradise '
    },
    {
      id: 12,
      title: "NUMB",
      imageUrl:'https://i.ytimg.com/vi/ASunjHi5bOc/maxresdefault.jpg',
      paragraf:'Linkin Park'
    },
    {
      id: 13,
      title: "Katyy Pary",
      imageUrl:'https://upload.wikimedia.org/wikipedia/tr/e/e8/DarkHorseCover.png',
      paragraf:'Dark Horse'
    },
    {
      id: 14,
      title: "Camila Cabello",
      imageUrl:'https://m.media-amazon.com/images/M/MV5BZGQ0ZWE2NjAtNmVkOC00MTQ0LThhMjEtYWNmNzUxYjhlZTcyXkEyXkFqcGdeQXVyOTQ2NDA3Mjc@._V1_.jpg',
      paragraf:'My Oh My'
    },
    {
      id:15,
      title:'THE WKEEKEND',
      imageUrl:'https://i1.sndcdn.com/artworks-fozEBewgNyX91dVj-ERJyDQ-t500x500.jpg',
      paragraf:'Die For You'
    },
    {
      id: 16,
      title: "JUSTEN TİMBERLAKE",
      imageUrl:'https://i.scdn.co/image/ab67616d0000b273c6ba98fd3f3b396a6c6f7091',
      paragraf:'Sexyback'
    },
    {
      id: 17,
      title: "Britney Spears",
      imageUrl:'https://upload.wikimedia.org/wikipedia/en/2/21/Britney_Spears_Toxic.png',
      paragraf:'Toxic'
    },
    {
      id:18,
      title:'2PAC',
      imageUrl:'https://i.ytimg.com/vi/lECuN0XQcWk/hqdefault.jpg',
      paragraf:'Jezebel'
    },
  ]
  


  return (
    
    <Container className='mt-5'>
    <Row >
      <h2 className='text-center'>Türk Şarkılar</h2>

      {turk.map((turk) => (
        <Col className='col-xl-4  col-12 my-2'>
          <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded-4' >
            <div className='card-img '>
              <img
                className="d-block w-100 rounded-4"
                src={turk.imageUrl}
                height={250}
              />
            </div>
            <h6 className='fw-bold p-3' style={{ textAlign: 'justify', fontSize: '12px' }}>{turk.title}</h6>
            <p>{turk.paragraf}</p>
          </div>
        </Col>
      ))}

    </Row>

    <Row>
    <h2 className='text-center'>Yabancı Şarkılar</h2>
        {yabanci.map((yabanci) => (
          <Col className='col-xl-4  col-12 my-2'>
            <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded-4' >
              <div className='card-img '>
                <img
                  className="d-block w-100 rounded-4"
                  src={yabanci.imageUrl}
                  height={250}
                />
              </div>
              <h6 className='fw-bold p-3' style={{ textAlign: 'justify', fontSize: '12px' }}>{yabanci.title}</h6>
              <p>{yabanci.paragraf}</p>
            </div>
          </Col>
        ))}
      </Row>
  </Container>
  );
}
