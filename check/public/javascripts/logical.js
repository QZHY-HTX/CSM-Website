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

// 假设你已经在页面上加载了这个脚本  
document.querySelectorAll('.query-form').forEach(form => {  
    form.addEventListener('submit', function(event) {  
      event.preventDefault(); // 阻止表单默认提交行为  
        
      const sid = this.querySelector('.sid').dataset.sid; // 获取学生的sid  
      const homeworkNum = this.querySelector('.select-box').value; // 获取选择的作业次数  
        
      // 发送 AJAX 请求到后端 API 查询成绩  
      fetch(`/query-homework?sid=${sid}&homeworkNum=${homeworkNum}`)  
        .then(response => response.json())  
        .then(data => {  
          // 找到对应的成绩显示容器并更新内容  
          const scoresContainer = this.querySelector('.homework-scores');  
          scoresContainer.textContent = `第${homeworkNum}次作业成绩：${data.score}`;  
        })  
        .catch(error => {  
          console.error('Error fetching homework score:', error);  
        });  
    });  
  });