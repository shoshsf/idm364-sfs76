<div class="container">
    <div class="filters">
        <select>
            <option>Category</option>
            <option>Chairs</option>
            <option>Vases</option>
            <option>Lamps</option>
        </select>
        <select>
            <option>Product Type</option>
            <option>Furniture</option>
            <option>Decor</option>
        </select>
        <select>
            <option>Price</option>
            <option>Low to High</option>
            <option>High to Low</option>
        </select>
        <select>
            <option>Brand</option>
        </select>
    </div>
</div>

<style>
    .container {
        width: 90%;
        max-width: 1200px;
        margin: auto;
        padding: 20px 0;
    }
    
    *{
        border: 1px solid red;
    }

    .filters {
        display: flex;
        justify-content: left;
        gap: 15px;
        margin-bottom: 20px;
    }
    .filters select {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
    
</style>