/*-------автозаполнение полей формы при перезагрузке страницы или возврате------------*/

function ready() {

    var temp1=+sessionStorage.getItem('nameCount');
    if(temp1>0) {
        for (var n1 = 0; n1 < temp1; n1++) {
            createName();
        }
    }

    var temp=+sessionStorage.getItem('shareholderCount');
    if(temp>0) {
        for (var n = 0; n < temp; n++) {
            createShareholder();
        }
    }

    var temp2=+sessionStorage.getItem('kvedCount');
    if(temp>0) {
        for (var n2 = 0; n2 < temp2; n2++) {
            createKved();
        }
    }

    [].forEach.call(document.querySelectorAll('input'), function(elem,i) {
        var store = sessionStorage.getItem(elem.name);
        if(store) {
            elem.value=store;
        }else if(elem.checked){
            sessionStorage.setItem(elem.id,elem.value)
        }
    });


    [].forEach.call(document.querySelectorAll('.changeOpf:not(#opf)'), function(elem,i) {
        var el=document.getElementById('oooNameLangS'+(i+1));

        if (el.value == 'Англійська') {
            elem.innerText='Limited Liability Company';
        } else if (el.value == 'Російська') {
            elem.innerText='Общество с ограниченной ответственностью';
        } else {
            elem.innerHTML='<input name="opfOter'+(i+1)+'" id="oooOfp'+(i+1)+'" size="40">';
            elem.firstElementChild.setAttribute('placeholder','організаційна форма '+el.value.substr(0,el.value.length-1)+'ою мовою');
        }

    });

    [].forEach.call(document.querySelectorAll('.changeOpfShort:not(#opfShort)'), function(elem,i) {
        var el=document.getElementById('oooNameLangS'+(i+1));

        if (el.value == 'Англійська') {
            elem.innerText='LLC';
        } else if (el.value == 'Російська') {
            elem.innerText='ООО';
        } else {
            //elem.innerHTML='<input name="opfOter'+(i+1)+'" id="oooOfp'+(i+1)+'" size="40">';
            //elem.firstElementChild.setAttribute('placeholder','організаційна форма '+el.value.substr(0,el.value.length-1)+'ою мовою');
            elem.className='none';
        }

    });


    [].forEach.call(document.querySelectorAll('input[type="radio"]'), function(elem,i) {
        var el=sessionStorage.getItem(elem.id);
        if(el=='✔'){
            elem.setAttribute('checked','checked');
        }else{
            elem.removeAttribute('checked');
        }

    });

 

}

document.addEventListener("DOMContentLoaded", ready);

/*---------------------------автозапись полей формы в сторадж------------------------------*/

[].forEach.call(document.querySelectorAll('input'), function(elem,i) {
    elem.addEventListener('change', toSessionStorage, false);

});

[].forEach.call(document.querySelectorAll('select'), function(elem,i) {
    elem.addEventListener('change', function(){
        sessionStorage.setItem(elem.id,elem.value);
    }, false);

});
  /*


        [].forEach.call(document.querySelectorAll('input'), function(elem,i){
        sessionStorage.setItem(elem.name,elem.value)
    });

    [].forEach.call(document.querySelectorAll('input[type="radio"]'), function(elem,i){
        if(elem.checked){
            sessionStorage.setItem(elem.id,elem.value)
        }else{
            sessionStorage.setItem(elem.id,'')
        }
    });

    [].forEach.call(document.getElementsByName('oooStatute'), function(elem,i){
        if(elem.checked){

            sessionStorage.setItem(elem.name,elem.value)
        }
    });*/






document.getElementById('shUl').addEventListener('click',function(e){
    var changeUrFiz=document.querySelectorAll('#shareholderContent p.change');
    var changeNaUrValues =["Країна резиденства:","Повне найменування засновника ТОВ - юридичної особи","Місцезнаходження:","Код ЄДРПОУ:"];

    for(var i=0;i<changeUrFiz.length;i++) {
        changeUrFiz[i].innerText = changeNaUrValues[i];
    }

},false);

document.getElementById('shFl').addEventListener('click',function(e){
    var changeUrFiz=document.querySelectorAll('#shareholderContent p.change');
    var changeNaFizValues =["Країна громадянства:","Призвище ім'я по батькові засновника ТОВ - фізичної особи","Місце проживання:","Податковий номер:"];

    for(var j=0;j<changeUrFiz.length;j++) {
        changeUrFiz[j].innerText = changeNaFizValues[j];
    }

},false);

