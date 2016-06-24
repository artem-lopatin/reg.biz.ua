var nameCount=0;




document.getElementById('createOooName').addEventListener('click', function (){
    elemClone ('oooUkrName0',nameCount);
    nameCount++;
    sessionStorage.setItem('nameCount', nameCount);

}, false);



function elemClone (oldElemId,Count) {
    var oldElem = document.getElementById(oldElemId);
    var newElem = oldElem.cloneNode(true);

    newElem.id=oldElemId.substr(0,oldElemId.length-1)+Count;
    [].forEach.call(newElem.querySelectorAll('*'), function (newEl, i) {
        newEl.value = '';
        oldElem.querySelectorAll('*')[i].name ? newEl.name = oldElem.querySelectorAll('*')[i].name.substr(0,oldElem.querySelectorAll('*')[i].name.length-1) + Count : false;
        oldElem.querySelectorAll('*')[i].id ? (newEl.id = oldElem.querySelectorAll('*')[i].id.substr(0,oldElem.querySelectorAll('*')[i].id.length-1) + Count):false;

        var list = oldElem.querySelectorAll('*')[i].getAttribute('list');
        (list) ? newEl.setAttribute('list',list.substr(0,list.length-1) + Count)  : false;
    });
    oldElem.parentNode.appendChild(newElem);
}

function(del) {

    var s = del.parentNode.children;

    if (s.length > 1) {
        del.parentNode.lastElementChild.remove();

    }
};