// Lấy các phần tử DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Hàm thêm công việc
function addTask() {
    const taskText = taskInput.value.trim();
    
    // Kiểm tra nếu input trống thì không làm gì cả
    if (taskText === "") {
        alert("Vui lòng nhập tên công việc!");
        return;
    }

    // Tạo thẻ li chứa nội dung công việc
    const li = document.createElement('li');
    li.innerText = taskText;

    // Tạo nút xóa [X] cho từng công việc (Yêu cầu ở branch feature-delete-task)
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtn.className = 'delete-btn';
    
    // Sự kiện xóa task khi nhấn nút X
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Thêm nút xóa vào thẻ li, rồi thêm li vào danh sách ul
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Xóa nội dung ô input sau khi thêm thành công
    taskInput.value = "";
    taskInput.focus();
}

// Sự kiện click nút "Thêm"
addTaskBtn.addEventListener('click', addTask);

// Sự kiện nhấn phím Enter trong ô input cũng thực hiện thêm task
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});