/*---------------------------добавление полей названия-----------------------------------*/
    var nameCount=0;
    document.getElementById('createOooName').addEventListener('click', createName, false);

    function createName(){
    var nameUkr=document.getElementById('oooUkrName');
    var newName=nameUkr.cloneNode(true);
    nameCount++;
    newName.id='oooOtherName'+nameCount;

    [].forEach.call(newName.querySelectorAll('input'), function (el, i) {
        el.value = '';
        el.name = nameUkr.querySelectorAll('input')[i].name + nameCount;
    });
    [].forEach.call(newName.querySelectorAll('.changeOpf'), function (el, i) {
        el.id = nameUkr.querySelectorAll('.changeOpf')[i].id + nameCount;
    });
    [].forEach.call(newName.querySelectorAll('.changeOpfShort'), function (el, i) {
        el.id = nameUkr.querySelectorAll('.changeOpfShort')[i].id + nameCount;
    });
    newName.firstElementChild.innerHTML='<input type="text" class="oooNameLangS" name="oooNameLangS'+nameCount+'" id="oooNameLangS'+nameCount+'" list="oooNLS'+nameCount+'" placeholder="Оберіть мову" size="12";><datalist id="oooNLS'+nameCount+'"><option>Англійська</option><option>Російська</option></datalist>';
    //newName.querySelector('.oooNameLangS').setAttribute('list', 'oooNameLangS'+nameCount);
    //newName.querySelector('datalist').id='oooNameLangS'+nameCount;
    document.getElementById('oooName').insertAdjacentElement('beforeEnd', newName);
    sessionStorage.setItem('nameCount', nameCount);


    document.getElementById('oooNameLangS'+nameCount).addEventListener('input', function(e) {
        var el= e.target;
        var opf = document.getElementById('opf'+el.id.slice(-1));
        var opfShort = document.getElementById('opfShort'+el.id.slice(-1));

        if (el.value == 'Англійська') {
            opf.innerText='LIMITED LIABILITY COMPANY';
            sessionStorage.setItem('opf'+el.id.slice(-1),'LIMITED LIABILITY COMPANY');
            opfShort.innerText='LLC';
            sessionStorage.setItem('opfShort'+el.id.slice(-1),'LLC');
        } else if (el.value == 'Російська') {
            opf.innerText='ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ';
            sessionStorage.setItem('opf'+el.id.slice(-1),'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ');
            opfShort.innerText='ООО';
            sessionStorage.setItem('opfShort'+el.id.slice(-1),'ООО');
        } else {
            opf.innerHTML='<input name="opfOter'+nameCount+'" id="oooOfp'+nameCount+'" size="40">';
            opf.firstElementChild.setAttribute('placeholder','організаційна форма '+el.value.substr(0,el.value.length-1)+'ою мовою');
            //opfShort.innerHTML='<input name="opfOter'+nameCount+'" id="oooOfp'+nameCount+'" size="40">';
            //opfShort.firstElementChild.setAttribute('placeholder','організаційна форма '+el.value.substr(0,el.value.length-1)+'ою мовою');
            opfShort.className='none';
        }
    },false);

/*---запись новых полей раздела названия в сторадж---*/

        [].forEach.call(newName.querySelectorAll('input'), function(elem,i) {
        elem.addEventListener('change', toSessionStorage, false);
    });

        [].forEach.call(document.querySelectorAll('input'), function(elem,i) {
            var store = sessionStorage.getItem(elem.name);
            if(store) {
                elem.value=store;
            }else if(elem.checked){
                sessionStorage.setItem(elem.id,elem.value)
            }
        });

}

/*---------------------------удаление полей названия--------------------------------*/
document.getElementById('removeOooName').addEventListener('click',function(){
    var s = document.getElementById('oooName').children;
    console.log(s);
    if (s.length>1) {
        document.getElementById('oooName').lastElementChild.remove();
        nameCount--;
    }
    sessionStorage.setItem('nameCount', nameCount);
}, false);


