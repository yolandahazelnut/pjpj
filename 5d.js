document.evaluate('/html/body/div[3]/div/div[2]/div[3]/div[2]/div[2]/div/div[11]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.style.display = "none";
// document.evaluate('//*[@id="navigation_games"]/ul/li[10]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.style.display = "none";
document.querySelectorAll("a[href='game.php?game=5d ']")[0].remove();
document.querySelectorAll("a[href='game.php?game=5D']")[0].remove();
