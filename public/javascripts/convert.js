const e = require("express");

function doConvert(string){
    str = string.toLowerCase();
    var i = 0;
    var newStr = '';
    var kStr = '';
    while(i<str.length){
        // console.log(str.length);
        if(isVowel(str[i])){
            if(i<str.length-1){
                if(isVowel(str[i+1])){
                    //ear, eagle, air, out, earth
                    if(str[i]=='e'&&str[i]=='a'){
                        eaVowels(str, i, newStr);
                    }
                    if(str[i]=='a'){
                        if(str=='air'){
                            i=str.length;
                            newStr='ea';
                            kStr+=ktkForVowel('e');
                            kStr+=ktkForVowel('a');
                        }
                        else{
                            newStr+="aa";
                            i+=2;
                            kStr+=ktkForVowel('a');
                            kStr+=ktkForVowel('a');
                        }
                    }
                    if(str[i]=='o'){
                        newStr+="oo";
                        kStr+=ktkForVowel('o');
                        kStr+=ktkForVowel('o');
                        i+=2;
                    }
                    else{
                        newStr+=str[i];
                        newStr+=str[i+1];
                        kStr+=ktkForVowel(str[i]);
                        kStr+=ktkForVowel(str[i]);
                        i+=2;
                    }
                }
                else{
                    newStr+=str[i];
                    kStr+=ktkForVowel(str[i]);
                    i++;
                }
            }
            else{
                newStr+=str[i];
                kStr+=ktkForVowel(str[i]);
                i++;
            }
        }
        else{
            if(i<(str.length-1)){
                
                if(isVowel(str[i+1])){
                    if(i+1<str.length-1){
                        if(isVowel(str[i+2])){
                            if(i+2<str.length-1){
                                if(str[i+3]=='r'){
                                    //it might be just if it is 'r' u will add +4 instead of +3
                                    if(str[i+1]=='e'){
                                        if(str=='heart'){
                                            newStr='haato';
                                            kStr='ハート';
                                            i=str.length;
                                        }
                                        else{
                                            newStr+= str[i];// con with I
                                            newStr+=str[i+1];
                                            newStr+=str[i+2];
                                            var s = str[i];
                                            s+='i';
                                            kStr+= ktkForConsWithVowels(s)//con with I
                                            kStr+=ktkForVowel(str[i+2]);
                                            i+=4;
                                        }
                                    }
                                    else if(str[i+1]=='o'&&str[i+2]=='u'){
                                        newStr+= str[i];// con with that str[i+1];
                                        newStr+='aa';
                                        var s = str[i];
                                        s+='a';
                                        kStr+= ktkForConsWithVowels(s);
                                        kStr+="ー";
                                        i+=4;
                                    }
                                    else{
                                        newStr+= str[i];// con with that str[i+1];
                                        newStr+=str[i+1];
                                        var s = str[i];
                                        s+=str[i+1];
                                        kStr+= ktkForConsWithVowels(s)
                                        kStr+="ー";
                                        i+=4;
                                    }
                                }
                                else{
                                    //forth not r so we dont need to consider it
                                    if((str[i+1]=='e')){
                                        newStr+= str[i];// con with I
                                        newStr+='ii';
                                        var s = str[i];
                                        s+='i';
                                        kStr+= ktkForConsWithVowels(s)
                                        kStr+="ー";
                                        i+=3;
                                    }
                                    else if(str[i+1]=='o'&&str[i+2]=='o'){
                                        newStr+= str[i]// con with u
                                        newStr+='u';
                                        var s = str[i];
                                        s+='u';
                                        kStr+= ktkForConsWithVowels(s)//con with u
                                        kStr+="ー";
                                        i+=3;
                                    }
                                    else{
                                        newStr+= // con with str[i+1]
                                        newStr+=str[i+1];
                                        var s = str[i];
                                        s+=str[i+1];
                                        kStr+= ktkForConsWithVowels(s); //con with str[i+1]
                                        kStr+=ktkForVowel(str[i+2]);
                                        i+=3;
                                    }
                                }
                            }
                            else{
                                if((str[i+1]=='e')){
                                    newStr+= str[i]// con with I
                                    newStr+='ii';
                                    var s = str[i];
                                    s+='i';
                                    kStr+= ktkForConsWithVowels(s) //con with I
                                    kStr+="ー";
                                    i+=3;
                                }
                                else if(str[i+1]=='o'&&str[i+2]=='o'){
                                    newStr+= str[i];// con with u
                                    newStr+='u';
                                    var s = str[i];
                                    s+='u';
                                    kStr+= ktkForConsWithVowels(s)//con with u
                                    kStr+="ー";
                                    i+=3;
                                }
                                
                                else{
                                    newStr+= str[i] + str[i+1]// con with str[i+1]
                                    newStr+=str[i+2];
                                    var s = str[i];
                                    s+=str[i+1];
                                    kStr+= ktkForConsWithVowels(s)//con with str[i+1]
                                    kStr+=ktkForVowel(str[i+2]);
                                    i+=3;
                                }
                            }
                        }
                        else{
                            if(str[i+2]=='r'){
                                //need case with Xer ex. xerox
                                newStr+=str[i]; // not all cases 
                                newStr+='aa';
                                var ths= str[i];
                                ths+='a';
                                
                                kStr+=ktkForConsWithVowels(ths);
                                kStr+='ー';
                                i+=3;
                            }
                            else if(str[i+2]=='y'){
                                if(str[i+1]=='a'){
                                    newStr+=str[i]; // not all cases 
                                    newStr+='ee';
                                    var ths= str[i];
                                    ths+='e';
                                    
                                    kStr+=ktkForConsWithVowels(ths);
                                    kStr+='ー';
                                    i+=3;
                                }
                                else if(str[i+1]=='e'){
                                    newStr+=str[i]; // not all cases 
                                    newStr+='ii';
                                    var ths= str[i];
                                    ths+='i';
                                    
                                    kStr+=ktkForConsWithVowels(ths);
                                    kStr+='ー';
                                    i+=3;
                                }
                                else {
                                    newStr+=str[i]; // not all cases 
                                    newStr+=str[i+1];
                                    newStr+='i';
                                    var ths= str[i];
                                    ths+=str[i+1];
                                    
                                    kStr+=ktkForConsWithVowels(ths);
                                    kStr+='イ';
                                    i+=3;
                                }
                            }
                            else{
                                // console.log(1);
                                newStr+=str[i]; // not all cases 
                                newStr+=str[i+1];
                                var ths= str[i];
                                ths+=str[i+1];
                                
                                kStr+=ktkForConsWithVowels(ths);
                                i+=2;
                            }
                        }
                    }
                    else{
                        newStr+=str[i]; // not all cases 
                        newStr+=str[i+1];
                        var ths= str[i];
                        ths+=str[i+1];

                        kStr+=ktkForConsWithVowels(ths);
                        i+=2;
                    }
                }
                else{
                    if(str[i]=='g'&&str[i+1]=='h'){
                        i+=2;
                    }
                    else if(str[i]=='t'&&str[i+1]=='h'){
                        if(i==0){
                            if(str.length>3){
                                newStr+=z; //z + str[i+2]; romaji
                                newStr+=str[i+2];

                                var s = 'z';
                                s+=str[i+2];
                                kStr+= ktkForConsWithVowels(s);//z + str[i+2];
                                kStr+='ー'
                                i+=3;
                            }
                            else{
                                i=str.length;
                                kStr="ザ";
                                newStr="za";
                            }
                        }
                        else{
                            newStr+='su';
                            var s='su';
                            kStr+= ktkForConsWithVowels(s); // ktk of su
                            i+=2;
                        }
                    }
                    else if(str[i]==str[i+1]){
                        i++;
                    }
                    else if(str[i]=='w'&&str[i+1]=='r'){
                        newStr+='r';
                        newStr+=str[i+2];
                        var s = 'r';
                        s+=str[i];
                        kStr+= ktkForConsWithVowels(s);//ktk for r with some vowel
                        i+=3;
                    }
                    else if(str[i]=='k'&&str[i+1]=='n'){
                        newStr+='n';
                        newStr+=str[i+2];
                        var s = 'n';
                        s+=str[i+2];
                        kStr+= ktkForConsWithVowels(s);//ktk for n  with some vowel
                        i+=3;
                    }
                    else{ //ktk of it more likely with u
                        newStr+=str[i];
                        newStr+='u' // WRONG in some cases
                        kStr+=ktkForSingleCons(str[i]);
                        i++;
                    }
                }
            }
            else{
                kStr+=endingWithConsonant(str[i]);
                i=str.length;
            }
        }
    }
    return kStr;
    console.log(kStr);
}
function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}
// console.log(some);
// function isVowel(char){
//     var vowels = new Array("a",'e','i','o','u');
//     for(e in vowels){
//         if(char == vowels[e]) return true;
//     }
//     return false;
// }

