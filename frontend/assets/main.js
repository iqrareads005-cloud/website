document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(form);
            fetch('../../backend/contact_submit.php', {
                method: 'POST',
                body: formData
            })
                .then(res => res.text())
                .then(data => {
                    document.getElementById('formResult').textContent = data;
                    form.reset();
                })
                .catch(() => {
                    document.getElementById('formResult').textContent = "Error submitting form.";
                });
        });
    }
});