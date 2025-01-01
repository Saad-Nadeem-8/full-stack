input outpu
    input field
        let x = input_el.value
    window.prompt
        let x = prompt("Please Input")
    let x = el.innerhtml


    alert("asda")
    console.log("Hy")
    document.write("<h1>Mad</h1>")
    el.innerHtml = Hel

// conditions
let x = parseFloat(prompt("Inpt x"))

if (x<10) {
    alert("Chota hay")
}

if (x<10) {
    alert("Chota hay from if else")
} else {
    alert("Chota nahi hay from if else")
}


if (x<10) {
    alert("Chota hay from if else if")
} else if (x == 10) {
    alert("equal hay from if else if")
} else {
    alert("bara hay from if else if")
}


let key = prompt()

switch (key) {
    case 'faisal':
        alert("Hy Boss")
        break;
    
    case 'ahmad':
        alert("Jhudoo oye")
        alert("Jhudoo oye")
        alert("Jhudoo oye")
        break;
    
    default:
        break;
}


// loops
let out = document.getElementById("demo")

while (confirm("Repeat?")) {
    let num = parseFloat(prompt("Please enter a real number."))

    for (let i = 1; i < 11; i++) {
        var output = "<h1>" + num + " x " + i + " = " + num*i + "</h1>"
        var output = `<h1>${num} x ${i} = ${num*i} </h1>`
        out.innerHTML += output
    }
}

// function

function table(x) {
    let out = document.getElementById("demo")
    out.innerHTML = ""

    let input = document.getElementById("input")

    let num = parseFloat(input.value)

    if (!num) {
        return
    }

    for (let i = 1; i < 11; i++) {
        var output = "<h1>" + num + " x " + i + " = " + num*i + "</h1>"
        var output = `<h1>${num} x ${i} = ${num*i} </h1>`
        out.innerHTML += output
    }
}
*/

// Data

    Literals
        Constants
            Const
        
        Variables
            var => can be redeclare within the same scope
            let => can be redeclare within the same scope
    
    Collections
        array
            let x = [1, 2, 3, 10.2, "Faisal"]
        object
            let x_obj = {
                "id": 1,
                "name": "Faisal",
                "ano": 2,
                "cas": 3,
                "score": 10.2,
            }

            x_obj["father_name"] = "Zahoor"

            console.log(x_obj["name"]);
            console.log(x_obj["father_name"]);

        Multi level collections
            let x_x = [
                {
                    "list": [
                        {
                            "c": {
                            }
                        }
                    ]
                }
            ]
