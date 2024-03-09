import React from 'react'
import { Image_One, Image_Two, Image_Three, Image_four, Image_five, Image_six } from '../../assests'
import './Styles.css'
import Countries_description from '../staticData.json'


const DesignCards = () => {
    const cardsData = [
        {
            cardId: 1,
            cardImg: Image_One,
            description: Countries_description.Arabian,
            address: Countries_description.ArabianAddress
        },
        {
            cardId: 2,
            cardImg: Image_Two,
            description: Countries_description.Arabian,
            address: Countries_description.ArabianAddress_two
        },
        {
            cardId: 3,
            cardImg: Image_Three,
            description: Countries_description.Dubai,
            address: Countries_description.DowntownDubai
        },
        {
            cardId: 4,
            cardImg: Image_four,
            description: Countries_description.DubaiEstate,
            address: Countries_description.DubaiHills
        },
        {
            cardId: 5,
            cardImg: Image_five,
            description: Countries_description.DubaiMarina,
            address: Countries_description.Dubai_Marina
        },
        {
            cardId: 6,
            cardImg: Image_six,
            description: Countries_description.EmaratesLiving,
            address: Countries_description.EmiratesLiving
        }

    ];

    return (
        <div className = ''>
        <div  className ="heading1">
        <h1 >COMMUNITIES WE MANAGE</h1>
        </div>
        <div>
            <div className='container'>
                <div className='row'>
                    {cardsData.map((each) => (
                        <div className='col-lg-4 col-md-6 col-sm-12' key={each.cardId}>
                            <div class="card cardstyle" >
                                <img src={each.cardImg} class="card-img-top card-imgg"  />
                                <div class="card-body  card-double-body" >
                                    <p class="card-text">{each.description}</p>
                                    <div className ='divBackground'>
                                   {each.address}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className ="heading1">
        <h1>OUR SERVICES</h1>
        </div>
        <div className = 'centerdIV' >
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex">
              <img src={Image_One} className=" imageStylediv"  />
              <img src={Image_Two} className=" imageStylediv" alt="..."  />
              <img src={Image_Three} className=" imageStylediv" alt="..."  />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex">
              <img src={Image_four} className="imageStylediv" alt="..."  />
              <img src={Image_five} className="imageStylediv" alt="..." />
              <img src={Image_six} className="imageStylediv" alt="..."  />
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      </div>
    );
};

export default DesignCards;