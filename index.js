es_1.html:55 Live reload enabled.
:5500/favicon.ico:1 
        
        
       Failed to load resource: the server responded with a status of 404 (Not Found)
const html = document.documentElement
undefined
html
<html lang=​"en">​<head>​…​</head>​<body>​…​</body>​</html>​
html.children
HTMLCollection(2) [head, body]0: head1: bodylength: 2[[Prototype]]: HTMLCollection
const body = html.children[1]
undefined
body
<body>​<ul>​…​</ul>​<script>​ // ... ​</script>​<!-- Code injected by live-server --><script>​…​</script>​</body>​
body.children
HTMLCollection(3) [ul, script, script]
const ul = body.children
undefined
const ul = body.children[0]
undefined
ul
<ul>​<li>​::marker​"1"</li>​<li>​::marker​"2"</li>​<li>​::marker​"3"</li>​</ul>​
ul.children
HTMLCollection(3) [li, li, li]
const myLi = ul.children[1]
undefined
myLi
<li>​…​</li>​
myLi.parentElement
<ul>​…​</ul>​
myLi.previousSibling
#textassignedSlot: nullbaseURI: "http://127.0.0.1:5500/DOM/es_1.html"childNodes: NodeList []data: "\n        "firstChild: nullisConnected: truelastChild: nulllength: 9nextElementSibling: linextSibling: linodeName: "#text"nodeType: 3nodeValue: "\n        "ownerDocument: documentparentElement: ulparentNode: ulpreviousElementSibling: lipreviousSibling: litextContent: "\n        "wholeText: "\n        "[[Prototype]]: Text
my
VM866:1 Uncaught ReferenceError: my is not defined
    at <anonymous>:1:1
(anonymous) @ VM866:1
myLi.previousElementSibling
<li>​…​</li>​
myLi.nextElementSibling
<li>​…​</li>​
