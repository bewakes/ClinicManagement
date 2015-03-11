
// selection on click method
// numeric form creation is to be done using this
function selectionNumeric(id, maleRange, femaleRange, childRange)
{
    //get our  node with id that is to be hidden after selection
    var x = document.getElementById(id);
    x.style.visibility = "hidden";

    var form_id = "form_"+id;

    //create a new div
    var newdiv = document.createElement("div");
    newdiv.setAttribute('id', form_id );

    //create label
    var label = document.createElement("LABEL");
    label.innerHTML = id;

    var input = document.createElement("input");
    input.setAttribute('type','number');
    input.setAttribute('name', id );
    input.setAttribute('step', '0.01');
    input.setAttribute('min', '0');

    var male = null;
    var female = null;
    var child = null;

    if(maleRange == femaleRange && femaleRange==childRange)
    {
        male = document.createElement("LABEL");
        male.innerHTML = maleRange;
    }

    else if(maleRange != femaleRange && femaleRange == childRange)
    {
        male = document.createElement("LABEL");
        male.innerHTML = maleRange;
        female = document.createElement("LABEL");
        female.innerHTML = femaleRange;
    }

    else
    {
        male = document.createElement("LABEL");
        male.innerHTML = maleRange;
        female = document.createElement("LABEL");
        female.innerHTML = femaleRange;
        child = document.createElement("LABEL");
        child.innerHTML = childRange;
    }

    //create button
    var button = document.createElement("input");
    button.type = "button";
    button.value = "cancel";
    button.addEventListener("click", function () { cancelClick(form_id); } );

    //append
    newdiv.appendChild(label);
    newdiv.appendChild(input);
    if(male)
    {
        newdiv.appendChild(male);
    }
    if(female)
    {
        newdiv.appendChild(female);
    }
    if(child)
    {
        newdiv.appendChild(child);
    }
    newdiv.appendChild(button);

    /*
    var temp = document.getElementsByTagName("form")[0];
    temp.appendChild(newdiv);
    */

    //append to our div
    var divappend = document.getElementById("selected");
    divappend.appendChild(newdiv);

}

// radio button type of form to be created here
function selectionBoolean(id, positive, negative)
{
    //alert(positive + " " + negative);
    //get our  node with id that is to be hidden after selection
    var x = document.getElementById(id);
    x.style.visibility = "hidden";

    var form_id = "form_"+id;

    var newdiv = document.createElement("div");
    newdiv.setAttribute('id', form_id);

    var label = document.createElement("LABEL");
    label.innerHTML = id+ " : ";


    //label for positive
    var label_positive = document.createElement("LABEL");
    label_positive.innerHTML = positive;

    // radio button for positive
    var radio_positive = document.createElement("input");
    radio_positive.setAttribute("type", "radio");
    radio_positive.setAttribute("name", id);
    radio_positive.setAttribute("value", positive);

    // label for negative
    var label_negative = document.createElement("LABEL");
    label_negative.innerHTML = negative;

    var radio_negative = document.createElement("input");
    radio_negative.setAttribute("type", "radio");
    radio_negative.setAttribute("name", id);
    radio_negative.setAttribute("value", negative);


    var button = document.createElement("input");
    button.type = "button";
    button.value = "cancel";
    button.addEventListener("click", function () { cancelClick(form_id); } );

    // this is a div where radio button gets appended
    var select = document.createElement("div");
    select.appendChild(label_positive);
    select.appendChild(radio_positive);
    select.appendChild(label_negative);
    select.appendChild(radio_negative);

    newdiv.appendChild(label);
    newdiv.appendChild(select);
    newdiv.appendChild(button);

    var divappend = document.getElementById("selected");
    divappend.appendChild(newdiv);

}


function cancelClick(id)
{
    //remove 'form_' part from form id
    var duplicate = id.slice(5,id.length);
    var v = document.getElementById(duplicate);
    v.style.visibility = "visible";

    var x = document.getElementById(id);
    x.remove();
}


// field_selected is the string of all the fields separeted by comma
function validate(field_selected)
{
    //get individual field -> split by comma
    var fields = field_selected.split(",");

    //for checking is any field is selected
    var count = 0;

    //main loop for validaiton
    for(var i=0; i<fields.length; ++i)
    {
        var field = fields[i];

        //get element by 'name' from the our form named 'testform'
        var x = document.forms["testform"][field];

        //if x is valid / exists
        if(x)
        {
            //increase the check-counter
            count++;
            var value = x.value;

            //if empty value
            if(!value)
            {
                alert("emtpy entry : " + field );
                return false;
            }
        }
    }
   
    //if counter didnt increase -> no field is selected
    if(count == 0)
    {
        alert("at least one field is requred... ");
        return false;
    }
    alert("ok good ...");
    return true;
}








