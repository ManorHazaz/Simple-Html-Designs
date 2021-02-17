
function _( selector )
{
    return document.querySelector( selector );
}

function __( selector )
{
    return document.querySelectorAll( selector );
}

// on click change color of the car and the background 
__("button[name='color-btn']").forEach( b => 
{
    console.log( b )
    b.addEventListener( "click", () => 
    {
        _('.car-img').className = "car-img " + b.dataset.colorName;
        document.documentElement.style.setProperty('--primary-color', b.dataset.colorCode );
    });
});