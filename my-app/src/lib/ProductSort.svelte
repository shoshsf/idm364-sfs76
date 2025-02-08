<script lang="en">
    let choice1 = $state('');
</script>


<div class="container">
    <div class="filters">
        <select bind:value={choice1}>
            <option value="default">Select Category</option>
            <option value="All Products">View All</option>
            <option value="Our Plant Pots">Plant Pots</option>
            <option value="Our Ceramics">Ceramics</option>
            <option value="Our Tables">Tables</option>
            <option value="Our Chairs">Chairs</option>
            <option value="Our Crockery">Crockery</option>
            <option value="Our Tableware">Tableware</option>
            <option value="Our Cutlery">Cutlery</option>
            <option value="Our Furniture">Furniture</option>
            <option value="Our Decor">Decor</option>
            <option value="Our Dishware">Dishware</option>
        </select>
        <select>
            <option>Price</option>
            <option>Low to High</option>
            <option>High to Low</option>
        </select>
    </div>
    <!-- <h4>Take a look at {choice1}</h4> -->
</div>

<style>

    .container {
        width: 90%;
        max-width: 1200px;
        margin: auto;
        padding: 20px 0;
    }
    

    .filters {
        display: flex;
        flex-direction: row;
        justify-content: left;
        gap: 15px;
    }

    .filters select {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }

    @media (max-width: 500px){
        .filters {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 15px;
        }
    }
    
</style>
