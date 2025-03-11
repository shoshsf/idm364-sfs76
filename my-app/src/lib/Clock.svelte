<script lang="js">

    let date = $state(new Date());

    function format_date(today) {
        return(
            ('0' + today.getHours()).slice(-2) + 
            ':' + 
            ('0' + today.getMinutes()).slice(-2) +
            ':' + 
            ('0' + today.getSeconds()).slice(-2)
        );
    }
        // console.log(format_date(date));

    $effect (() => {
        const update_timer = setInterval(() => {
            date = format_date(new Date());
            console.log('New Time: ${date}');
        }, 1000);

        return () => clearInterval(update_timer);
        
    });

</script>

<div>
    <p>
        {date}
    </p>
</div>