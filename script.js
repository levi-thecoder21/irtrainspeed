
const locos = {
    wap4: 18.79,
    wap7: 20.56,
    wap1: 18.79,
    wag9 : 20.56,
    wag12: 38.40,
    wap5 : 18.16,
    wag5a: 17.16,
    wag7 : 20.93,
    wcam3: 18.64,
    wcam2: 18.64,
    wdp4 : 21.24,
    wdp4d: 23.02,
    wdp4b: 21.24,
    wdm3d: 18.63,
    wdm3a :17.13,
    wdg3:  17.85,
    wdm7 : 17.12,
    wdp3a :18.62,
    wdg4g: 22.56,
    wdg5: 22.26,
    wd56g: 22.31,
    wag10 : 20.56,
    wag11 : 20.56,
    trainset: 24,
    wdg4: 21.24,

};

const coach = {
    LHB: 23.54,
    ICF: 22.28,
    boxn: 14.08,
    btpn: 12.42,
    bcna: 14.45,
    concor: 14.64,
};

document.getElementById("submit").onclick = function() {
    let locotype = document.getElementById("loco").value;
    let coachtype = document.getElementById("coach").value;
    let nocoach = Number(document.getElementById("noofcoaches").value);
    let time = Number(document.getElementById("time").value);

    if (time > 0 && nocoach < 60){
        if (locotype === "trainset") { 
            let ans = ((locos[locotype] * nocoach) / time) * 18 / 5;
            let ansround = Math.round(ans * 100) / 100;
            document.getElementById("answer1").textContent = ansround + " kmph";
        }
        else if (locotype in locos && coachtype in coach){
            ans = ((locos[locotype] + (coach[coachtype] * nocoach)) / time) * 18 / 5;
            let ansround = Math.round(ans*100)/100;
            if(ansround > 200){
                document.getElementById("answer1").textContent = "Invalid data";
            }
            else{
                document.getElementById("answer1").textContent = ansround + " KMPH";
            }
        }
        else {
            document.getElementById("answer1").textContent = "Invalid Input!!";
        }
    }
    else{
        document.getElementById("answer1").textContent = "invalid input";
    }
}

document.getElementById("calculateaveragespeed").onclick = function() {
    let distance = Number(document.getElementById("distance").value);
    let time1 = Number(document.getElementById("time1").value);
    let minutes = Number(document.getElementById("minutes").value);
    if (distance != 0 && (time1 != 0 || minutes != 0)){
        let time11 = (time1*60) + minutes;
        let averagespeed = distance/time11;
        let averagespeed1 = averagespeed*60;
        let avergeround = Math.round(averagespeed1*100) / 100;
        
        document.getElementById("answer").textContent = avergeround + " KMPH";
    }
    else{
        document.getElementById("answer").textContent = "Invalid Input!!";
    }
}