/*---------------------------добавление сокращенного названия-----------------------------------*/
/*
document.getElementsByName('nameFull')[0].addEventListener('keypress',function(){
    document.getElementById('nameShort').value=document.getElementsByName('nameFull')[0].value;
}, false);

document.getElementsByName('opf')[0].addEventListener('change',function(){
    if(document.getElementsByName('opf')[0].value=='Товариство з обмеженою відповідальністю'){
        document.getElementById('opfShort').innerText='ТОВ';
    }else{
        document.getElementById('opfShort').innerText='ПП  ';
    }
}, false);
*/

/*-------------------------выбор Киев/Область/Крым для ООО----------------------*/
/*
    document.getElementById('oooKiev').addEventListener('change', function (e) {
        if (e.target.checked = true) {
            document.getElementById('oooOblastName').value = '';
            document.getElementById('oooOblastName').disabled = true;
        } else if (e.target.checked = false){
            document.getElementById('oooOblastName').disabled = false;
        }
        /*

    }, false);
*/

/*-------------------------выбор типа населенного пункта для ООО----------------------*/
[].forEach.call(document.getElementsByClassName('oooMistoType'), function(elem,i){
    elem.addEventListener('input',function(){


        if(elem.selectedIndex==0){
            sessionStorage.setItem(elem.name,'місто');
            sessionStorage.setItem('oooMisto',"✔");
            sessionStorage.setItem('oooSMT','');
            sessionStorage.setItem('oooSeli','');
            sessionStorage.setItem('oooSel','');
        }else if(elem.selectedIndex==1){
            sessionStorage.setItem(elem.name,'селище міського типу');
            sessionStorage.setItem('oooMisto',"");
            sessionStorage.setItem('oooSMT','✔');
            sessionStorage.setItem('oooSeli','');
            sessionStorage.setItem('oooSel','');
        }else if(elem.selectedIndex==2){
            sessionStorage.setItem(elem.name,'селище');
            sessionStorage.setItem('oooMisto',"");
            sessionStorage.setItem('oooSMT','');
            sessionStorage.setItem('oooSeli','✔');
            sessionStorage.setItem('oooSel','');
        }else if(elem.selectedIndex==3){
            sessionStorage.setItem(elem.name,'село');
            sessionStorage.setItem('oooMisto',"");
            sessionStorage.setItem('oooSMT','');
            sessionStorage.setItem('oooSeli','');
            sessionStorage.setItem('oooSel','✔');
        }
    },false)


});

/*-------------------------выбор типа населенного пункта для первого учредителя----------------------*/
[].forEach.call(document.getElementsByClassName('shareholderMistoType'), function(elem,i){
    elem.addEventListener('input',function(){


        if(elem.selectedIndex==0){
            sessionStorage.setItem(elem.name,'місто');
            sessionStorage.setItem('shareholderMisto',"✔");
            sessionStorage.setItem('shareholderSMT','');
            sessionStorage.setItem('shareholderSeli','');
            sessionStorage.setItem('shareholderSel','');
        }else if(elem.selectedIndex==1){
            sessionStorage.setItem(elem.name,'селище міського типу');
            sessionStorage.setItem('shareholderMisto',"");
            sessionStorage.setItem('shareholderSMT','✔');
            sessionStorage.setItem('shareholderSeli','');
            sessionStorage.setItem('shareholderSel','');
        }else if(elem.selectedIndex==2){
            sessionStorage.setItem(elem.name,'селище');
            sessionStorage.setItem('shareholderMisto',"");
            sessionStorage.setItem('shareholderSMT','');
            sessionStorage.setItem('shareholderSeli','✔');
            sessionStorage.setItem('shareholderSel','');
        }else if(elem.selectedIndex==3){
            sessionStorage.setItem(elem.name,'село');
            sessionStorage.setItem('shareholderMisto',"");
            sessionStorage.setItem('shareholderSMT','');
            sessionStorage.setItem('shareholderSeli','');
            sessionStorage.setItem('shareholderSel','✔');
        }
    },false)


});


/*---------------------------добавление полей учредителей--------------------------------*/

var shareholderCount=0;

document.getElementById('createShareholder').addEventListener('click',createShareholder, false);

