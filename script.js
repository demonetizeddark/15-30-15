function timer(count) {
    $('.seconds').text(count)

    return new Promise(resolve => { //return a Promise
        let counter = setInterval(() => {
        count = count - 1;
        if (count < 0) {
            clearInterval(counter);
            resolve(); //it is resolved when the count finishes
            return;
        }
        if (/^\d$/.test(count)) {
            $('.seconds').text('0' + count)
        } else {
            $('.seconds').text(count)
        }
        }, 1000);
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
