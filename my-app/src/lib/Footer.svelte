<footer>
    <div id="footerUpper">
        <div id="footerLeft">
            <div class="footerLinks">
                <h4>Menu</h4>
                <ul>
                    <li><a href="#">New Arrivals</a></li>
                    <li><a href="#">Best Sellers</a></li>
                    <li><a href="#">Recently Viewed</a></li>
                    <li><a href="#">Popular this Week</a></li>
                    <li><a href="#">All Products</a></li>

                </ul>
            </div>
            <div class="footerLinks borderLine" >
                <h4 >Categories</h4>
                <ul>
                    <li><a href="#">Crockery</a></li>
                    <li><a href="#">Furniture</a></li>
                    <li><a href="#">Homeware</a></li>
                    <li><a href="#">Plant Pots</a></li>
                    <li><a href="#">Chairs</a></li>
                </ul>
            </div>
            <div class="footerLinks">
                <h4>Our Company</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Returns Policy</a></li>
                </ul>
            </div>
        </div>
        <div id="footerRight">
            <h4>Join the Club and Get the Benefits!</h4>
            <form action="#">
                <!-- <label for="email">Enter your email:</label> -->
                <input type="email" id="email" name="email">
                <button type="submit" id="submit">Submit</button>
            </form>
        </div>
    </div>
    <hr>
    <div>
        <p id="footerText">	&copy;SamihaShoshi2025 | Crafted Comforts</p>
    </div>
</footer>


<style>

    /* *{
        border: 1px solid red;
    } */


    footer li{
        list-style-type: none;
        
    } 

    ul,li, a{
        padding: 6px 0;
        margin:0;
        color:#FFFFFF;
        font-size: 14px;
        text-decoration: none;
    }

    a:hover{
        text-decoration: underline;
    }

    h4{
        text-align: left;
    }

    footer{
        background-color: #2A254B;
        color: #FFFFFF;
        padding: 5px 40px;
    }

    #footerUpper{
        display: flex;
        flex-direction: row;
        padding: 0 10px;
    }

    #footerLeft{
        display: flex;
        flex-direction: row;
        width: 60%;
    }

    .footerLinks{
        text-align: left;
        padding: 1rem 2rem;
        width: 30%;

    }

    #footerRight{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 0;
        width: 40%;
    }

    form{
        align-self: center;
        display: flex;
        flex-direction: row;
        gap:0;
    }

    #email{
        background-color: #ffffff63;
        border-radius: 5px 0 0 5px;
        height: 57px;
        width: 17rem;
    }

    button{
        padding: 15px 20px;
        font-size: 16px;
        border-radius: 4px;
        cursor: pointer;
        background-color: #e7e4ff;
        color: #2A254B;
    }

    button:hover {
        background-color: #C2BAFB;
    }

    #footerText{
        text-align: center;
    }

/*-------------------------------------*/
/*-----------New Media ----------------*/
@media (max-width: 1040px) and (min-width: 700px){
    /* *{
        border: 1px solid red;
    }  */

    #footerUpper{
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
    
    #footerLeft{
        display: flex;
        flex-direction: row;
        width: 90%;
        padding: 0 30px;
    }

    #footerRight{
        display: flex;
        flex-direction: column;
        padding: 15px 15px 30px;
        width: 100%;
        /* border-top: 1px solid #C2BAFB;   */
        border-bottom: 1px solid #C2BAFB;  
    }

    #footerRight h4{
        text-align: center;
    }

    form{
        align-self: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 80%;
        /* padding: 10px; */
    }

    #email{
        background-color: #ffffff63;
        border-radius: 5px 0 0 5px;
        height: 40px;
        width: 100%;
    }

    button{
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 0 4px 4px 0;
        cursor: pointer;
        background-color: #e7e4ff;
        color: #2A254B;
        height: 40px;
        margin: 0;
        outline: none;
    }

    button:hover {
        background-color: #C2BAFB;
    }

}

@media (max-width: 700px) and (min-width: 300px){
    /* *{
        border: 1px solid red;
    } */
    footer{
        background-color: #2A254B;
        color: #FFFFFF;
        padding: 30px 20px;
        
    }
    #footerUpper{
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }

    #footerLeft{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0;
        justify-content: center;
        align-items: center;
    }

    .footerLinks{
        /* text-align: center; */
        padding: 2rem;
        width: 50%;        
    }

    .borderLine{
        border-top: 1px solid #C2BAFB;
        border-bottom: 1px solid #C2BAFB;
    }

    .footerLinks h4{
        border-bottom: 1px solid #C2BAFB;
        width: max-content;
        padding: 5px 0;
    }

    #footerRight{
        display: flex;
        flex-direction: column;
        padding: 15px;
        width: 100%;
        border-top: 1px solid #C2BAFB;  
        border-bottom: 1px solid #C2BAFB;  
    }

    #footerRight h4{
        text-align: center;
    }

    form{
        align-self: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        padding: 10px;
        gap: 10px;
    }

    #email{
        background-color: #ffffff63;
        border-radius: 5px;
        height: 40px;
        width: 100%;
    }

    button{
        padding: 15px 20px;
        font-size: 16px;
        border-radius: 4px;
        cursor: pointer;
        background-color: #e7e4ff;
        color: #2A254B;
    }

    button:hover {
        background-color: #C2BAFB;
    }

}

</style>