function ktkForVowel(char){
    if('a' == char){
        return 'ア';
    }
    else if('i' == char){
        return 'イ';
    }
    else if('o' == char){
        return 'オ';
    }
    else if('e' == char){
        return 'エ';
    }
    else{
        return 'ウ';
    }
}

// function twoVowels(str, i){

// }


function endingWithConsonant(char){
    if(char=='t'){
        // newStr+='tto';
        return 'ット';
    }
    else if(char=='ck'){
        // newStr+='kku';
        return "ック";
    }
    else if(char=='p'){
        // newStr+='ppu';
        return 'ップ';
    }
    else if(char=='d'){
        // newStr+='ddo';
        return 'ッド';
    }
    else if(char=='g'){
        // newStr+='ggu';
        return 'ッグ';
    }
    else if(char=='n'){
        // newStr+='n';
        return 'ン';
    }
    else{
        var kts = ktkForSingleCons(char);
        return kts
    }
    //case x => kkusu
}

function eaVowels(str, i, newStr, kStr){
    if(str == "earth"){
        newStr = 'aasu';
        kStr =  'アース';
        i = str.length;
    }
    else if(str == 'ear'){
        newStr = 'ia';
        kStr = 'イア';
        i = str.length;
    }
    else{
        newStr+='ii';
        kStr+='イー'
        i+=2;
    }
}

