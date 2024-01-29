var term = 'Танцы';
let cout= 0;
        //принимаем максимум 10 пакетов инфы
        const url = `http://itunes.apple.com/search?term=${term}&limit=10`;
        console.log(url)
        // где размещается вес список музыки
        const songContainer = document.getElementById('songs');
        while (songContainer.firstChild) {
            songContainer.removeChild(songContainer.firstChild); 
        }
        fetch(url)
        .then((Response) => Response.json())
            .then((data) => {
                console.log(data.results);
                const artists = data.results;
                return artists.map(result => {
                    // создание элементов HTML
                    const article = document.createElement('article')
                    const nameMusic = document.createElement('NameM'),
                    artists = document.createElement('p'),
                    song = document.createElement('h4'),
                    img = document.createElement('img'),
                    audio = document.createElement('audio'),
                    audioSource = document.createElement('source')
                    // задаем классы переменным
                    img.className = 'image';
                    artists.className= 'nameisp';
                    article.className = 'article';
                    nameMusic.className='nameMusic';
                    audio.className = 'audioCont';
                    // Заполнение значениями API
                    artists.innerHTML = result.artistName;
                    song.innerHTML = result.trackName;
                    img.src = result.artworkUrl100;
                    audioSource.src = result.previewUrl;
                    audio.controls = true;
                    // Вставка элементов в html  контейнер для размещения 
                    article.appendChild(img);
                    article.appendChild(nameMusic);
                    // nameMusic.appendChild(artists);
                    nameMusic.appendChild(song);
                    nameMusic.appendChild(audio);
                    audio.appendChild(audioSource);
                    songContainer.appendChild(article);
                })
            })
.catch(error => console.log('Request failed:', error));
