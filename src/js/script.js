


// navbar fixed SCROLL
window.onscroll = function () {
    const header = document.querySelector('header');


    // take position header from the top
    const fixedNav = header.offsetTop;



    //if the page scroll more then postion header

    if (window.pageYOffset > fixedNav) {
        // add class navbar-fixed
        header.classList.add("navbar-fixed");






    }
    else {

        // remove class navbar-fixed

        header.classList.remove("navbar-fixed");



    }
}




// HUMBERGUR MENU

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');

    navMenu.classList.toggle('hidden');
    navMenu.classList.add('mt-5');
    navMenu.classList.add('bg-white');

});


// klick di luar humburgernya

window.addEventListener('click', function (e) {

    // jika yang kita targer bukan nav menu daan humburger
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');

        // 
        navMenu.classList.add('hidden');
    }
}
)


// settings 





// // EmailJS
// EmailJS
const btn = document.getElementById('submit');

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah pengiriman form secara default
    btn.value = 'Sending...'; // Mengubah teks tombol menjadi "Sending..."

    // Inisialisasi EmailJS
    const serviceID = 'service_rteeqn4';
    const templateID = 'template_ujps10q';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email'; // Kembalikan teks tombol

            // Tampilkan popup sukses
            Swal.fire({
                title: 'Berhasil!',
                text: 'Email berhasil dikirim!',
                icon: 'success',
                timer: 3000,
                confirmButtonText: 'Oke',
                timerProgressBar: true
            });

            // Refresh halaman setelah 500ms
            setTimeout(() => {
                location.reload();
            }, 3500);
        }, (err) => {
            btn.value = 'Send Email'; // Kembalikan teks tombol

            // Tampilkan error
            Swal.fire({
                title: 'Gagal!',
                text: 'Terjadi kesalahan saat mengirim email.',
                icon: 'error',
                confirmButtonText: 'Coba Lagi'
            });

            console.error('EmailJS Error:', err);
        });
});


