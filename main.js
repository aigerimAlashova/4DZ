let container = document.querySelector('.container')

fetch('https://api.sampleapis.com/codingresources/codingResources')
.then((res) => res.json())
.then((res) => res.forEach((item) => {
    container.innerHTML += `
    <div class="item">
    <div>${item.id}</div>
    <div>${item.description}</div>
    <div  class="url">${item.url}</div>
    <div>${item.types}</div>
    <div>${item.topics}</div>
    <div>${item.levels}</div>
    <div>${item.topics}</div>
    </div>
    `
}
))


