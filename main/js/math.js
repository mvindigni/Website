let prestigeUnlocked = false;

export function netRate(){
    let val = 0
    $(".purchaseButton").each(function(){
        val +=  (player[$(this).attr("data-pointGenerator")]
                * player[$(this).attr("data-pointGenerator") + "Power"]);
    })
        val *= (1 + (player.prestigePoints * 0.1));
    return val;
}

export function updatePoints(){
    player.points += netRate()
    $(function(){
        $('#points').text(player.points + " POINTS");
        $('#pps').text(netRate() + " POINTS PER SECOND");
        if(netRate() >= 100 && !prestigeUnlocked) {
            $("#prestige").show();
        }
    })
}
