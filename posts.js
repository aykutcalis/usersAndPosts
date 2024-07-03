const urlParams = new URLSearchParams(window.location.search);
let userID = urlParams.get('userId');
console.log(userID)


document.addEventListener('DOMContentLoaded', async () => {
    if(!userID){
        userID = prompt('1 ile 10 arasında sayı giriniz')
    }
    if(!userID || userID <=0 || userID > 10 || isNaN(userID)){
        alert('geçersiz UserID,1 ile 10 arasında değer giriiz')
        throw new Error('Geçersiz UserId girildi');
    }
    const userCardsContainer = document.getElementById('user-cards');

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);
        const users = await response.json();

        users.forEach(user => {
            const card = document.createElement('div');
            card.classList.add('card');

            const basicInfo = `
                <div class="section">
                    <i class="fas fa-user"></i>
                    <h3>Temel Bilgiler</h3>
                     <p>userID: ${userID}</p>
                    <p>Post Number: ${user.id}</p>
                    <h>Başlık: ${user.title}</h>
                    <p>Metin: ${user.body}</p>
                </div>
            `;

          

            card.innerHTML = basicInfo ;
            userCardsContainer.appendChild(card);
        });

    } catch (err) {
        console.error('Veri çekilirken bir hata oluştu:', err);
    }
});