function createShareholder() {
    var shareholder = document.getElementById('shareholder').firstElementChild;
    var shareholderNext = shareholder.cloneNode(true);
    shareholderNext.className='';
    shareholderCount++;

/*---добавление  name+1, id+1 и данных из стораджа к новым элементам---*/
    [].forEach.call(shareholderNext.querySelectorAll('*:not(.inline)'), function (el, i) {
        el.value = '';
        el.name = shareholder.querySelectorAll('*:not(.inline)')[i].name + shareholderCount;
        el.id = shareholder.querySelectorAll('*:not(.inline)')[i].id + shareholderCount;
        var store = sessionStorage.getItem(el.name);
        if(store) {
            el.value=store;
        }
    });

    [].forEach.call(shareholderNext.querySelectorAll('input[type="radio"]'),function(el,i){
        el.value = shareholder.querySelectorAll('input[type="radio"]')[i].value;

    });

    [].forEach.call(shareholderNext.querySelectorAll('label'), function (el, i) {
        el.id = shareholder.querySelectorAll('label')[i].id + shareholderCount;
        el.removeAttribute('for');
        el.setAttribute('for', shareholder.querySelectorAll('label')[i].getAttribute('for')+ shareholderCount);
    });

    shareholder.insertAdjacentElement('afterEnd', shareholderNext);
    sessionStorage.setItem('shareholderCount', shareholderCount);

/*---запись новых полей раздела учредителей в сторадж---*/

    [].forEach.call(shareholderNext.querySelectorAll('input'), function(elem,i) {
        elem.addEventListener('change', toSessionStorage, false);
    });

    [].forEach.call(shareholderNext.getElementsByClassName('shareholderMistoType'), function(elem,i){
        elem.addEventListener('input',function(){


            if(elem.selectedIndex==0){
                sessionStorage.setItem(elem.name,'місто');
                sessionStorage.setItem('shareholderMisto'+(i+1),"✔");
                sessionStorage.setItem('shareholderSMT'+(i+1),'');
                sessionStorage.setItem('shareholderSeli'+(i+1),'');
                sessionStorage.setItem('shareholderSel'+(i+1),'');
            }else if(elem.selectedIndex==1){
                sessionStorage.setItem(elem.name,'селище міського типу');
                sessionStorage.setItem('shareholderMisto'+(i+1),"");
                sessionStorage.setItem('shareholderSMT'+(i+1),'✔');
                sessionStorage.setItem('shareholderSeli'+(i+1),'');
                sessionStorage.setItem('shareholderSel'+(i+1),'');
            }else if(elem.selectedIndex==2){
                sessionStorage.setItem(elem.name,'селище');
                sessionStorage.setItem('shareholderMisto'+(i+1),"");
                sessionStorage.setItem('shareholderSMT'+(i+1),'');
                sessionStorage.setItem('shareholderSeli'+(i+1),'✔');
                sessionStorage.setItem('shareholderSel'+(i+1),'');
            }else if(elem.selectedIndex==3){
                sessionStorage.setItem(elem.name,'село');
                sessionStorage.setItem('shareholderMisto'+(i+1),"");
                sessionStorage.setItem('shareholderSMT'+(i+1),'');
                sessionStorage.setItem('shareholderSeli'+(i+1),'');
                sessionStorage.setItem('shareholderSel'+(i+1),'✔');
            }
        },false)


    });

    [].forEach.call(shareholderNext.querySelectorAll('input[type="radio"]'), function(elem,i) {

        var el=sessionStorage.getItem(elem.id);
        if(el=='✔'){
            elem.setAttribute('checked','checked');
        }else{
            elem.removeAttribute('checked');
        }

        
    });

    /*---------------------------изменение полей формы при выборе Физ/Юр.лицо - учредитель-----------------------------------*/
    var changeUrFiz=document.querySelectorAll('#shareholderContent'+shareholderCount+' p.change');

    document.getElementById('shUl'+ shareholderCount).addEventListener('click',function(e){

        var changeNaUrValues =["Країна резиденства:","Повне найменування засновника ТОВ - юридичної особи","Місцезнаходження:","Код ЄДРПОУ:"];

        for(var i=0;i<changeUrFiz.length;i++) {
            changeUrFiz[i].innerText = changeNaUrValues[i];
        }

    },false);

    document.getElementById('shFl'+ shareholderCount).addEventListener('click',function(e){

        var changeNaFizValues =["Країна громадянства:","Призвище ім'я по батькові засновника ТОВ - фізичної особи","Місце проживання:","Податковий номер:"];

        for(var j=0;j<changeUrFiz.length;j++) {
            changeUrFiz[j].innerText = changeNaFizValues[j];
        }

    },false);

    /*---взаимодействие долей---*/
    /*
    [].forEach.call(document.getElementsByName('shareholderShare' + shareholderCount), function (elem, i) {
        elem.addEventListener('change', function () {
            var shareM=document.getElementsByName('shareholderShareMoney' + shareholderCount)[i];
            shareM.value = (document.getElementsByName('oooCapital')[0].value) * (document.getElementsByName('shareholderShare' + shareholderCount)[i].value) / 100;
            sessionStorage.setItem(shareM,shareM.value);
            sessionStorage.setItem(('shareholderShare' + shareholderCount)[i],document.getElementsByName('shareholderShare' + shareholderCount)[i].value);
        }, false);


    });

    [].forEach.call(document.getElementsByName('shareholderShareMoney' + shareholderCount), function (elem, i) {
        elem.addEventListener('change', function () {
            var share =document.getElementsByName('shareholderShare' + shareholderCount)[i];
            share.value =(document.getElementsByName('shareholderShareMoney' + shareholderCount)[i].value) / (document.getElementsByName('oooCapital')[0].value) * 100;
            sessionStorage.setItem(share,share.value);
            sessionStorage.setItem(('shareholderShareMoney' + shareholderCount)[i],document.getElementsByName('shareholderShareMoney' + shareholderCount)[i].value);
        }, false);
    });

    */
}

