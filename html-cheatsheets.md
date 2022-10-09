# **HTML  (Hyper Text Markdown Language) Tags**

## Grundstruktur eines HTML- Gerüsts ##
```HTML
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
> **Doctype:**
Sagt dem Browser welche Computersprache benutzt wird (hier: HTML)

> **lang=""**
gibt die Sprache an (hier: Englisch)

> **metatags:**
```
   <meta charset="UTF-8">
   ```
 >   macht ä,ü,ö lesbar


 ### ```<a>``` ###

 > The ```<a>``` tag defines a hyperlink, which is used to link from one page to another.

The most important attribute of the ```<a> ```element is the href attribute, which indicates the link's destination.

By default, links will appear as follows in all browsers:

An unvisited link is underlined and blue
A visited link is underlined and purple
An active link is underlined and red

```
**Example
Create a link to W3Schools.com:**

<a href="https://www.w3schools.com">Visit W3Schools.com!</a>
```

### ```<ul>```
* Item Eins
* Item zwei
* Item Drei

(ungeordente Liste)

### ```<ol>```
1. Item Eins
2. Item Zwei
3. Item Drei

(geordnete Liste)

### ```<li>```
Tag für die einzelnen Listenelemente

``` html
<ol>
<li> Item Eins </li>
<li> Item Zwei </li>
<li> Item Drei </li>
</ol>
```





 ## CSS Units ##
 ### px (Pixel) ###
 >Größeneinheit in Pixel

 ### rem  (root em) ###
 >ändert die größe relativ zur Schriftgröße vom Root (HTML)- Element

 

![rem](./images/rem_css_example.png)

 ### em ###
 > ändert die Größe relativ zur Schriftgröße zum derzeitigen Element (2em bedeutet doppelte Größe der derzeitigen Schriftart)

 ![em](./images/em_css_example.png)
 
 ### % ###
 > **Größeneinheit in Prozent (relativ zum Elternelement)** 
 ![%](./images/css_percent_example.png)

### vh ( Relative to 1% of the height of the viewport) ###

![vh](./images/vh_css_example.png) 

### vw ( Relative to 1% of the width of the viewport) ###

![vw](./images/vw_css_example.png)
