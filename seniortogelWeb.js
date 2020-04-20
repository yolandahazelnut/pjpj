var style = document.getElementById('footer').style;
style.backgroundColor = "transparent";
style.borderTop = "5px solid #ff0000";

var bank = document.evaluate('//*[@id="bank"]/div/div/div[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
bank.innerHTML = '<img style="margin-top: -25px;" src="https://cariprediksi.com/wp-content/uploads/2020/04/000.png">';

var links = document.createTextNode(`<div id="fl_menu">
<img src="https://i.ibb.co/3m43VJ9/abc1.png" width="190px" height="43px">
<div class="menuaa">
<table width="200">
<tbody><tr style="background: none;">
<td class="menu_item">
<a class="linkalte" href="/m" target="_blank" style="text-decoration: none;" title="Situs Togel Terpercaya">www.seniortoto.cc</a>
<a class="linkalte" href="/m" target="_blank" style="text-decoration: none;" title="Situs Togel Terpercaya">www.parasenior.com</a>
<a class="linkalte" href="/m" target="_blank" style="text-decoration: none;" title="Situs Togel Terpercaya">www.seniortoto.me</a>
<a class="linkalte" href="/m" target="_blank" style="text-decoration: none;" title="Situs Togel Terpercaya">www.seniortogel.org</a>
</td>
</tr>
</tbody></table>
</div>
</div>`);
document.body.appendChild(links);