/*---------------------------удаление полей учредителей--------------------------------*/
    document.getElementById('removeShareholder').addEventListener('click',function(){
        var s = document.getElementById('shareholder').children;
    if (s.length>1) {
        document.getElementById('shareholder').lastElementChild.remove();
        shareholderCount--;
        }
        sessionStorage.setItem('shareholderCount', shareholderCount);
    }, false);

/*---------------------------автозаполнение полей долей учредителей--------------------------------*/
/*
document.getElementsByName('shareholderShareMoney')[0].addEventListener('blur',function(){
    document.getElementsByName('shareholderShare')[0].value=(document.getElementsByName('shareholderShareMoney')[0].value)/(document.getElementsByName('oooCapital')[0].value)*100;
}, false);

document.getElementsByName('shareholderShare')[0].addEventListener('blur',function(){
    document.getElementsByName('shareholderShareMoney')[0].value=(document.getElementsByName('oooCapital')[0].value)*(document.getElementsByName('shareholderShare')[0].value)/100;
}, false);
*/

/*---------------------------поля раздела директора (доделать!!!!!!!!!!!!!!)----------------------------------------*/
document.getElementById('noDirCode').addEventListener('click',function(){
    if(this.checked) {
        document.getElementById('dirPass').classList.remove('none');
        sessionStorage.setItem('noDirCode', 1);
    }else {
        document.getElementById('dirPass').classList.add('none');
        sessionStorage.setItem('noDirCode', 0);
    }
},false);

/*---------------------------добавление/удаление полей КВЕД--------------------------------*/

var kvedCount=0;

document.getElementById('createKved').addEventListener('click',createKved, false);

function createKved(){
    // создать копию узла
    var kved = document.getElementById('kvedy');
    var kvedNext=kved.firstElementChild.cloneNode(true);

    kvedCount++;

    [].forEach.call(kvedNext.querySelectorAll('input'), function(el,i){
        el.value='';
        el.name=(kved.querySelectorAll('input')[i].name).substr(0,el.name.length-1)+(kvedCount+1);
    });

    [].forEach.call(kvedNext.querySelectorAll('p'), function(el,i){
        el.innerText='КВЕД '+(kvedCount+1);
    });

    kved.insertAdjacentElement('beforeend', kvedNext);

    [].forEach.call(kvedNext.querySelectorAll('input'), function(elem,i) {
        elem.addEventListener('input', toSessionStorage, false);
    });

    sessionStorage.setItem('kvedCount', kvedCount);

};

document.getElementById('removeKved').addEventListener('click',function(){
    var kvedy = document.getElementById('kvedy').children;

    if (kvedy.length>1) {
        document.getElementById('kvedy').lastElementChild.remove();
        kvedCount--;
        sessionStorage.setItem('kvedCount', kvedCount);
    }


}, false);