function ktkForConsWithVowels(str){
    if(str[0]=='b'){
        if(str[1]=='a'){
            return "バ";
        }
        else if(str[1]=='e'){
            return "ベ";
        }
        else if(str[1]=='i'){
            return "ビ";
        }
        else if(str[1]=='o'){
            return "ボ";
        }
        else{
            return "ブ";
        }
    }
    else if(str[0]=='c'){
        if(str[1]=='a'){
            return "カ";
        }
        else if(str[1]=='e'){
            return "セ";
        }
        else if(str[1]=='i'){
            return "サイ";
        }
        else if(str[1]=='o'){
            return "コ";
        }
        else{
            return "カ"; //might be kyu
        }
    }
    else if(str[0]=='d'){
        if(str[1]=='a'){
            return "ダ"; //might be dee
        }
        else if(str[1]=='e'){
            return "デ";
        }
        else if(str[1]=='i'){
            return "ヂィ";
        }
        else if(str[1]=='o'){
            return "ド";
        }
        else{
            return "デュ";
        }
    }
    // THERE 
    else if(str[0]=='f'){
        if(str[1]=='a'){
            return "ファ"; // might be fi
        }
        else if(str[1]=='e'){
            return "フェ"; // 
        }
        else if(str[1]=='i'){
            return "フィ ";
        }
        else if(str[1]=='o'){
            return "ボ";
        }
        else{
            return "ブ";
        }
    }
    else if(str[0]=='g'){
        if(str[1]=='a'){
            return "ガ";
        }
        else if(str[1]=='e'){
            return "ジェ";
        }
        else if(str[1]=='i'){
            return "ジ";
        }
        else if(str[1]=='o'){
            return "ゴ";
        }
        else{
            return "ガ";
        }
    }
    else if(str[0]=='h'){
        if(str[1]=='a'){
            return "ハ";
        }
        else if(str[1]=='e'){
            return "ヘ";
        }
        else if(str[1]=='i'){
            return "ヒ";
        }
        else if(str[1]=='o'){
            return "オ";
        }
        else{
            return "ハ";
        }
    }
    else if(str[0]=='q'){
        if(str[1]=='a'){
            return "カ";
        }
        else if(str[1]=='e'){
            return "ベ";
        }
        else{
            return "ク";
        }
    }
    else if(str[0]=='j'){
        if(str[1]=='a'){
            return "ジャ";
        }
        else if(str[1]=='e'){
            return "ジェ";
        }
        else if(str[1]=='i'){
            return "ジ";
        }
        else if(str[1]=='o'){
            return "ジョ";
        }
        else{
            return "ジュ";
        }
    }
    else if(str[0]=='k'){
        if(str[1]=='a'){
            return "カ";
        }
        else if(str[1]=='e'){
            return "ケ";
        }
        else if(str[1]=='i'){
            return "キ";
        }
        else if(str[1]=='o'){
            return "コ";
        }
        else{
            return "ク";
        }
    }
    else if(str[0]=='l'){
        if(str[1]=='a'){
            return "ラ";
        }
        else if(str[1]=='e'){
            return "レ";
        }
        else if(str[1]=='i'){
            return "リ";
        }
        else if(str[1]=='o'){
            return "ロ";
        }
        else{
            return "ル";
        }
    }
    else if(str[0]=='m'){
        if(str[1]=='a'){
            return "マ";
        }
        else if(str[1]=='e'){
            return "メ";
        }
        else if(str[1]=='i'){
            return "ミ";
        }
        else if(str[1]=='o'){
            return "モ";
        }
        else{
            return "ム";
        }
    }
    else if(str[0]=='n'){
        if(str[1]=='a'){
            return "ナ";
        }
        else if(str[1]=='e'){
            return "ネ";
        }
        else if(str[1]=='i'){
            return "ニ";
        }
        else if(str[1]=='o'){
            return "ノ";
        }
        else{
            return "ナ";
        }
    }
    else if(str[0]=='p'){
        if(str[1]=='a'){
            return "パ";
        }
        else if(str[1]=='e'){
            return "ペ";
        }
        else if(str[1]=='i'){
            return "ピ";
        }
        else if(str[1]=='o'){
            return "ポ";
        }
        else{
            return "プ";
        }
    }
    else if(str[0]=='r'){
        if(str[1]=='a'){
            return "ラ";
        }
        else if(str[1]=='e'){
            return "レ";
        }
        else if(str[1]=='i'){
            return "リ";
        }
        else if(str[1]=='o'){
            return "ロ";
        }
        else{
            return "ル";
        }
    }
    else if(str[0]=='s'){
        if(str[1]=='a'){
            return "サ";
        }
        else if(str[1]=='e'){
            return "セ";
        }
        else if(str[1]=='i'){
            return "シ";
        }
        else if(str[1]=='o'){
            return "ソ";
        }
        else{
            return "ス";
        }
    }
    else if(str[0]=='t'){
        if(str[1]=='a'){
            return "タ";
        }
        else if(str[1]=='e'){
            return "テ";
        }
        else if(str[1]=='i'){
            return "チ";
        }
        else if(str[1]=='o'){
            return "ト";
        }
        else{
            return "チュ";
        }
    }
    else if(str[0]=='w'){
        if(str[1]=='a'){
            return "ウア";
        }
        else if(str[1]=='e'){
            return "ウェ";
        }
        else if(str[1]=='i'){
            return "ウイ";
        }
        else if(str[1]=='o'){
            return "ウオ";
        }
        else{
            return "ウ";
        }
    }
    else if(str[0]=='x'){
        if(str[1]=='a'){
            return "ザ";
        }
        else if(str[1]=='e'){
            return "キ";
        }
        else if(str[1]=='i'){
            return "ジ";
        }
        else{
            return "ザ";
        }
        // need case Xy => zai
    }
    else if(str[0]=='y'){
        if(str[1]=='a'){
            return "ヤ";
        }
        else if(str[1]=='e'){
            return "イェ";
        }
        else if(str[1]=='i'){
            return "イ";
        }
        else if(str[1]=='o'){
            return "ヨ";
        }
        else{
            return "ユ";
        }
    }
    else if(str[0]=='z'){
        if(str[1]=='a'){
            return "ザ";
        }
        else if(str[1]=='e'){
            return "ゼ";
        }
        else if(str[1]=='i'){
            return "ジ";
        }
        else if(str[1]=='o'){
            return "ゾ";
        }
        else{
            return "ズ";
        }
    }
    else{
        //v
        if(str[1]=='a'){
            return "ヴァ";
        }
        else if(str[1]=='e'){
            return "ヴェ";
        }
        else if(str[1]=='i'){
            return "ビ";
        }
        else if(str[1]=='o'){
            return "ボ";
        }
        else{
            return "バ";
        }
    }
}


