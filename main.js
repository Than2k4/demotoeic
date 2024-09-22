function startTest() {
    alert("Bạn đã bắt đầu bài thi thử!");
    // Chuyển đến trang thi thử (có thể xử lý thêm)
    window.location.href = "index3.html"; // Thay đổi thành URL của trang thi thử
}
function handleLogin(event) {
    event.preventDefault(); // Ngăn chặn mặc định của form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Kiểm tra thông tin đăng nhập (giả sử)
    if (username === "user" && password === "pass") {
        document.getElementById('message').innerText = "Đăng nhập thành công!";
        // Chuyển đến trang chính (có thể thay đổi)
        setTimeout(() => {
            window.location.href = "index2.html"; // Thay đổi thành URL của trang chính
        }, 1000);
    } else {
        document.getElementById('message').innerText = "Tên người dùng hoặc mật khẩu không đúng.";
    }
}
function toggleForm() {
    const formPopup = document.getElementById('formPopup');
    const overlay = document.getElementById('overlay');
    if (formPopup.style.display === 'block') {
        formPopup.style.display = 'none';
        overlay.style.display = 'none';
    } else {
        formPopup.style.display = 'block';
        overlay.style.display = 'block';
    }
}