/*-----------------------сохранение данных полей в sessionstorage---------------------------------*/



    function toSessionStorage (e){
        var elem = e.target;
        var setByName = function(item){sessionStorage.setItem(item.name,item.value)};
        var setById = function(item){sessionStorage.setItem(item.id,item.value)};
        var type=elem.getAttribute('type');

        if(type=='radio'){
            if(elem.name=='oooStatute'){
                [].forEach.call(document.getElementsByName('oooStatute'), function(el,i){
                    if(el.checked){
                        setByName(el)
                    }
                });
            }else{
                [].forEach.call(document.getElementsByName(elem.name), function(el,i) {
                    if (el.checked) {
                        setById(el)
                    } else {
                        sessionStorage.setItem(el.id, '')
                    }
                });
            }
        } else {
            setByName(elem);
        }

        sessionStorage.setItem('shareholderShare',document.getElementsByName('shareholderShare')[0].value);

        sessionStorage.setItem('upravVish', 'загальні збори');

        sessionStorage.setItem('opf','ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ');

        sessionStorage.setItem('pagesF1',shareholderCount+5);


        /*-------------------------убираем кавычки из названия (доделать!!!!)-----------------------------*/
/*
        nameFcor (document.getElementsByName('oooNameFull')[0].value);
        function nameFcor (nameF) {
            console.log(nameF);
            if(nameF.indexOf('"')>0){
                var nameFnew=nameF.replace(/"/g,'');
                }else if(nameF.indexOf('"')>0){
                nameFnew=nameF.replace(/"/g,'');
            }
            sessionStorage.setItem('oooNameFull', nameFnew);
        }

        nameScor (document.getElementsByName('oooNameShort')[0].value);
        function nameScor (nameS) {
            if((nameS.indexOf('"')>0)||(nameS.indexOf('"')>0)){
                sessionStorage.setItem('oooNameShort', nameS );
            }else{
                sessionStorage.setItem('oooNameShort', '"' + nameS + '"');
            }
        }
*/
                /*


    sessionStorage.setItem('oooCapital',document.getElementsByName('oooCapital')[0].value);





    [].forEach.call(document.querySelectorAll('input[type="date"]'), function(elem,i){
        sessionStorage.setItem(elem.name,elem.value.substr(8,2)+'/'+elem.value.substr(5,2)+'/'+elem.value.substr(0,4))
    });

    sessionStorage.setItem('kvedy1', setKvedy());

    function setKvedy (){
        var kvedyValues='';
    [].forEach.call(document.querySelectorAll('.kvedInput'), function(elem,i){
        kvedyValues+=(i+1)+elem.value;
    });
        return kvedyValues;
    }


    */
    }
document.getElementById('createDocs').addEventListener('click', function(){
        location.href = 'new.html';
}
, false);


/*---------------------------работа закладок------------------------------------*/
/*
[].forEach.call(document.querySelectorAll('label.zakladka'), function(elem,i){

    elem.addEventListener('click', function(){
        document.getElementById(elem.getAttribute('for')).checked = true;
        [].forEach.call(elem.parentNode.querySelectorAll('.content input'), function(inpt){
            inpt.value='';
        });


    },false);
});
*/
/*---------------------------добавление сокращенного названия-----------------------------------*/
/*
 document.getElementsByName('nameFull')[0].addEventListener('keypress',function(){
 document.getElementById('nameShort').value=document.getElementsByName('nameFull')[0].value;
 }, false);

 document.getElementsByName('opf')[0].addEventListener('change',function(){
 if(document.getElementsByName('opf')[0].value=='Товариство з обмеженою відповідальністю'){
 document.getElementById('opfShort').innerText='ТОВ';
 }else{
 document.getElementById('opfShort').innerText='ПП  ';
 }
 }, false);
 */




/*-------------------------функция для автозаполнения учредителя-юрика--------------------------*/

