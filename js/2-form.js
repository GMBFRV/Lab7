// Оголошуємо об'єкт formData
const formData = {
    email: "",
    message: ""
};

// Посилання на елементи форми
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// Відновлення даних із локального сховища при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email;
        formData.message = parsedData.message;
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
});

// Відстеження події input на формі
form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Відстеження події submit на формі
form.addEventListener('submit', event => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    formData.email = "";
    formData.message = "";
    form.reset();
});
