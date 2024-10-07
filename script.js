const usernameInput = document.getElementById('username');
const avatarInput = document.getElementById('avatar');
const bioInput = document.getElementById('bio');
const outputDiv = document.getElementById('output');
const generateButton = document.getElementById('generateButton');
const copyButton = document.getElementById('copyButton');

generateButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const avatar = avatarInput.value;
    const bio = bioInput.value;

    const markdown = `
![${username}](${avatar})
## ${username}
${bio}
    `.trim();

    outputDiv.textContent = markdown;
});

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(outputDiv.textContent)
        .then(() => alert('复制成功！'))
        .catch(err => console.error('复制失败: ', err));
});
