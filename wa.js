$(function () {
        $('.floating-wpp').floatingWhatsApp({
            phone: '6281316604925',
            popupMessage: 'Selamat Datang di PASANGJITU',
            showPopup: true,
            position: 'left', // left or right
            autoOpen: false, // true or false
            //autoOpenTimer: 4000,
            message: 'Halo Pasangjitu',
            //headerColor: 'orange', // enable to change msg box color
            headerTitle: 'Kotak Pesan Whatsapp',
        });
    });
