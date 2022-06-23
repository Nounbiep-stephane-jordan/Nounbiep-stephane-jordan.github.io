const data = [{
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]

console.log(data[2].timeframes.daily.current)


const button = document.querySelectorAll(".time");
console.log(button)
button.forEach((button) => {
    button.addEventListener("click", (event) => {

        choose(event.target.innerText)
    })
})

function choose(time) {

    const h1 = document.querySelectorAll(".h1");
    const work = document.querySelector(".work");
    const play = document.querySelector(".play");
    const study = document.querySelector("#study");
    const social = document.querySelector(".social");
    const selfcare = document.querySelector(".selfcare");
    const exercise = document.querySelector(".exercise");
    console.log(exercise, study)
    const workp = document.querySelector(".work-p");
    const studyp = document.querySelector(".study-p");
    const socialp = document.querySelector(".social-p");
    const selfp = document.querySelector(".self-p");
    const playp = document.querySelector(".play-p");
    const exercisep = document.querySelector(".exercise-p");

    switch (time) {
        case "Daily":
            data.map((d) => {
                if (d.title == "Work") {
                    work.innerHTML = d.timeframes.daily.current + "hrs";
                    workp.innerHTML = `Yesterday - ${d.timeframes.daily.previous}hrs`
                } else if (d.title == "Play") {
                    play.innerHTML = d.timeframes.daily.current + "hrs"
                    playp.innerHTML = `Yesterday - ${d.timeframes.daily.previous}hrs`
                } else if (d.title == "Study") {
                    console.log('am here', d.timeframes.daily.current, d.timeframes.daily.previous)
                    study.innerHTML == d.timeframes.daily.current + "hrs"
                    studyp.innerHTML = `Yesterday - ${d.timeframes.daily.previous}hrs`
                } else if (d.title == "Social") {
                    social.innerHTML = d.timeframes.daily.current + "hrs"
                    socialp.innerHTML = `Yesterday - ${d.timeframes.daily.previous}hrs`
                } else if (d.title == "Self Care") {
                    selfcare.innerHTML = d.timeframes.daily.current + "hrs"
                    selfp.innerHTML = `Yesterday - ${d.timeframes.daily.previous}hrs`
                } else {
                    exercise.innerHTML = d.timeframes.daily.current + "hrs"
                    exercisep.innerHTML = `Yesterday - ${d.timeframes.daily.previous}hrs`
                }
            })
            break;
        case "Weekly":
            data.map((d) => {
                if (d.title == "Work") {
                    work.innerHTML = d.timeframes.weekly.current + "hrs";
                    workp.innerHTML = `Last Week - ${d.timeframes.weekly.previous}hrs`
                } else if (d.title == "Play") {
                    play.innerHTML = d.timeframes.weekly.current + "hrs"
                    playp.innerHTML = `Last Week - ${d.timeframes.weekly.previous}hrs`
                } else if (d.title == "Study") {
                    study.innerHTML == d.timeframes.weekly.current + "hrs"
                    studyp.innerHTML = `Last Week - ${d.timeframes.weekly.previous}hrs`
                } else if (d.title == "Social") {
                    social.innerHTML = d.timeframes.weekly.current + "hrs"
                    socialp.innerHTML = `Last Week - ${d.timeframes.weekly.previous}hrs`
                } else if (d.title == "Self Care") {
                    selfcare.innerHTML = d.timeframes.weekly.current + "hrs"
                    selfp.innerHTML = `Last Week - ${d.timeframes.weekly.previous}hrs`
                } else {
                    exercise.innerHTML = d.timeframes.weekly.current + "hrs"
                    exercisep.innerHTML = `Last Week - ${d.timeframes.weekly.previous}hrs`
                }
            })
            break;
        case "Monthly":
            data.map((d) => {
                if (d.title == "Work") {
                    work.innerHTML = d.timeframes.monthly.current + "hrs";
                    workp.innerHTML = `Last Month - ${d.timeframes.monthly.previous}hrs`
                } else if (d.title == "Play") {
                    play.innerHTML = d.timeframes.monthly.current + "hrs"
                    playp.innerHTML = `Last Month - ${d.timeframes.monthly.previous}hrs`
                } else if (d.title == "Study") {
                    study.innerHTML == d.timeframes.monthly.current + "hrs"
                    studyp.innerHTML = `Last Month - ${d.timeframes.monthly.previous}hrs`
                } else if (d.title == "Social") {
                    social.innerHTML = d.timeframes.monthly.current + "hrs"
                    socialp.innerHTML = `Last Month - ${d.timeframes.monthly.previous}hrs`
                } else if (d.title == "Self Care") {
                    selfcare.innerHTML = d.timeframes.monthly.current + "hrs"
                    selfp.innerHTML = `Last Month - ${d.timeframes.monthly.previous}hrs`
                } else {
                    exercise.innerHTML = d.timeframes.monthly.current + "hrs"
                    exercisep.innerHTML = `Last Month - ${d.timeframes.monthly.previous}hrs`
                }
            })
            break;


        default:
            break;
    }
}