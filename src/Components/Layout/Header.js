import { Fragment } from "react";
import React from "react";
import mealsImage from '../../assets/1.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";


const Header= (props) =>{
    return (<Fragment>
<header className={classes.header}> 
    <h1> ReactMeals</h1>
    <HeaderCartButton onCLick={props.onShowCart}/>
   </header>
<div className={classes['main-image']}>
    <img src={mealsImage} alt=" type of delicious food"/>
</div>
    </Fragment>
    );
};

export default Header;