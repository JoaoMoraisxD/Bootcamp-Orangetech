
const preçoEtiqueta = 100;

function sistemaJuros(forma_de_pagamento) {
    if ( forma_de_pagamento === 1){
        alert(preçoEtiqueta - (preçoEtiqueta * 0.1));
    }else if (forma_de_pagamento === 2) {
        alert (preçoEtiqueta - (preçoEtiqueta* 0.15));
    }else if (forma_de_pagamento === 3) {
        alert (preçoEtiqueta);
    }else {
        alert (preçoEtiqueta + (preçoEtiqueta * 0.1));
    }
}

sistemaJuros(2) 
