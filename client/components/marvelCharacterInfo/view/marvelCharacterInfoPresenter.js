import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @Function MarvelCharacterInfoPresenter
 * @desc React Presenter function returning component jsx
 */
const MarvelCharacterInfoPresenter = () => (
    <section id="marvel-character-info-component"
             className="marvel_character_info col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="row back-to-list-button-container">
            <Link to='/marvel-characters' id="btnBackToList">Full List</Link>
        </div>
        <div className="marvel_character_img_container row">
            <img src="http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/landscape_incredible.jpg"
                 className="marvel_character_img" alt="No Image Available"/>
        </div>
        <div className="marvel_character_info_container row">
            <div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <label id="lblMarvelCharacterNameText">Name:</label>
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    <span id="marvel-character-name">Spider-Man</span>
                </div>
            </div>
            <div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <label id="lblMarvelCharacterDescriptionText">Description:</label>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <p id="marvel-character-description">
                        Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and
                        powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new
                        abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his
                        powers to help people.
                    </p>
                </div>
            </div>
        </div>
    </section>
);
export default MarvelCharacterInfoPresenter;