const usernameInput = document.getElementById('username');
const outputDiv = document.getElementById('output');
const generateButton = document.getElementById('generateButton');
const copyButton = document.getElementById('copyButton');

generateButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();

    if (username === "") {
        alert("请输入有效的 GitHub 用户名！");
        return;
    }

    const markdown = `
## ${username}

### 关于我
嗨，我是${username}，欢迎来到我的GitHub主页！

### 统计信息
![我的 GitHub 数据](https://stats.justsong.cn/api/github?username=${username})

`.trim();

    outputDiv.textContent = markdown;
});

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(outputDiv.textContent)
        .then(() => alert('复制成功！'))
        .catch(err => console.error('复制失败: ', err));
});
