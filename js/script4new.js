/*-------------------добавление по количеству учредителей-----------------------------------*/
var shareholderCount = sessionStorage.getItem('shareholderCount');

if(shareholderCount>0){

       var dov = document.getElementById('dov');

    for(var j=1;j<=shareholderCount;j++) {
            var newDov=dov.cloneNode(true);
            [].forEach.call(newDov.querySelectorAll('span'), function (el, i) {
            el.className = dov.querySelectorAll('span')[i].className + j;
        });

        [].forEach.call(newDov.querySelectorAll('#dovShareholder div'),function(elem,i){
            elem.className = dov.querySelectorAll('#dovShareholder div')[i].className + j;
        });

        document.body.insertBefore(newDov, document.getElementById('prot'));
    }

    var protShareholders = document.getElementById('protShareholders');

    for(var j=1;j<=shareholderCount;j++) {
        var newProtShareholders=protShareholders.cloneNode(true);
        [].forEach.call(newProtShareholders.querySelectorAll('span'), function (el, i) {
            el.className = protShareholders.querySelectorAll('span')[i].className + j;
        });

        [].forEach.call(newProtShareholders.querySelectorAll('#protShareholders div'),function(elem,i){
            elem.className = protShareholders.querySelectorAll('#protShareholders div')[i].className + j;
        });

        document.getElementById('protShareholders').insertAdjacentHTML('afterend',newProtShareholders.outerHTML);
    }

    var protShareholderShare = document.getElementById('protShareholderShares');

    for(var j=1;j<=shareholderCount;j++) {
        var newProtShareholderShare=protShareholderShare.cloneNode(true);
        [].forEach.call(newProtShareholderShare.querySelectorAll('span'), function (el, i) {
            el.className = protShareholderShare.querySelectorAll('span')[i].className + j;
        });

        document.getElementById('protShareholderShares').appendChild(newProtShareholderShare);
    }

    var protShareholderSign = document.getElementById('protShareholderSign');

    for(var j=1;j<=shareholderCount;j++) {
        var newProtShareholderSign=protShareholderSign.cloneNode(true);
        [].forEach.call(newProtShareholderSign.querySelectorAll('span'), function (el, i) {
            el.className = protShareholderSign.querySelectorAll('span')[i].className + j;
        });

        document.getElementById('protShareholderSign').appendChild(newProtShareholderSign);
    }

    var statShareholders = document.getElementById('statShareholders');

    for(var j=1;j<=shareholderCount;j++) {
        var newStatShareholders=statShareholders.cloneNode(true);
        [].forEach.call(newStatShareholders.querySelectorAll('span'), function (el, i) {
            el.className = statShareholders.querySelectorAll('span')[i].className + j;
        });

        [].forEach.call(newStatShareholders.querySelectorAll('#statShareholders div'),function(elem,i){
            elem.className = statShareholders.querySelectorAll('#statShareholders div')[i].className + j;
        });

        document.getElementById('statShareholders').insertAdjacentHTML('afterend',newStatShareholders.outerHTML);

    }


    var statShareholderShare = document.getElementById('statShareholderShares');

    for(var j=1;j<=shareholderCount;j++) {
        var newStatShareholderShare=statShareholderShare.cloneNode(true);
        [].forEach.call(newStatShareholderShare.querySelectorAll('span'), function (el, i) {
            el.className = statShareholderShare.querySelectorAll('span')[i].className + j;
        });

        document.getElementById('statShareholderShares').appendChild(newStatShareholderShare);
    }


    var statShareholderSign = document.getElementById('statShareholderSign');

    for(var j=1;j<=shareholderCount;j++) {
        var newStatShareholderSign=statShareholderSign.cloneNode(true);
        [].forEach.call(newStatShareholderSign.querySelectorAll('span'), function (el, i) {
            el.className = statShareholderSign.querySelectorAll('span')[i].className + j;
        });

        document.getElementById('statShareholderSign').appendChild(newStatShareholderSign);
    }


    var protNameFull = document.getElementsByClassName('protNameFull');
    var nameCount = sessionStorage.getItem('nameCount');
    [].forEach.call(protNameFull,function(e,i) {
        for (var j = 1; j <= nameCount; j++) {
            var newProtNameFull = document.createElement('li');

            newProtNameFull.innerHTML = (sessionStorage.getItem('oooNameLangS' + j)).substr(0, sessionStorage.getItem('oooNameLangS' + j).length - 1) + 'ою мовою: ' + sessionStorage.getItem('opf' + j) + ' <b>"' + sessionStorage.getItem('oooNameFull' + j) + '"</b>.';

            document.getElementsByClassName('protNameFull')[i].appendChild(newProtNameFull);
        }
    });

    var protNameShort = document.getElementsByClassName('protNameShort');
    var nameCount = sessionStorage.getItem('nameCount');
    [].forEach.call(protNameShort,function(e,i) {
        for (var j = 1; j <= nameCount; j++) {
            var newProtNameShort = document.createElement('li');

            newProtNameShort.innerHTML = (sessionStorage.getItem('oooNameLangS' + j)).substr(0, sessionStorage.getItem('oooNameLangS' + j).length - 1) + 'ою мовою: ' + sessionStorage.getItem('opfShort' + j) + ' <b>"' + sessionStorage.getItem('oooNameShort' + j) + '"</b>.';

            document.getElementsByClassName('protNameShort')[i].appendChild(newProtNameShort);

        }
    });

    var shF_sfU = sessionStorage.getItem('shF'+shareholderCount);

    if(shF_sfU=='✔'){
        [].forEach.call(document.querySelectorAll('.shareholderUr'+shareholderCount),function(elem,i){
            elem.remove();
        });

    }else {
        [].forEach.call(document.querySelectorAll('.shareholderFiz'+shareholderCount),function(elem,i){
            elem.remove();
        });
    }

/*
    var protShareholder = document.getElementById();
    var protShareholderShare = document.getElementById();
    var protShareholderSign = document.getElementById();
    var statShareholder = document.getElementById();
    var statShareholderShare = document.getElementById();
    var statShareholderSign = document.getElementById();

    ['protShareholder', 'protShareholderShares', 'protShareholderSign', 'statShareholder', 'statShareholderShares', 'statShareholderSign'].forEach(function allSpanInElement (element){
        var curEl = document.getElementById(element.id);

        for(var j=1;j<=shareholderCount;j++) {
            var newEl = curEl.cloneNode(true);
            [].forEach.call(newEl.querySelectorAll('span'), function (el, i) {
                el.className = curEl.querySelectorAll('span')[i].className + j;
            });

            document.getElementById(curEl.id).appendChild(newEl);
        }
    });
    //allSpanInElement(document.getElementById('statShareholderSign'));
*/
    document.getElementById('pris').innerText='ПРИСУТНІ:';
    document.getElementById('tovs').innerText='1.7. Учасниками Товариства є:';
    document.getElementById('pidpys').innerText='ПІДПИСИ УЧАСНИКІВ:';
}

