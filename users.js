document.addEventListener('DOMContentLoaded', async () => {
    const userCardsContainer = document.getElementById('user-cards');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        users.forEach(user => {
            const card = document.createElement('div');
            card.classList.add('card');

            const basicInfo = `
                <div class="section">
                    <i class="fas fa-user"></i>
                    <h3>Temel Bilgiler</h3>
                    <p>ID: ${user.id}</p>
                    <p>İsim: ${user.name}</p>
                    <p>Kullanıcı Adı: ${user.username}</p>
                </div>
            `;

            const addressInfo = `
                <div class="section">
                    <i class="fas fa-location-dot"></i>
                    <h3>Adres Bilgileri</h3>
                    <p>Sokak: ${user.address.street}</p>
                    <p>Suite: ${user.address.suite}</p>
                    <p>Şehir: ${user.address.city}</p>
                    <p>Posta Kodu: ${user.address.zipcode}</p>
                    <p>Jeolojik Konum lat.: ${user.address.geo.lat}</p>
                    <p>Jeolojik Konum lng.: ${user.address.geo.lng}</p>
                </div>
            `;

            const companyInfo = `
                <div class="section">
                    <i class="fas fa-building"></i>
                    <h3>Şirket Bilgileri</h3>
                    <p>Şirket İsmi: ${user.company.name}</p>
                    <p>Şirket Sloganı: ${user.company.catchPhrase}</p>
                    <p>Şirket B.S.: ${user.company.bs}</p>
                </div>
            `;

            const contactInfo = `
                <div class="section">
                    <i class="fas fa-phone"></i>
                    <h3>İletişim Bilgileri</h3>
                    <p>Email: ${user.email}</p>
                    <p>Telefon: ${user.phone}</p>
                    <p>Websitesi: ${user.website}</p>
                </div>
            `;
            const usersPosts=`
                <div>
                <a class="mainButton" href="posts.html?userId=${user.id}" class="view-posts-link">Kullanıcının Gönderilerini Görüntüle</a>
                </div>
            `;

            card.innerHTML = basicInfo + addressInfo + companyInfo + contactInfo + usersPosts;
            userCardsContainer.appendChild(card);
        });

    } catch (err) {
        console.error('Veri çekilirken bir hata oluştu:', err);
    }
});