function autoUr (){

    var ur = document.getElementById('urInfo').value;
    var shareholderFio=ur.substring(ur.indexOf('Організаційно-правова')+28, ur.indexOf('Назва юридичної особи'))+' '+ur.substring(ur.indexOf('Назва юридичної особи')+22, ur.indexOf('Ідентифікаційний'));
    sessionStorage.setItem('shareholderFio',shareholderFio);
    document.getElementById('shareholderFio').setAttribute('value',shareholderFio);

    var shareholderId = ur.substring(ur.indexOf('Ідентифікаційний код ')+37, ur.indexOf('Центральний '));
    sessionStorage.setItem('shareholderId',shareholderId);
    document.getElementById('shareholderId').setAttribute('value',parseInt(shareholderId),10);

    var shareholderAddress = ur.substring(ur.indexOf('Місцезнаходження')+33, ur.indexOf('Перелік засновників'));

    var shareholderIndex = shareholderAddress.match(/\d{5}/);
    sessionStorage.setItem('shareholderIndex',shareholderIndex);
    document.getElementById('shareholderIndex').setAttribute('value',parseInt(shareholderIndex),10);

    if (shareholderAddress.indexOf('обл.')>=0){
        var oblArr = ["", "Вінницька", "Волинська", "Дніпропетровська", "Донецька", "Житомирська", "Закарпатська", "Запорізька", "Івано-Франківська", "Київська", "Кіровоградська", "Луганська", "Львівська",
            "Миколаївська", "Одеська", "Полтавська", "Рівненська", "Сумська", "Тернопільська", "Харківська", "Херсонська", "Хмельницька", "Черкаська", "Чернівецька", "Чернігівська"];
        var shareholderOblastName = shareholderAddress.match(/[a-zа-яіїє]+(?=\s+обл)/i);
        sessionStorage.setItem('shareholderOblastName',shareholderOblastName);
        document.getElementById('shareholderOblastName').options[oblArr.indexOf(shareholderOblastName[0])].selected=true;
    }
    if (shareholderAddress.indexOf('район')>=0){
        var shareholderRayonName = shareholderAddress.match(/[a-zа-яіїє]+(?=\s+район)/i);
        sessionStorage.setItem('shareholderRayonName',shareholderRayonName);
        document.getElementById('shareholderRayonName').setAttribute('value',shareholderRayonName);
    }

    var mistoArr = ["", "місто", "селище міського типу", "селище", "село"];
    var shareholderMistoType = shareholderAddress.match(/місто|селище\sміського\sтипу|селище|село/i);
    sessionStorage.setItem('shareholderMistoType',shareholderMistoType);
    document.getElementById('shareholderMistoType').options[mistoArr.indexOf(shareholderMistoType[0])].selected=true;

    var shareholderMistoName = shareholderAddress.substring(shareholderAddress.indexOf(shareholderMistoType)+shareholderMistoType[0].length+1, shareholderAddress.indexOf(',',shareholderAddress.indexOf(shareholderMistoType)));
    sessionStorage.setItem('shareholderMistoName',shareholderMistoName);
    document.getElementById('shareholderMistoName').setAttribute('value',shareholderMistoName);

    var shareholderStreetType = shareholderAddress.substring(shareholderAddress.indexOf(shareholderMistoName)+shareholderMistoName.length+2, shareholderAddress.indexOf(' ',shareholderAddress.indexOf(shareholderMistoName)+shareholderMistoName.length+2));
    sessionStorage.setItem('shareholderStreetType',shareholderStreetType);
    document.getElementById('shareholderStreetType').setAttribute('value',shareholderStreetType);

    var shareholderStreetName = shareholderAddress.substring(shareholderAddress.indexOf(shareholderStreetType)+shareholderStreetType.length+1, shareholderAddress.indexOf(',',shareholderAddress.indexOf(shareholderStreetType)+shareholderStreetType.length+1));
    sessionStorage.setItem('shareholderStreetName',shareholderStreetName);
    document.getElementById('shareholderStreetName').setAttribute('value',shareholderStreetName);

    if (shareholderAddress.indexOf('будинок')>=0){
        var shareholderHouse = shareholderAddress.substring(shareholderAddress.indexOf('будинок')+8, shareholderAddress.indexOf(' ',shareholderAddress.indexOf('будинок')+8));
    }else{
        shareholderHouse = shareholderAddress.substring(shareholderAddress.indexOf('shareholderStreetName')+shareholderStreetName.length+2, shareholderAddress.indexOf(',',shareholderAddress.indexOf('будинок')+shareholderStreetName.length+2));
    }


    sessionStorage.setItem('shareholderHouse',shareholderHouse);
    document.getElementById('shareholderHouse').setAttribute('value',parseInt(shareholderHouse));
}

//26600, Кіровоградська обл., Вільшанський район, селище міського типу Вільшанка, ВУЛИЦЯ ГРАНІТНА, будинок 3

document.getElementById('autoUr').addEventListener('click',autoUr,false);


























