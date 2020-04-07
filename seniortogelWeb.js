var style = document.getElementById('footer').style;
style.backgroundColor = "transparent";
style.borderTop = "5px solid #ff0000";

var bank = document.evaluate('//*[@id="bank"]/div/div/div[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
bank.innerHTML = '<img style="margin-top: -25px; margin-left: 20px;" src="http://3.bp.blogspot.com/-YP72VPbky-U/WkjBI6OZj9I/AAAAAAAABnY/2_WM0GUHfCs73O5Evk2xo-r6LCAFrZfwQCK4BGAYYCw/s1600/Icon-Status-Bank-DeltaTogel.gif">';
