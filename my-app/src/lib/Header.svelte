<script>
    // import { name } from '$lib/utils';
	import { num_item, total_items } from "$lib/store";

    let isOpen = false;

    $: cartEmpty = $total_items < 1;

    // Nav Inputs

    let navItem1 = "Plant pots";
    let navItem1_link = "/products/plant-pots/";

    let navItem2 = "Ceramics";
    let navItem2_link = "/products/ceramics";

    let navItem3 = "Tables";
    let navItem3_link = "/products/tables";

    let navItem4 = "Chairs";
    let navItem4_link = "/products/chairs";

    let navItem5 = "Crockery";
    let navItem5_link = "/products/crockery";

    let navItem6 = "Tableware";
    let navItem6_link = "/products/tableware";

    let navItem7 = "Cutlery";
    let navItem7_link = "/products/cutlery";

</script>

<header>
    <div id='topSec'>
        <!-- <img src="../../../logo.png" class="logoImg" alt=""> -->
        <a href="../" data-sveltekit-preload-data="off" class="btn-home">
            <img src="https://res.cloudinary.com/drkhhutl3/image/upload/logo_cmtnqk.png" class="logoImg" alt="">
        </a>

        <nav class="navbar">
            <div class="iconSec">
                <a href="#" class="iconLink"><img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1738533410/Search_xlrvt7.png" class="icons" id="search" alt="search icon"></a>
                
                {#if $total_items < 1}
                <a href="/cart" class="iconLink"><img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1738533410/ShoppingCart_ptopii.png" class="icons" id="cart" alt="cart icon" ></a>
                {:else}
                <a href="/cart" class="iconLink"><img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739099809/ShoppingCart2_kcsyyv.png" class="icons" id="cart-full" alt="full cart icon" ></a>
                {/if}
                
                <a href="/signin" class="iconLink"><img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1738533410/UserAvatar_nlazqi.png" class="icons" id="profile" alt="profile icon"></a>
                <a class="hamburger" on:click={() => isOpen = !isOpen}  class:open={isOpen}>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </a>
            </div>

            <div class="nav-links" class:open={isOpen}>
              <ul class="nav-ul">
                <a href={navItem1_link} on:click={() => isOpen = false}><li>{navItem1}</li></a>
                <a href={navItem2_link} on:click={() => isOpen = false}><li>{navItem2}</li></a>
                <a href={navItem3_link} on:click={() => isOpen = false}><li>{navItem3}</li></a>
                <a href={navItem4_link} on:click={() => isOpen = false}><li>{navItem4}</li></a>
                <a href={navItem5_link} on:click={() => isOpen = false}><li>{navItem5}</li></a>
                <a href={navItem6_link} on:click={() => isOpen = false}><li>{navItem6}</li></a>
                <a href={navItem7_link} on:click={() => isOpen = false}><li>{navItem7}</li></a>
              </ul>    
            </div>
            
          </nav>
        
    </div>
    
</header>

<style>

    /* *{
        border: 1px solid red;
    } */

    header{
        padding: 0;
    }

    #topSec{
        display: flex;
        justify-content: space-between;
        align-items: top;
        padding: 1rem;
    }

    .logoImg{
        width: 300px;
        height: fit-content;
    }

    .navbar {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 15px;
        /* padding: 1rem; */
        background: white;
    }

    .nav-links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        flex-wrap: wrap;
        width: max-content;
        margin: 0;
        padding: 0;
        width: max-content;
        border-bottom: 1px solid  #2A254B;

    }

    .nav-links ul{
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin:0;
        padding: 0;
        /* padding: 0 1rem; */
    }
    

    .nav-links a{
        text-decoration: none;
        color: #2A254B;
        padding: 20px 15px;
    }

    .nav-links a:hover{
        /* outline: 3px solid green; */
        border-bottom:  1px solid #2A254B;
        background-color: #e0dbff ;

    }

    .hamburger {
        display: none;
        flex-direction: column;
        cursor: pointer;
        padding: 15px;
        width: 100%;

    }

    .hamburger div {
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .hamburger.open .bar:nth-child(1) {
    transform: translateY(12px) rotate(45deg);
    }

    .hamburger.open .bar:nth-child(2) {
        opacity: 0;
    }

    .hamburger.open .bar:nth-child(3) {
        transform: translateY(-12px) rotate(-45deg);
    }

    .bar {
        height: 3px;
        width: 25px;
        background: #2A254B;
        margin: 4px;
        border-radius: 5px;
    }  
   

    .icons{
        margin: 0;
        width: 30px;
        padding: 10px;
    }

    .iconSec{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .iconLink{

    }

   

    @media (max-width: 1080px) {

        .nav-links {
            display: none;
            flex-direction: row;
            position: absolute;
            top: 100px;
            right: 0;
            background: white;
            width: 100%;
            text-align: center;            
            justify-content: none;
            align-items:none;
            flex-wrap: none;
            gap: none;
            border-bottom: none;
        }
        .nav-links.open{
            z-index: 1;
        }
        .nav-links.open ul{
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 2rem 1rem;
            gap: 1rem;
            
        }
        
        .nav-links a {
            width: 90%;
            padding: 20px;
            border: 0.5px solid #2A254B;
            border-radius: 15px;
            transform: 0.3s ease;
        }

        .nav-links a:hover {
            /* background-color: #dedaff; */
            border: 2px solid #2A254B;
            box-shadow: 0 0 15px rgb(178, 188, 255);
            transition-delay: 0.3s; 
        }

        .nav-links.open {
            display: flex;
        }
        .hamburger {
            display: flex;
        }
  
    }
    @media (max-width: 730px) {
        .icons{
            margin: 0;
            width: 25px;
            padding: 10px;
        }

        .bar {
            height: 4px;
            width: 25px;
            background: #2A254B;
            margin: 4px;
            border-radius: 5px;
        } 
        .hamburger {
            padding: 10px;
        }
    }   
    @media (max-width: 580px) {
        .logoImg{
            width: 200px;
        }

        .icons{
            margin: 0;
            width: 20px;
            padding: 10px;
        }

        .bar {
            height: 4px;
            width: 20px;
            background: #2A254B;
            margin: 3px;
            border-radius: 5px;
        } 
    }
    @media (max-width: 500px){

        .nav-links {          
            top: 80px;
            right: 0;
            background: white;
            width: 100%;
            text-align: center;            
            justify-content: none;
            align-items:none;
            flex-wrap: none;
            gap: none;
            border-bottom: none;
        }

        .logoImg{
            width: 190px;
            height: fit-content;
        }

        #topSec{
            display: flex;
            justify-content: space-between;
            align-items: top;
            padding: 0.5rem;
        }
            
        .icons{
            margin: 0;
            width: 20px;
            padding: 5px;
        }

        .bar {
            height: 2px;
            width: 15px;
            background: #2A254B;
            margin: 1px;
            border-radius: 5px;
        } 

        .hamburger.open .bar:nth-child(1) {
            transform: translateY(5px) rotate(45deg);
        }

        .hamburger.open .bar:nth-child(3) {
            transform: translateY(-5px) rotate(-45deg);
        }



    }
    
       
</style>
