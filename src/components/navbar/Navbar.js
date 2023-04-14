import './navbar.css'

export default function Navbar() {
    
        // function img(anything) {
        //     document.querySelector('.slide').src = anything;
        // }
        // function change(change) {
        //     const line = document.querySelector('.image');
        //     line.style.background = change;
        // }
        
  return (
    <>
        <div className='sec1'>
            <video autoPlay loop muted plays-inline id="myVideo">
                <source src="videos/AI-trance1land.mp4" type="video/mp4"/>
            </video>

            {/* <div className='image'>
                <img src="images/hotelfront2land.jpg" alt="" className='slide image-img'/>
            </div>

            <div className='image-item'>
                <img src="images/hotelbar1.jpg" alt="" className='slide active item-img' onClick= {img('images/hotelbar1.jpg')} />
                <img src="images/hotelbar2.jpg" alt="" className='slide item-img' onClick= {img('images/hotelbar2.jpg')} />
                <img src="images/hotellobby1.jpg" alt="" className='slide item-img' onClick= {img('images/hotellobby1.jpg')} />
            </div> */}
        </div>

        <nav class="navbar navbar-expand-lg navGuard">
            <a class="navbar-brand text-white nav-title" href="#"><i class="fa fa-umbrella fa-flip nav-icon"></i>UMBRELLA 
                <br /> ACADEMY
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon span-3lines">   
                    <i class="fa fa-navicon"></i>
                </span>
                {/* <span class="navbar-toggler-icon span-3lines"></span> */}
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li className="nav-item nav-l active">
                        <a class="nav-link nav-href" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>

                    {/* <li class="nav-item">
                        <a class="nav-link text-white nav-list" href="#">Tour</a>
                    </li> */}
                    <li className='nav-item nav-l'>
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdown-toggle nav-href tour-drop" href="#" role="button" data-toggle="dropdown" aria-expanded="false">Tour </a>

                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Bedrooms</a>
                                <a className="dropdown-item" href="#">Lobby</a>
                                <a className="dropdown-item" href="#">Bar</a>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item nav-l">
                        <a className="nav-link nav-href" href="#"><i class="fa fa-gallery-thumbnails "></i>Gallery</a>
                    </li>

                    <li className="nav-item nav-l">
                        <a className="nav-link nav-href" href="#">Book Now</a>
                    </li>
                </ul>
            </div>
        </nav>

        

    </>
  )
}