//  NEED EXCEPTIONAL CASE FOR CON+VOWEL

function ktkForSingleCons(char){
    if(char=='s'){
        return 'ス'
    }
    else if(char=='d'){
        return 'ド'
    }
    else if(char=='w'){
        return 'ウ'
    }
    else if(char=='b'){
        return 'ブ'
    }
    else if(char=='c'){
        return 'ク'
    }
    else if(char=='f'){
        return 'フ'
    }
    else if(char=='g'){
        return 'グ'
    }
    else if(char=='h'){
        return ''
    }
    else if(char=='j'){
        return 'ジュ'
    }
    else if(char=='k'){
        return 'ク'
    }
    else if(char=='l'){
        return 'ル'
    }
    else if(char=='m'){
        return 'ム'
    }
    else if(char=='n'){
        return 'ン'
    }
    else if(char=='p'){
        return 'プ'
    }
    else if(char=='q'){
        return 'ク'
    }
    else if(char=='r'){
        return 'ツ'
    }
    else if(char=='t'){
        return 'ツ'
    }
    else if(char=='v'){
        return 'ブ'
    }
    else if(char=='x'){
        return 'ズ'
    }
    else if(char=='z'){
        return 'ズ'
    }
    else{
        //y
        return 'ド'
    }
}

module.exports = { doConvert, ktkForConsWithVowels, ktkForSingleCons, ktkForVowel, eaVowels, endingWithConsonant};
