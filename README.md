##  ๐ ์ผํ๋ชฐ ์น์๋น์ค

- ๊ฐ๋ฐ ๊ธฐ๊ฐ : 2023.01.30 ~ 2023.02.11
- ์ฃผ์  : ๋ฌผ๊ฑด์ ์ฃผ๋ฌธ, ํ๋งค ๋ฐ ๋ฐฐ์กํ  ์ ์๋ ์ผํ๋ชฐ ์น์ฌ์ดํธ ๊ฐ๋ฐ ํ๋ก์ ํธ
- ํ์คํธ ํ์ด์ง : [๋ฐ๋ก ๊ฐ๊ธฐ](http://kdt-ai6-team03.elicecoding.com/)
## ๐ API ๋ฌธ์ 
|  ๊ณตํต| kdt-ai6-team03.elicecoding.com		 |  |  |
|--|--|--|--|
|์ฌ์ฉ์|ํ์๊ฐ์|POST| /register |
|| ๋ก๊ทธ์ธ |POST| /login |
|| ๊ณ์ ์ฐพ๊ธฐ-email |POST|/users/help/id |
|| ๊ณ์ ์ฐพ๊ธฐ-pw,๋ฉ์ผ๋ง |POST| /users/help/password |
|| ๊ด๋ฆฌ์-์ ์ฒด ์ฌ์ฉ์ ์ ๋ณด ์กฐํ |GET| /admin/users?page=1&perPage=10 |
|| ๊ด๋ฆฌ์-์ฌ์ฉ์ ์ ๋ณด ์์  |PATCH| /admin/users/:userId |
|| ๊ด๋ฆฌ์-์ฌ์ฉ์ ์ ๋ณด ์ญ์  |DELETE| /admin/users/:userId |
|| ์ฌ์ฉ์-์ฌ์ฉ์ ์ ๋ณด ์กฐํ |GET| /users |
|| ์ฌ์ฉ์-์ฌ์ฉ์ ์ ๋ณด ์์  |PATCH| /users/:userId |
|| ์ฌ์ฉ์-์ฌ์ฉ์ ์ ๋ณด ์ญ์  |DELETE| /users/:userId |
|| ์ญ์  ์  ํ์ฌ ๋น๋ฐ๋ฒํธ ํ์ธ |POST| /users/currentPassword |
|์ํ|๊ด๋ฆฌ์-์ํ ๋ฑ๋ก|POST| /products |
|| ๊ด๋ฆฌ์-์ํ ์์  |PATCH|/products/:productId |
|| ๊ด๋ฆฌ์-์ํ ์ญ์  |DELETE|/products/:productId |
|| ์ํ ์์ธ ์ ๋ณด |GET|/products/:productId |
|| ์นดํ๊ณ ๋ฆฌ ํด๋ฆญ->๊ด๋ จ ์ํ ์ถ๋ ฅ |GET|/products/category/:categoryTitle |
|์ฃผ๋ฌธ|์ฌ์ฉ์-์ฃผ๋ฌธํ๊ธฐ|POST| /orders |
|| ์ฌ์ฉ์-์ฃผ๋ฌธ ๋ชฉ๋ก ์กฐํ |GET| /orders |
|| ์ฌ์ฉ์-์ฃผ๋ฌธ ์ ๋ณด ์์  |PATCH|/orders/:orderId |
|| ์ฌ์ฉ์-์ฃผ๋ฌธ ์ ๋ณด ์ญ์  |DELETE| /orders/:orderId |
|| ๊ด๋ฆฌ์-์ ์ฒด ์ฃผ๋ฌธ๋ชฉ๋ก ์กฐํ |GET| /admin/orders?page=1&perPage=10 |
|| ๊ด๋ฆฌ์-์ฃผ๋ฌธ ์ํ ๊ด๋ฆฌ |PATCH|/admin/orders/:orderId |
|| ๊ด๋ฆฌ์-์ฃผ๋ฌธ ์ญ์  |DELETE| /admin/orders/:orderId |
|์นดํ๊ณ ๋ฆฌ |(ํ)์นดํ๊ณ ๋ฆฌ ๋ชฉ๋ก ์กฐํ|GET|/categorys |
|| ๊ด๋ฆฌ์-์นดํ๊ณ ๋ฆฌ ๋ฑ๋ก |POST|/categorys |
|| ๊ด๋ฆฌ์-์นดํ๊ณ ๋ฆฌ ์์  |PATCH|/categorys/:categoryId |
|| ๊ด๋ฆฌ์-์นดํ๊ณ ๋ฆฌ ์ญ์  |DELETE|/categorys/:categoryId |


 <br>

## ๐ช ํ์
|  ํฌ์ง์|์ด๋ฆ  |
|--|--|
|Back-End| ๋ฐ๊ธํด |
|Back-End| ์ฌ๋ค์ |
|Back-End| ์ง๋ค์ |
|Front-End| ์ ํฌํ |
|Front-End| ์ด์น์ |
|Front-End| ์๋์ฐ |


 <br>  

## ๐ง ๊ธฐ์  ์คํ

### Front-End

<div>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=plastic&logo=CSS3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=JavaScript&logoColor=white"/>
<img src="https://img.shields.io/badge/BootStrap-7952B3?style=plastic&logo=BootStrap&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=plastic&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=plastic&logo=React&logoColor=white"/>
</div>

<br />

### Back-End

<div>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=JavaScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=plastic&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express-000000?style=plastic&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/mongoDB-47A248?style=plastic&logo=mongoDB&logoColor=white"/>
</div>

<br> 

### ๐ ์์ธ๊ธฐ๋ฅ

1. **User**
    - ๊ด๋ฆฌ์
	    - ํ์ ๊ด๋ฆฌ, ๊ถํ ์ง์ , ํ์ ์ญ์ 
    - ์ฌ์ฉ์
        - ํ์ ๊ฐ์, ์ ๋ณด ์์ , ์ญ์ 
	- ์ ํจ์ฑ ๊ฒ์ฌ 
		- ๋ก๊ทธ์ธ :  ์์ด๋ ๋น๋ฐ๋ฒํธ ์ผ์น์ฌ๋ถ, ์กด์ฌํ๋ ์ด๋ฉ์ผ ํ์ธ์ฌ๋ถ
		- ํ์๊ฐ์ : ์ค๋ณต ์ด๋ฉ์ผ ํ์ธ
<br> 

2. **PRODUCT**
    - ๊ด๋ฆฌ์
        - ์นดํ๊ณ ๋ฆฌ ์กฐํ, ์์ , ์ญ์ 
        - ์ํ ์ถ๊ฐ, ์์ , ์ญ์ 
    - ์ ํจ์ฑ ๊ฒ์ฌ 
		- ์ํ, ์นดํ๊ณ ๋ฆฌ : ์ด๋ฆ ์ค๋ณตํ์ธ
<br> 

3.  **CART** 
	- ์ฅ๋ฐ๊ตฌ๋ ์ถ๊ฐ, ์์ , ์ญ์ (์ ์ฒด, ๋ถ๋ถ)
    - ์ฅ๋ฐ๊ตฌ๋ ๊ฐ๊ฒฉ ์กฐํ
<br>
    
4.  **ORDER** 
    - ๊ด๋ฆฌ์
	    - ์ฃผ๋ฌธ ์ํ ๋ณ๊ฒฝ, ์ญ์ 
    - ์ฌ์ฉ์
        - ์ฃผ๋ฌธ ํ์ธ, ์์ , ์ญ์ 
    - ์ ํจ์ฑ ๊ฒ์ฌ 
		- ์ฃผ๋ฌธ์ ํ์ธ
<br> 

## โจ ๋์์ธ
**ํธ๋๋ฉ์ด๋ ๋์๊ธฐ ์ผํ๋ชฐ**

< ๋์์ธ: ๋ฏธ๋๋ฉ / ๋จ์ ํจ > 

- ์ปฌ๋ฌ: black  /white / grey

- ํฐํธ: Merriweather


<br>

## ๐ ํ์คํธ ๋ฐฉ๋ฒ

1. ํด๋น ํ๋ก์ ํธ๋ฅผ clone ํฉ๋๋ค.
```
git clone git@kdt-gitlab.elice.io:ai_track/class_06/web_project/team03/moteam.git
```

2. ํ๋ก์ ํธ ์คํ์ ํ์ํ ํจํค์ง๋ฅผ ์ค์นํฉ๋๋ค.
```
-- npm ์ฌ์ฉ ์ --

cd front
npm install

cd back
npm install
```
```
-- yarn ์ฌ์ฉ ์ --

cd front
yarn

cd back
yarn
```

3. ๋ชฝ๊ณ ๋๋น ์ค์น ํ ์ฐ๊ฒฐํฉ๋๋ค.
```
-- ๋ชฝ๊ณ ๋๋น ์ํ๋ผ์ค ์ฌ์ฉ ์ --

1. ๋ชฝ๊ณ ๋๋น ์ํ๋ผ์ค ํด๋ผ์ฐ๋ ๋ฐ์ดํฐ๋ฒ ์ด์ค ์์ฑ
2. back ๋๋ ํ ๋ฆฌ์ .env ํ์ผ ํธ์ง
3. MONGODB_URL ๋ณ์์ DB URL์ ์ฝ์
4. ex) MONGODB_URL="mongodb+srv://<DB๋ช>:<๋น๋ฐ๋ฒํธ>@<db๋ช>.m5knbpd.mongodb.net/?retryWrites=true&w=majority"
```

```
-- ๋ก์ปฌ์์ ๋ชฝ๊ณ ๋๋น ์ฌ์ฉ ์ --

1. ๋ชฝ๊ณ ๋๋น ์ค์น
2. back ๋๋ ํ ๋ฆฌ์ .env ํ์ผ ํธ์ง
3. MONGODB_URL ๋ณ์์ mongodb://localhost:27017/ ์ฝ์
```

4. ํ๋ก ํธ์๋ ์๋ฒ์ ๋ฐฑ์๋ ์๋ฒ๋ฅผ ์คํํฉ๋๋ค.
```
-- npm ์ฌ์ฉ ์ --

cd front
npm start

cd back
npm start
```

```
-- yarn ์ฌ์ฉ ์ --

cd front
yarn start

cd back
yarn start
```
5. ๋ง์๊ป ํ์คํธ ํด๋ณด์ธ์!
