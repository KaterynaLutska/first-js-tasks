// create post //


const insertElem = document.querySelector('.insertElem')

const url = ['https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg','https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg','https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg'];
// craatePost(urls, divEl) // коли розбирусь з функцією 

 function createPost(array, innerPlace) {
  const newPostItem =  function creatItems(array) {
        const items = [];
        for (let i = 0; i < array.length; i++) {
            const img = document.createElement('img')
            img.setAttribute('src', array[i])
            img.setAttribute('alt', 'images')
            
            const link = document.createElement('a')
            link.setAttribute('href', '')
            link.appendChild(img)
            console.log(link);

            const item = document.createElement('li')
            item.classList.add('list-item')
            console.log(item);

            item.appendChild(link)
            console.log(item);
       
            items.push(item)
        }
        return (items)
    }

    const newItem = creatItems(url)
    console.log(newItem);

    const newItems = document.createElement('ul')
    newItems.append(...newItem)
    console.log(newItems);

    const imgesWrapper = document.createElement('div')
    imgesWrapper.style.display = 'flex';
    imgesWrapper.append(newItems)
    console.log(imgesWrapper);

    const title = document.createElement('h2')
    title.textContent = 'Hello, Katja';

    const par1 = document.createElement('p')
    par1.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eius'

    const spam = document.createElement('spam');
    spam.textContent = '11.11.2020';

    const parData = document.createElement('p');
    parData.textContent = 'Ох, уже ці параграфи',
        parData.appendChild(spam)
        console.log(parData);
    const input = document.createElement('input')
    input.setAttribute('type', 'chekbox')

    const article = document.createElement('article')
article.append(title, par1, imgesWrapper, parData, input)
    console.log(article);

 } (url) // це одразу виклик фукнції // 



// divEl.append(article)
// тут треба інер плайс// 

// в ul style.liststyle = 'none'