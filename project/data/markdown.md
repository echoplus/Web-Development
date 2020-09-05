במדריך הזה נלמד איך ליצור סרגל ניווט רספונסיבי

# פרויקט חדש

צרו תיקיה חדשה לפרויקט החדש ופתחו אותה ב Visual Studio Code

צרו 2 קבצים חדשים

1. index.html
2. style.css

## index.html

בקובץ `index.html` התחילו עם הקוד הבא

- לייבא את קובץ ה CSS
- לייבא פונטים מ Google Fonts

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/CSS/style.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap"
      rel="stylesheet"
    />
    <title>Navigation</title>
  </head>
</html>
```

### Body

בגוף האתר צרו את התגיות הבאות

- `<nav>` לסרגל הניווט עצמו
- `<main>` לתוכן של האתר

```html
<body>
  <nav class="navbar"></nav>

  <main>
    <h1>Navigation Bar Tutorial</h1>
    <p>Today you will be learn how to make a responsive navigation bar</p>
  </main>
</body>
```

## style.css

אם עדיין לא יצרתם את הקובץ תצרו אותו ותייבאו אותו ל index.html

בתחילת השורה הכניסו את ההגדרות הבאות לאלמנט ה root

אלמנט ה**root** מייצג את האלמנט הראשי של המסממך במקרה הזה ה html

- גודל הפונט הבסיסי
- סגנון הפונט
- משתנים
  - צבע טקסט עיקרי ומשני
  - צבע רקע עיקרי ומשני

```css
:root {
  font-size: 16px;
  font-family: "Open Sans";
  /* Variables */
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #23232e;
  --bg-secondary: #141418;
}
```

### משתנים (variables)

**משתנים** מאפשרים לנו לשנות בקלות את העיצוב והערכת נושא של האתר במקום אחד
מגדירים משתנים בעזרת 2 מקפים `--` בתחילת השם

### body

לאחר נכן נגדיר עיצוב קבוע לגוף האתר ונאפס מרווחים חיצוניים ופנימיים

```css
body {
  color: #000000;
  background-color: #ffffff;
  margin: 0;
  padding: 0;
}
```

### main

### מה זו יחידת rem?

זאת יחידת מידה שיחסית לגודל הפונט של אלמנט ה root
אז אם גודל הפונט ב root הוא 16px השווי של 5rem שווה ל 80px

$$5rem * 16px = 80px$$

גודל יחסי הוא מאוד שימושי כי כאשר נרצה להגדיל את הפונט נצטרך רק לשנות את ה 16px ולא כל הגדרה ספציפית בכל אלמנט

## עיצוב אישי לבר הגלילה ( Scrollbar)

```css
body::-webkit-scrollbar {
  width: 0.25rem;
}
body::-webkit-scrollbar-track {
  background-color: #1e1e24;
}
body::-webkit-scrollbar-thumb {
  background-color: #6649b8;
}
```
