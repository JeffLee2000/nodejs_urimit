const name = document.querySelector("#name");
const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const confirmPsword = document.querySelector("#confirm-psword");
const registerBtn = document.querySelector('button[type="submit"]');

registerBtn.addEventListener("click", register);

function register() {
    const req = {
        name: name.value,
        id: id.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("로그인 중 에러 발생");
    });
}