/*--------------изменение текста в зависимости от юрик или физик - учредитель------------------*/
var shF_sfU = sessionStorage.getItem('shF');
console.log(document.getElementsByClassName('shareholderFiz'));
if(shF_sfU=='✔'){
    [].forEach.call(document.querySelectorAll('.shareholderUr'),function(elem,i){
        elem.remove();
    });

}else {
    [].forEach.call(document.querySelectorAll('.shareholderFiz'),function(elem,i){
        elem.remove();
    });
}


/*-------------------------------заполнение текстовых документов----------------------------*/

//var dateElem=sessionStorage.getItem(elem.className).substr(8, 2) + '/' + elem.value.substr(5, 2) + '/' + elem.value.substr(0, 4);

[].forEach.call(document.querySelectorAll('span'), function(elem,i){
    elem.innerText =sessionStorage.getItem(elem.className);
    if(elem.className.indexOf('Date')>=0){
        var t =sessionStorage.getItem(elem.className);
        var t1 = t.substr(8, 2) + '/' + t.substr(5, 2) + '/' + t.substr(0, 4);
        elem.innerText = t1.replace(/\//g,'.');
    }
    if(elem.className.indexOf('Text')>=0){
        elem.innerText =digtotext(sessionStorage.getItem(elem.className.replace('Text', '')));
    }
    if(elem.className.indexOf('oooDR')>=0){
        elem.innerText = datetotext(sessionStorage.getItem('oooDate'));
    }

/*
    if(elem.className.indexOf('MistoType')>=0){
        var mistoType=['oooMisto','oooSMT','oooSeli','oooSel'];
        var mistoTypeL=['місто', 'селище міського типу', 'селище', 'село'];
        var mistoTypeS=['м.', 'смт.', 'сел.', 'с.'];
        for (var z=0;z<mistoType.length;z++){
            if (sessionStorage.getItem(mistoType[z])=='✔'){
                if(elem.className.indexOf('MistoTypeL')>=0){
                    elem.innerText=mistoTypeL[z];
                }else if(elem.className.indexOf('MistoTypeS')>=0){
                    elem.innerText=mistoTypeS[z];
                }
            }
        }
    }*/
});

/*---------------------добавление в форму 1 страниц с учредителями------------------*/
(function(){
var number=sessionStorage.getItem('shareholderCount');
if(number>0) {

    var page4 = document.getElementById('formP4');

    var tableClass =1;

    for(var i=0;i<number;i++) {
        var newPage4 = page4.cloneNode(true);

            [].forEach.call(newPage4.querySelectorAll('table'), function (el,ind) {
                el.id = page4.querySelectorAll('table')[ind].id + tableClass;
            });

        document.getElementById('form').insertBefore(newPage4, document.getElementById('formP5'));
        tableClass++;
        }
    }
}
)();

/*-------------------------------заполнение формы 1----------------------------*/
[].forEach.call(document.querySelectorAll('table .tiny'), function(elem,i){
    var stay=elem.innerHTML;
	if(elem.id=='directorFirstName'){
        var item=sessionStorage.getItem('directorFirstName')+' '+sessionStorage.getItem('directorOtch');
    }else if(elem.id=='oooStreet'){
        item=sessionStorage.getItem('oooStreetType')+' '+sessionStorage.getItem('oooStreetName');
    }else if(elem.id=='shareholderStreet') {
        item = sessionStorage.getItem('shareholderStreetType') + ' ' + sessionStorage.getItem('shareholderStreetName');
    }else if(elem.id=='oooNameFull'){
        item='"'+sessionStorage.getItem('oooNameFull')+'"';
    }else if(elem.id=='oooNameShort'){
        item='ТОВ "'+sessionStorage.getItem('oooNameShort')+'"';
    }else{
        item=sessionStorage.getItem(elem.id);
    }

    if(item){var itemUp=item.toUpperCase()};
    var num = elem.querySelectorAll('td').length;
    var str = '<tbody><tr>';
    for (var j = 1; j <= num; j++) {
        if(!itemUp) {itemUp=''};
        str += '<td>' + itemUp.substr(j - 1, 1) + '</td>';
        if (j % 35 == 0) {
            str += '</tr><tr>';
        }
    }
    str += '</tr></tbody>';
    if (!item){
        elem.innerHTML = stay;
    }else{
        elem.innerHTML = str;
    }

});

/*--------------------------заполнение поля улица учредителя в форме 1---------------------------*/
[].forEach.call(document.querySelectorAll('table.shareholderStreet:not(#shareholderStreet)'), function(elem,i) {

    var item = sessionStorage.getItem('shareholderStreetType' + (i+1)) + ' ' + sessionStorage.getItem('shareholderStreetName' + (i+1));
    var stay = elem.innerHTML;

    if (item) {
        var itemUp = item.toUpperCase()
    }
    ;
    var num = elem.querySelectorAll('td').length;
    var str = '<tbody><tr>';
    for (var j = 1; j <= num; j++) {
        if (!itemUp) {
            itemUp = ''
        }
        ;
        str += '<td>' + itemUp.substr(j - 1, 1) + '</td>';
        if (j % 35 == 0) {
            str += '</tr><tr>';
        }
    }
    str += '</tr></tbody>';
    if (!item) {
        elem.innerHTML = stay;
    } else {
        elem.innerHTML = str;
    }

});

/*----------------------------заполнение дат в форме1-----------------------------------*/
[].forEach.call(document.querySelectorAll('table.tiny'), function(elem,i){

    if((elem.id).indexOf('Date')>0){
        var stay = elem.innerHTML;
        var t =sessionStorage.getItem(elem.id);
        if(!t) {
            elem.innerHTML = stay;
        }else{
            if((elem.id).indexOf('DateB')>0){
                var item = t.substr(8, 2) + '/' + t.substr(5, 2) + '/' + t.substr(0, 4);
            }else {
                item = t.substr(8, 2) + '.' + t.substr(5, 2) + '.' + t.substr(0, 4);
            }

            var num = elem.querySelectorAll('td').length;
            var str = '<tbody><tr>';
            for (var j = 1; j <= num; j++) {
                if (!item) {
                    item = ''
                }
                ;
                str += '<td>' + item.substr(j - 1, 1) + '</td>';
                if (j % 35 == 0) {
                    str += '</tr><tr>';
                }
            }
            str += '</tr></tbody>';

            elem.innerHTML = str;
        }
    }
});


/*-----------------------------заполнение таблиц КВЕДов в форме1---------------------------------*/
if (sessionStorage.getItem('kvedCount')<=10){
    document.getElementById('kvedy1').innerHTML=kvedTable(document.getElementById('kvedy1'));
}

    function kvedTable (elem){
        var kvedCount=sessionStorage.getItem('kvedCount');
        var str = '<tbody><tr><td>№<br>з/п</td><td colspan="5">Код виду економічної<br>діяльності</td></tr>';
        var n =1;

            for (var j = 1; j <= 10; j++) {
                var item = n + sessionStorage.getItem('kved' + n);

                str+='<tr>';

                    for(var k=1;k<=6;k++) {
                        if (item){
                            str += '<td>' + item.substr(k - 1, 1) + '</td>';
                        } else {
                            str += '<td></td>'
                        }
                    }

                str+='</tr>';

                if(n<=kvedCount) {
                    n++;
                }else{
                    n=undefined;
                }
            }
        str += '</tbody>';
        return str;
    }




/*
[].forEach.call(document.querySelectorAll('table .kved'), function(elem,i){
    var stay=elem.innerHTML;
    var item=sessionStorage.getItem(elem.id);
    var num = elem.querySelectorAll('td').length-1;

    var str = '<tbody><tr><td>№<br>з/п</td><td colspan="5">Код виду економічної<br>діяльності</td></tr><tr>';
    for (var j = 1; j <= num; j++) {
        if(!item) break;
        if(j===55){
            str += '<td>' + item.substr(j - 1, 2) + '</td>';
        }
        if(j===55||j===56)continue;
        str += '<td>' + item.substr(j - 1, 1) + '</td>';
        if (j<55&&j % 6 == 0) {
            str += '</tr><tr>';
        }
    }
    str += '</tr></tbody>';
    if (!item){
        elem.innerHTML = stay;
    }else{
        elem.innerHTML = str;
    }

});
*/
[].forEach.call(document.querySelectorAll('table .capital'), function(elem,i){
    var stay=elem.innerHTML;
    var item=sessionStorage.getItem(elem.id);
    var num = elem.querySelectorAll('td').length-3;

    var str = '<tbody><tr>';
    for (var j = 1; j <= num; j++) {
        if(!item) break;
        if(j<=11-item.length){
            str += '<td></td>';
        }
        if(j<=11-item.length)continue;
        str += '<td>' + item.substr(item.length-12+j, 1) + '</td>';

    }
    str += '<td>,</td><td>0</td><td>0</td></td></tr></tbody>';
    if (!item){
        elem.innerHTML = stay;
    }else{
        elem.innerHTML = str;
    }

});

(function benef (){
    if(sessionStorage.getItem('shareholderCount')==0){
        document.getElementById('shareholderBenef').innerHTML = '<tbody><tr><td>&#10004</td></tr></tbody>';
    }else{
if(sessionStorage.getItem('shareholderShare')>=25){
    document.getElementById('shareholderBenef').innerHTML = '<tbody><tr><td>&#10004</td></tr></tbody>';
}else{
    document.getElementById('shareholderBenef').innerHTML = '<tbody><tr><td></td></tr></tbody>';
}
        for (var i=1;i<=sessionStorage.getItem('shareholderCount');i++){
            if (sessionStorage.getItem('shareholderShare'+i)>=25){
                document.getElementById('shareholderBenef'+i).innerHTML = '<tbody><tr><td>&#10004</td></tr></tbody>';
            }else{
                document.getElementById('shareholderBenef'+i).innerHTML = '<tbody><tr><td></td></tr></tbody>';
            }
        }
    }
})();




//formFill (oooNameFullT, sessionStorage.getItem('oooNameFull'));
/*
var nameShort =document.getElementsByClassName('nameShort');
for(var i=0;i<nameShort.length;i++){
    nameShort[i].innerText= sessionStorage.getItem('nameShort');
}
var addressIndex =document.getElementsByClassName('addressIndex');
for(var i=0;i<addressIndex.length;i++){
    addressIndex[i].innerText= sessionStorage.getItem('addressIndex');
}
var addressCity =document.getElementsByClassName('addressCity');
for(var i=0;i<addressCity.length;i++){
    addressCity[i].innerText= sessionStorage.getItem('addressCity');
}
var addressStreet =document.getElementsByClassName('addressStreet');
for(var i=0;i<addressStreet.length;i++){
    addressStreet[i].innerText= sessionStorage.getItem('addressStreet');
}
var addressHouse =document.getElementsByClassName('addressHouse');
for(var i=0;i<addressHouse.length;i++){
    addressHouse[i].innerText= sessionStorage.getItem('addressHouse');
}
var addressOffice =document.getElementsByClassName('addressOffice');
for(var i=0;i<addressOffice.length;i++){
    addressOffice[i].innerText= sessionStorage.getItem('addressOffice');
}
var shareholerFIO =document.getElementsByClassName('shareholerFIO');
for(var i=0;i<shareholerFIO.length;i++){
    shareholerFIO[i].innerText= sessionStorage.getItem('shareholerFIO');
}
var shareholerShare =document.getElementsByClassName('shareholerShare');
for(var i=0;i<shareholerShare.length;i++){
    shareholerShare[i].innerText= sessionStorage.getItem('shareholerShare');
}
var shareholerPass =document.getElementsByClassName('shareholerPass');
for(var i=0;i<shareholerPass.length;i++){
    shareholerPass[i].innerText= sessionStorage.getItem('shareholerPass');
}
var shareholerId =document.getElementsByClassName('shareholerId');
for(var i=0;i<shareholerId.length;i++){
    shareholerId[i].innerText= sessionStorage.getItem('shareholerId');
}
var directorFIO =document.getElementsByClassName('directorFIO');
for(var i=0;i<directorFIO.length;i++){
    directorFIO[i].innerText= sessionStorage.getItem('directorFIO');
}
var directorPass =document.getElementsByClassName('directorPass');
for(var i=0;i<directorPass.length;i++){
    directorPass[i].innerText= sessionStorage.getItem('directorPass');
}
var directorId =document.getElementsByClassName('directorId');
for(var i=0;i<directorId.length;i++){
    directorId[i].innerText= sessionStorage.getItem('directorId');
}
*/

function digtotext(dig){

    this.words = {
        m3:[["тисяча","тисячі","тисяч"], ["мільйон","мілйона","мільйонів"], ["мільярд", "мільярда", "мільярдів"]],
            m2:["сто",'двісті','триста','чотириста',"п'ятсот",'шістсот','сімсот','вісімсот',"дев'ятсот"],
        m1:['десять','двадцять','тридцять','сорок',"п'ятдесят",'шістдесят','сімдесят','вісімдесят',"дев'яносто"],
        m0:['один','два','три','чотири',"п'ять",'шість','сім','вісім',"дев'ять",'десять'],
        f0:['одна','дві'],
        l0:['дестять', 'одинадцять','дванадцять','тринадцять','чотирнадцять',"п'ятнадцять",'шістнадцять','сімнадцять','вісімнадцять',"дев'ятнадцять"]
};
    this.dim = function(dig, power, words){
        var result = '';
        var pow = Math.floor(dig/Math.pow(10, power)) % Math.pow(10,3);
        if(!pow) return result;
        var n2 =  Math.floor(pow/100);
        var n1 =  Math.floor(pow%Math.pow(10,2)/10);
        var n0 =  Math.floor(pow%10);
        var s1 = (n1 > 0)?' ':'';
        var s0 = (n0 > 0)?' ':'';
        var get_n = function(){
            switch(power){
                case 0:
                case 6:
                case 9:
                    result +=s0+words.m0[n0-1];
                    break;
                case 3:
                    if(n0 < 3){
                        result +=s0+words.f0[n0-1];
                    }else{
                        result +=s0+words.m0[n0-1];
                    }
                    break;
            }
        };
        if(n2 > 0){
            result += words.m2[n2-1];
        }
        if(n1 > 0){
            if(n1 > 1){
                result +=s1+words.m1[n1-1];
                if(n0 > 0) get_n();
            }
            else{
                result +=s1+words.l0[n0];
            }
        }else{
            if(n0 > 0) get_n();
        }
        if(power){
            var d = (power-3)/3;
            if((d == 0) && (n0+n1*10 >= 11 && n0+n1*10 <= 14)){
                result +=' '+words.m3[0][2];
            }else if(n0 == 1){
                result +=' '+words.m3[d][0];
            }
            else if((n0 >= 2) && (n0 <= 4)){
                result +=' '+words.m3[d][1];
            }
            else if((n0 == 0) || (n0 >= 5 && n0 <= 9)){
                result +=' '+words.m3[d][2];
            }
        }
        return result;
    }
    this.result = '';
    for(var i = 9 ; i > -1; i-=3){
        this.result += this.dim(dig, i, this.words) + ' ';
    }
    return this.result.replace(/[\s]{2,}/ig,' ').trim();
}

function datetotext(d){
    var month = ['січня','лютого','березня','квітня',"травня",'червня','липня','серпня',"вересня",'жовтня','листопада','грудня'];

    var t = dateparttotext(d.substr(8, 2)) + ' ' + month[parseInt(d.substr(5, 2))-1] + ' дві тисячі ' + dateparttotext(d.substr(2, 2))+' року';

    return t;
}

function dateparttotext(date){

    this.words = {

        m1:['десять','двадцятого','тридцятого'],
        m0:['першого','другого','третього','четвертого',"п'ятого",'шостого','сьомого','восьмого',"дев'ятого",'десятого'],
        f0:['одна','дві'],
        l0:['дестятого', 'одинадцятого','дванадцятого','тринадцятого','чотирнадцятого',"п'ятнадцятого",'шістнадцятого','сімнадцятого','вісімнадцятого',"дев'ятнадцятого"]
    };
    this.dim = function(date, power, words){
        var result = '';
        var pow = Math.floor(date/Math.pow(10, power)) % Math.pow(10,3);
        if(!pow) return result;
        var n2 =  Math.floor(pow/100);
        var n1 =  Math.floor(pow%Math.pow(10,2)/10);
        var n0 =  Math.floor(pow%10);
        var s1 = (n1 > 0)?' ':'';
        var s0 = (n0 > 0)?' ':'';
        var get_n = function(){
            switch(power){
                case 0:
                case 6:
                case 9:
                    result +=s0+words.m0[n0-1];
                    break;
                case 3:
                    if(n0 < 3){
                        result +=s0+words.f0[n0-1];
                    }else{
                        result +=s0+words.m0[n0-1];
                    }
                    break;
            }
        };
        if(n2 > 0){
            result += words.m2[n2-1];
        }
        if(n1 > 0){
            if(n1 > 1){
                result +=s1+words.m1[n1-1];
                if(n0 > 0) get_n();
            }
            else{
                result +=s1+words.l0[n0];
            }
        }else{
            if(n0 > 0) get_n();
        }
        if(power){
            var d = (power-3)/3;
            if((d == 0) && (n0+n1*10 >= 11 && n0+n1*10 <= 14)){
                result +=' '+words.m3[0][2];
            }else if(n0 == 1){
                result +=' '+words.m3[d][0];
            }
            else if((n0 >= 2) && (n0 <= 4)){
                result +=' '+words.m3[d][1];
            }
            else if((n0 == 0) || (n0 >= 5 && n0 <= 9)){
                result +=' '+words.m3[d][2];
            }
        }
        return result;
    }
    this.result = '';
    for(var i = 9 ; i > -1; i-=3){
        this.result += this.dim(date, i, this.words) + ' ';
    }
    return this.result.replace(/[\s]{2,}/ig,' ').trim();
}