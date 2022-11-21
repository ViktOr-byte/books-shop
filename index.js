let bookCatalog =[{
    "author": "Douglas Crockford",
    "imageLink": "https://m.media-amazon.com/images/I/51aS0su4SjL._SX388_BO1,204,203,200_.jpg",
    "title": "JavaScript: The Good Parts: The Good Parts",
    "price": 30,
    "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
  },
    {
      "author": "David Herman",
      "imageLink": "https://m.media-amazon.com/images/I/416VUkOt3QL._SX379_BO1,204,203,200_.jpg",
      "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
      "price": 22,
      "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
    },
    {
      "author": "David Flanagan",
      "imageLink": "https://m.media-amazon.com/images/I/51mb6UvEDdL._SX378_BO1,204,203,200_.jpg",
      "title": "JavaScript: The Definitive Guide",
      "price": 40,
      "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
    },
    {
      "author": " Eric Elliott",
      "imageLink": "https://m.media-amazon.com/images/I/512Hli3f6FL._SX379_BO1,204,203,200_.jpg",
      "title": "Programming JavaScript Applications",
      "price": 19,
      "description": "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows."
    },
    {
      "author": "Addy Osmani",
      "imageLink": "https://m.media-amazon.com/images/I/51H-31ivMTL._SX379_BO1,204,203,200_.jpg",
      "title": "Learning JavaScript Design Patterns",
      "price": 32,
      "description": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
    },
    {
      "author": "Boris Cherny",
      "imageLink": "https://m.media-amazon.com/images/I/51csAp-ykgL._SX379_BO1,204,203,200_.jpg",
      "title": "Programming TypeScript",
      "price": 28,
      "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
    },
    {
      "author": "Alex Banks, Eve Porcello",
      "imageLink": "https://m.media-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg",
      "title": "Learning React, 2nd Edition",
      "price": 25,
      "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
    },
    {
      "author": "Bradley Meck Alex Young and Mike Cantelon",
      "imageLink": "https://m.media-amazon.com/images/I/41yixXsFSQL._SX395_BO1,204,203,200_.jpg",
      "title": "Node.js in Action",
      "price": 38,
      "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
    },
    {
      "author": "Kyle Simpson",
      "imageLink": "https://m.media-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg",
      "title": "You Don't Know JS Yet: Get Started",
      "price": 26,
      "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
    },
    {
      "author": "John Resig and Bear Bibeault",
      "imageLink": "https://images.manning.com/360/480/resize/book/a/b85f344-edd7-4833-adf3-d98878088441/resig.png",
      "title": "Secrets of the JavaScript Ninja",
      "price": 33,
      "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
    }
  ]

        let header = document.createElement('header');
        header.className = 'header';
        document.body.append(header);
        
        let title = document.createElement('h1');
        title.className = 'title';
        title.innerText = 'Book catalog';
        document.body.append(title);
        
        let myBag = document.createElement('button');
        myBag.className = 'myBag';
        myBag.innerHTML = 'My Bag';
        title.append(myBag);
        
        let myBagBooks = document.createElement('div');
        myBagBooks.className = 'myBagBooks';
        title.append(myBagBooks);
        
        let myBagClose = document.createElement('button');
        myBagClose.className = 'myBagClose';
        myBagClose.innerHTML = 'CLOSE';
        myBagBooks.append(myBagClose);
        
        let confirmOrder = document.createElement('button');
        confirmOrder.className = 'confirmOrder';
        confirmOrder.innerHTML = 'CONFIRM YOUR ORDER';
        myBagBooks.append(confirmOrder);
        
        
        
        
        let bookSection = document.createElement('section');
        bookSection.className = 'bookContainer';
        document.body.append(bookSection);
        
        
        for (var i = 0; i < bookCatalog.length; i++) {
            let bookBox = document.createElement('div');
            bookBox.className = 'bookBox';
            bookSection.append(bookBox);
        
            let img = document.createElement('img');
            img.className = 'bookImg';
            img.src = bookCatalog[i].imageLink;
            bookBox.append(img);
        
            let infoBox = document.createElement('div');
            infoBox.className = 'bookInfo';
            bookBox.append(infoBox);
        
            let author = document.createElement('p');
            author.className = 'bookAuthor';
            author.innerHTML = bookCatalog[i].author;
            infoBox.append(author);
        
            let title = document.createElement('p');
            title.className = 'bookTitle';
            title.innerHTML = bookCatalog[i].title;
            author.after(title);
        
            let price = document.createElement('p');
            price.className = 'bookPrice';
            price.innerHTML = '$' + bookCatalog[i].price;
            title.after(price);
        
            let bagBox = document.createElement('div');
            bagBox.className = 'bagBox';
            price.after(bagBox);
        
        
        
            let popUpButton = document.createElement('button');
            popUpButton.className = 'popUpButton';
            popUpButton.innerHTML = 'Show more';
            bagBox.append(popUpButton);
        
            let popUp = document.createElement('div');
            popUp.className = 'popUp';
            bagBox.append(popUp);
        
            let popUpText = document.createElement('p');
            popUpText.className = 'popUpText';
            popUpText.innerHTML = bookCatalog[i].description;
            popUp.append(popUpText);
        
            let popUpClose = document.createElement('button');
            popUpClose.className = 'popUpClose';
            popUpClose.innerHTML = '';
            popUp.append(popUpClose);
        
        
        
        
            let bagButton = document.createElement('button');
            bagButton.className = 'bagButton';
            bagButton.innerHTML = 'Add to My Bag';
            bagBox.appendChild(bagButton);
        
        
        
        
        };
        
        let popUpOpen = document.querySelectorAll('.popUpButton');
        for (let i=0; i<popUpOpen.length; i++){
          popUpOpen[i].addEventListener('click', popUpStart);
          function popUpStart () {
            popUpOpen[i].nextSibling.classList.add('active');
          }
        }
        
        let popUpClose = document.querySelectorAll('.popUpClose');
        for (let i=0; i<popUpClose.length; i++){
        popUpClose[i].addEventListener('click', popUpEnd);
          function popUpEnd () {
            popUpClose[i].parentElement.classList.remove('active');
          }
        }
        
        
        let bagBooks = document.querySelector('.myBagBooks'); // text window
        let myBagOpen = document.querySelector('.myBag'); // open btn
        let bagClose = document.querySelector('.myBagClose'); // close btn
        
        
        myBagOpen.addEventListener('click', () => {
          bagBooks.classList.add('active');
        });
        
        bagClose.addEventListener('click', () => {
          bagBooks.classList.remove('active');
        });
        
        
        let orderConfirmBtn = document.querySelector('.confirmOrder');
        orderConfirmBtn.addEventListener('click', () => {
          window.location.href = './order.html';
        });
        
        
        
        
        