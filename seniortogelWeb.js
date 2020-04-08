var style = document.getElementById('footer').style;
style.backgroundColor = "transparent";
style.borderTop = "5px solid #ff0000";

var bank = document.evaluate('//*[@id="bank"]/div/div/div[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
bank.innerHTML = '<img style="margin-top: -25px;" src="https://cariprediksi.com/wp-content/uploads/2020/04/000.png">';
