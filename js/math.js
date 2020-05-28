let prestigeNotUnlocked = true;

export function netRate(){
    let val =  player.machinePower * player.machines + player.pressPower * player.presses;
    return val;
}

export function updatePoints(){
    player.points += netRate()
    $(function(){
        $('#points').text(player.points + " POINTS");
        $('#pps').text(netRate() + " POINTS PER SECOND");
        if(player.points >= 100 && prestigeNotUnlocked) {
            $("#prestige").show();
            $("#prestigePoints").show();
            prestigeNotUnlocked = false;
        }
    })
}
