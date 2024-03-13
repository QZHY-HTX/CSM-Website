document.addEventListener('DOMContentLoaded', function() {  
    // 为每个学号单元格添加点击事件监听器  
    const sidCells = document.querySelectorAll('.sid');  
    sidCells.forEach(function(cell) {  
        cell.addEventListener('click', function(event) {  
            event.preventDefault(); // 阻止默认的链接跳转  
            const sid = this.dataset.sid; // 获取学号  
            // 导航到新的页面，并传递学号作为参数  
            window.location.href = `/student_details/${sid}`;  
        });  
    });  
});