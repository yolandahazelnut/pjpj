document.evaluate('//*[@id="content2"]/div[2]/div/div[32]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.style.display = "none";
document.evaluate('//*[@id="navigation_games"]/ul/li[10]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.style.display = "none";
document.querySelectorAll("a[href='game.php?game=5d ']")[0].remove();
document.querySelectorAll("a[href='game.php?game=5D']")[0].remove();
