// import {player} from "./player";

export function netRate(){
    let val =  player.machinePower * player.machines + player.pressPower * player.presses;
    return val;
}
