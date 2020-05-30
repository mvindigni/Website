let prestigeUnlocked = false;

export function netRate(){
    let val =   player.machinesPower * player.machines +
                player.pressesPower * player.presses +
                player.printersPower * player.printers +
                player.babasPower * player.babas
                * (1 + (player.prestigePoints * 0.1));
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
