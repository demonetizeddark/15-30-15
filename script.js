var audio = new Audio('asset/connect_power.mp3');

function mobilePrompt() {
    $('.timer').hide();
    $('body').append(`<div class="prompt"><h1>sorry man</h1><p>click this button, this is required for audio to work</p><button type="button" class="forgiven">it's alr mannn</button></div>`)
    document.querySelector('.forgiven').addEventListener('click', () => {
        $('.prompt').remove();
        $('.timer').show();
    })
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    mobilePrompt()
  }
  

function batman() {
    $('body')
        .addClass('dark')
        .removeClass('light')
    $('.catch')
        .addClass('dark')
        .removeClass('light')
        console.log("YOU UNDERESTIMATE THE POWER OF THE DARK SIDE")
}
function starbucks() {
    $('body')
        .addClass('light')
        .removeClass('dark')
    $('.catch')
        .addClass('light')
        .removeClass('dark')
        console.log("OMG PUMPKIN SPICE !!!!! 🤪🤪😝😝👯‍♀️👯‍♀️")
}

function timer(count) {
    $('.seconds').text(count)
    $('head title', window.parent.document).text(count + ` | NLC Timer`);

    return new Promise(resolve => { //return a Promise
        let counter = setInterval(() => {
        count = count - 1;
        if (count < 1) {
            audio.play();
            clearInterval(counter);
            resolve(); //it is resolved when the count finishes
            return;
        }
        if (/^\d$/.test(count)) {
            $('.seconds').text('0' + count)
            $('head title', window.parent.document).text('0' + count + ` | NLC Timer`);
        } else {
            $('.seconds').text(count)
            $('head title', window.parent.document).text(count + ` | NLC Timer`);
        }
        }, 1000);
        switch (count) {
            case 15:
                batman()
                break;
            case 30:
                starbucks()
            default:
                break;
        }
    });
}

async function main() {
    await timer(15);
    await timer(30);
    main()
}

$('.start').on('click', function () {
    main();
    $('.stop').show();
    $(this).hide();
})
$('.stop').on('click', function () {
    window.location.reload()
})
