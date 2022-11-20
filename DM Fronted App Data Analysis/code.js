



function type(data=""){

    var blank = new RegExp(/^(\s)*$/,'gm');
    var decimal = new RegExp(/^\d*\.\d*$/,'gm');
    var number = new RegExp(/^\d*$/,'gm');
    var date = new RegExp(/^((([0-2][0-9]|[3][0-1])|([1-9]))\/(([0][1-9]|[1][0-2])|([1-9]))\/[1-2]([9]|[0])[0-9][0-9])|((([0-2][0-9]|[3][0-1])|([1-9]))-(([0][1-9]|[1][0-2])|([1-9]))-[1-2]([9]|[0])[0-9][0-9])$/,'gm');
    var datetime = new RegExp(/^(((([0-2][0-9]|[3][0-1])|([1-9]))\/(([0][1-9]|[1][0-2])|([1-9]))\/[1-2]([9]|[0])[0-9][0-9])|((([0-2][0-9]|[3][0-1])|([1-9]))-(([0][1-9]|[1][0-2])|([1-9]))-[1-2]([9]|[0])[0-9][0-9]))\s\s((([0][1-9]|[1][0-1]):([0-5][0-9]):([0-5][0-9])\s(AM|PM)|(12:00:00\s(AM|PM)))|((24:00:00)|(00:00:00)|((([0][1-9])|([1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9]))))$/,'gm');
    var time = new RegExp(/^((([0][1-9]|[1][0-1]):([0-5][0-9]):([0-5][0-9])\s(AM|PM)|(12:00:00\s(AM|PM)))|((24:00:00)|(00:00:00)|((([0][1-9])|([1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9]))))$/,'gm')
    var text = new RegExp(/^\D.*$/,'gm');
    var string = new RegExp(/^.*$/);


    var final = "";

if(blank.test(data)){
    final = "Blank";
}
 else{
    if(decimal.test(data)){
    final = "Decimal";
 }else{
    if(number.test(data)){
        final = "Number";
    }else{
        if(date.test(data)){
            final = "Date";
        }else{
            if(datetime.test(data)){
                final = "DateTime";
            }else{
                if(time.test(data)){
                    final = "Time";
                }else{
                    if(text.test(data)){
                        final = "Text";
                    }else{
                        if(string.test(data)){
                            final = "String";
                        }else{

                            final = "other";
                        }

                    }
                }
            }
        }
    }
 }
 }


    return final;
}

