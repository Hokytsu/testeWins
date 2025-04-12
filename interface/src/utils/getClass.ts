export function getClassSkin(className: string) { // Pega o type pelo nome da IMG.
    let type;  

    if (className.includes('COM')) {
        type = 'COM';
    }else if (className.includes('EPI')) {
        type = 'EPI';
     
    }else if (className.includes('LEG')) {
        type = 'LEG';
       
    }else{
        type = 'Dont Have any type';
    }


    return type;
}
// WEAEPI0014
// WEACOM0027
// WEALEG0007

export function getColorByClass(className: string) { // Pega a cor do type pelo type dela
    let color;  
    if (className.includes('COM')) {
        color = '#E8E8E8';
    }else if (className.includes('EPI')) {
        color = '#E73387';
    }else if (className.includes('LEG')) {
        color = '#F2C230';   
    }else{
        color = '';
    } 
    return color;
}