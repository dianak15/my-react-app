import React from 'react'
import './SearchStyles.css'

import Summer6 from '../../assets/summer6.jpg'

function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                    <p>Come experience the very pinnacle of luxury all-inclusive tours for couples at Turkey Resorts. Our luxury beach resorts, set along the most gorgeous tropical settings and exquisite beaches in India, Goa, feature unlimited gourmet dining, unique bars serving premium liquors and wines, and every land and water sport, including complimentary green fees at our golf resorts and PADI® certified scuba diving at most resorts. If you are planning a wedding, Paris is the leader in destination weddings and honeymoon packages.</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Summer6} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>WORLD'S LEADING</h3>
                                <p>ALL-INCLUSIVE TOURS</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>NO ONE INCLUDES MORE</h3>
                                <p>ALL-INCLUSIVE TOURS</p>
                                <button>View Packages</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">GET AN ADDITIONAL 7% OFF</h4>
                        <p className="timer">12 HOURS LEFT!</p>
                        <p className="offers">VIEW ALL CURRENT OFFERS</p>
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label>Destination</label>
                            <select>
                                <option value="1">Paris</option>
                                <option value="1">Turkey</option>
                                <option value="1">London</option>
                                <option value="1">India</option>
                                <option value="1">Florida</option>
                                <option value="1">Maldives</option>
                                <option value="1">UAE</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button>Rates & Availabilities </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search